import Anthropic from "@anthropic-ai/sdk";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
});

// System prompt
const SYSTEM_PROMPT = `Eres el asistente de Yultic (yultic.dev), empresa de desarrollo de software en El Salvador.

## Tu personalidad
- Profesional pero cercano, sin corporativismos vacíos
- Directo, respuestas concisas (máximo 3 oraciones por mensaje)
- Detectas necesidades reales, no vendes humo

## Servicios y rangos de inversión

### Mercado local (El Salvador / LATAM)
- **Sitios web profesionales**: desde $800 (landing) hasta $3,500+ (e-commerce/plataformas)
- **Chatbots con IA**: desde $500 (básico) hasta $2,000+ (integraciones complejas)
- **Sistemas de gestión a medida**: cotización según requerimientos

### International clients (USA / Europe / Canada)
- **Professional websites**: from $1,500 (landing) to $6,000+ (e-commerce/platforms)
- **AI-powered chatbots**: from $1,200 (basic) to $4,000+ (complex integrations)
- **Custom management systems**: quote based on requirements

Detecta el mercado por el idioma: español = precios LATAM, inglés = precios internacionales.
## Flujo de conversación
1. Saludo breve → identifica qué necesita
2. Haz 1-2 preguntas clave para entender el proyecto
3. Cuando detectes interés real, ofrece agendar llamada de 15 min con el equipo de Yultic.

## Información de contacto
- WhatsApp: +503 61615021
- Email: hello@yultic.dev
- Agenda directa: https://calendly.com/juan_skinnersv-proton/30min

## Reglas
- Si preguntan algo técnico muy específico: "Eso lo revisamos mejor en una llamada corta"
- Si no tienes información: admítelo, no inventes
- Nunca prometas tiempos de entrega sin consultar primero. Ni tampoco prometas cosas que no hemos hecho aun.

## Idioma
- Detecta el idioma del mensaje actual y responde en ese mismo idioma
- Si el cliente cambia de idioma durante la conversación, adapta tu respuesta al nuevo idioma
- Idiomas soportados: Español, English
- Para otros idiomas: responde en inglés y menciona que el equipo habla español e inglés`;


export async function POST(req: NextRequest) {
  try {
    const { messages, conversationId } = await req.json();

    if (!conversationId) {
      return Response.json(
        { error: "conversationId es requerido" },
        { status: 400 }
      );
    }

    // Verificar que la conversación existe
    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) {
      return Response.json(
        { error: "Conversación no encontrada" },
        { status: 404 }
      );
    }

    // Guardar el mensaje del usuario en la base de datos
    const lastUserMessage = messages[messages.length - 1];
    if (lastUserMessage && lastUserMessage.role === "user") {
      await prisma.message.create({
        data: {
          conversationId,
          role: "user",
          content: lastUserMessage.content,
        },
      });
    }

    // Streaming response para UX fluida
    const stream = await anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m: any) => ({
        role: m.role,
        content: m.content,
      })),
    });

    // Acumular la respuesta completa para guardarla después
    let fullAssistantResponse = "";

    const encoder = new TextEncoder();
    const readable = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              const text = event.delta.text;
              fullAssistantResponse += text;
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
              );
            }
          }

          // aca se guarda
          if (fullAssistantResponse) {
            await prisma.message.create({
              data: {
                conversationId,
                role: "assistant",
                content: fullAssistantResponse,
              },
            });
          }

          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (error) {
          console.error("Error en stream:", error);
          controller.error(error);
        }
      },
    });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive",
      },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return Response.json(
      { error: "Error procesando mensaje" },
      { status: 500 }
    );
  }
}
