"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@/hooks/useChat";
import { MessageCircle, X, Send, Loader2, Trash2 } from "lucide-react";
import { Toast, type ToastType } from "./Toast";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [toast, setToast] = useState<{ message: string; type: ToastType } | null>(null);
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (error) {
      setToast({ message: error, type: "error" });
    }
  }, [error]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const handleClearChat = () => {
    if (messages.length > 0) {
      if (confirm("¿Estás seguro que deseas borrar toda la conversación?")) {
        clearChat();
        setToast({ message: "Conversación eliminada", type: "success" });
      }
    }
  };

  return (
    <>
      {/* Boton flotante */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-accent-red
                   shadow-[4px_4px_0px_0px_oklch(0.20_0_0)] hover:shadow-[2px_2px_0px_0px_oklch(0.20_0_0)]
                   hover:translate-x-[2px] hover:translate-y-[2px]
                   transition-all duration-150
                   flex items-center justify-center"
        aria-label={isOpen ? "Cerrar chat" : "Abrir chat"}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>

      {/* Ventana del chat */}
      <div
        className={`fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-background border-2 border-border
                    shadow-[8px_8px_0px_0px_oklch(0.20_0_0)]
                    flex flex-col overflow-hidden transition-all duration-150 origin-bottom-right
                    ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"}`}
      >
        {/* Header */}
        <div className="bg-accent-red px-4 py-3 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-white font-semibold">Yultic Asistente</h3>
            <p className="text-white/70 text-xs font-mono">En linea</p>
          </div>
          {messages.length > 0 && (
            <button
              onClick={handleClearChat}
              className="p-2 hover:bg-white/10 transition-colors duration-150"
              aria-label="Limpiar conversación"
              title="Limpiar conversación"
            >
              <Trash2 className="w-5 h-5 text-white" />
            </button>
          )}
        </div>

        {/* Mensajes */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
          {messages.length === 0 && (
            <div className="text-center text-muted-foreground mt-8">
              <p className="text-lg mb-2">Hola</p>
              <p className="text-sm font-mono">¿En qué puedo ayudarte?</p>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 ${
                  message.role === "user"
                    ? "bg-accent-red text-white"
                    : "bg-muted border border-border text-foreground"
                }`}
              >
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}

          {isLoading && messages[messages.length - 1]?.content === "" && (
            <div className="flex justify-start">
              <div className="bg-muted border border-border px-4 py-2">
                <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSubmit} className="p-4 bg-background border-t border-border">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="flex-1 px-4 py-2 border-2 border-border bg-background text-foreground font-mono text-sm
                         focus:outline-none focus:border-accent-red
                         placeholder:text-muted-foreground"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-accent-red text-white flex items-center justify-center
                         hover:bg-accent-red-dim disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-150"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>

      {/* Toast notifications */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
}
