import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// POST: Crear nuevo mensaje
export async function POST(req: NextRequest) {
  try {
    const { conversationId, role, content } = await req.json();

    if (!conversationId || !role || !content) {
      return NextResponse.json(
        { error: "conversationId, role y content son requeridos" },
        { status: 400 }
      );
    }

    if (role !== "user" && role !== "assistant") {
      return NextResponse.json(
        { error: "role debe ser 'user' o 'assistant'" },
        { status: 400 }
      );
    }

    const message = await prisma.message.create({
      data: {
        conversationId,
        role,
        content,
      },
    });

    return NextResponse.json({ message }, { status: 201 });
  } catch (error) {
    console.error("Error creando mensaje:", error);
    return NextResponse.json(
      { error: "Error creando mensaje" },
      { status: 500 }
    );
  }
}

// GET: Obtener mensajes de una conversación
export async function GET(req: NextRequest) {
  try {
    const conversationId = req.nextUrl.searchParams.get("conversationId");

    if (!conversationId) {
      return NextResponse.json(
        { error: "conversationId es requerido" },
        { status: 400 }
      );
    }

    const messages = await prisma.message.findMany({
      where: { conversationId },
      orderBy: { timestamp: "asc" },
    });

    return NextResponse.json({ messages });
  } catch (error) {
    console.error("Error obteniendo mensajes:", error);
    return NextResponse.json(
      { error: "Error obteniendo mensajes" },
      { status: 500 }
    );
  }
}
