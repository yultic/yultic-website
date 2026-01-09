import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId es requerido" },
        { status: 400 }
      );
    }

    const conversation = await prisma.conversation.findUnique({
      where: { sessionId },
      include: {
        messages: {
          orderBy: { timestamp: "asc" },
        },
      },
    });

    return NextResponse.json({ conversation });
  } catch (error) {
    console.error("Error obteniendo conversación:", error);
    return NextResponse.json(
      { error: "Error obteniendo conversación" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const { sessionId } = await req.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId es requerido" },
        { status: 400 }
      );
    }

  
    const existing = await prisma.conversation.findUnique({
      where: { sessionId },
    });

    if (existing) {
      return NextResponse.json({ conversation: existing });
    }

  
    const conversation = await prisma.conversation.create({
      data: { sessionId },
    });

    return NextResponse.json({ conversation }, { status: 201 });
  } catch (error) {
    console.error("Error creando conversación:", error);
    return NextResponse.json(
      { error: "Error creando conversación" },
      { status: 500 }
    );
  }
}

// DELETE: Eliminar conversación y todos sus mensajes
export async function DELETE(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get("sessionId");

    if (!sessionId) {
      return NextResponse.json(
        { error: "sessionId es requerido" },
        { status: 400 }
      );
    }

    await prisma.conversation.delete({
      where: { sessionId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error eliminando conversación:", error);
    return NextResponse.json(
      { error: "Error eliminando conversación" },
      { status: 500 }
    );
  }
}
