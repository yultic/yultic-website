'use client'
import { useState, useCallback, useRef, useEffect } from "react";
import { getSessionId } from "@/lib/session";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const RATE_LIMIT_KEY = "yultic-chat-rate-limit";
const MAX_MESSAGES_PER_HOUR = 20;

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  // Inicializar conversación y cargar mensajes
  useEffect(() => {
    async function initConversation() {
      try {
        const sessionId = getSessionId();

        // Intentar obtener conversación existente
        const getRes = await fetch(`/api/conversations?sessionId=${sessionId}`);
        const getData = await getRes.json();

        if (getData.conversation) {
          // Conversación existe, cargar mensajes
          setConversationId(getData.conversation.id);
          const dbMessages = getData.conversation.messages.map((m: any) => ({
            ...m,
            timestamp: new Date(m.timestamp),
          }));
          setMessages(dbMessages);
        } else {
          const createRes = await fetch("/api/conversations", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ sessionId }),
          });
          const createData = await createRes.json();
          setConversationId(createData.conversation.id);
        }
      } catch (err) {
        console.error("Error inicializando conversación:", err);
      }
    }

    initConversation();
  }, []);

  const checkRateLimit = useCallback((): boolean => {
    try {
      const stored = localStorage.getItem(RATE_LIMIT_KEY);
      const now = Date.now();

      if (!stored) {
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, resetTime: now + 3600000 }));
        return true;
      }

      const { count, resetTime } = JSON.parse(stored);

      if (now > resetTime) {
        localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: 1, resetTime: now + 3600000 }));
        return true;
      }

      if (count >= MAX_MESSAGES_PER_HOUR) {
        const minutesLeft = Math.ceil((resetTime - now) / 60000);
        setError(`Has alcanzado el límite de ${MAX_MESSAGES_PER_HOUR} mensajes por hora. Intenta en ${minutesLeft} minutos.`);
        return false;
      }

      localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify({ count: count + 1, resetTime }));
      return true;
    } catch (err) {
      console.error("Error verificando rate limit:", err);
      return true; // En caso de error, permitir el mensaje
    }
  }, []);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading || !conversationId) return;

  
    if (!checkRateLimit()) return;

  
    setError(null);

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Preparar mensaje del asistente vacío para streaming
    const assistantMessage: Message = {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, assistantMessage]);

    try {
      abortControllerRef.current = new AbortController();

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          conversationId,
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || "Error en respuesta del servidor");
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      while (reader) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ") && !line.includes("[DONE]")) {
            try {
              const data = JSON.parse(line.slice(6));
              setMessages((prev) =>
                prev.map((m) =>
                  m.id === assistantMessage.id
                    ? { ...m, content: m.content + data.text }
                    : m
                )
              );
            } catch {}
          }
        }
      }
    } catch (error) {
      if ((error as Error).name !== "AbortError") {
        console.error("Error:", error);
        const errorMessage = (error as Error).message || "Error al procesar tu mensaje. Intenta de nuevo.";
        setError(errorMessage);
        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantMessage.id
              ? { ...m, content: "Lo siento, ocurrió un error. Por favor intenta de nuevo." }
              : m
          )
        );
      }
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, conversationId, checkRateLimit]);

  const clearChat = useCallback(async () => {
    abortControllerRef.current?.abort();
    setMessages([]);
    setError(null);

    try {
      const sessionId = getSessionId();

      // Eliminar de la base de datos
      await fetch(`/api/conversations?sessionId=${sessionId}`, {
        method: "DELETE",
      });

      // Crear nueva conversación
      const createRes = await fetch("/api/conversations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId }),
      });
      const createData = await createRes.json();
      setConversationId(createData.conversation.id);
    } catch (err) {
      console.error("Error limpiando chat:", err);
    }
  }, []);

  return { messages, isLoading, error, sendMessage, clearChat };
}
