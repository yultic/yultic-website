import { CardContent } from "@/components/ui/card"
import { ExternalLink, Code2, Laptop, Users, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WhatWeDoSection() {
  return (
    <section id="que-hacemos" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 max-w-6xl mx-auto">
          <span className="font-mono text-xs text-accent-red tracking-widest">01</span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Lo que hacemos</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Grid asimetrico con borde contenedor */}
        <div className="max-w-6xl mx-auto border border-border">
          {/* Primera card - full width */}
          <div className="group border-b border-border">
            <div className="grid md:grid-cols-2">
              <div className="relative h-48 md:h-64 overflow-hidden bg-muted border-r border-border">
                <Image
                  src="/skinner-logo.png"
                  alt="SkinnerSV HR Software"
                  fill
                  className="object-contain p-6 grayscale group-hover:grayscale-0 transition-all duration-150"
                />
                <span className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 px-2 py-0.5">
                  Producto
                </span>
              </div>
              <CardContent className="p-8 space-y-4">
                <div className="inline-flex p-2.5 bg-accent-red text-white">
                  <Users className="size-5" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Skinner</h3>
                  <p className="text-sm text-muted-foreground font-medium font-mono">Software de Recursos Humanos</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-[15px]">
                  Plataforma de gestion administrativa inteligente que combina IA avanzada con gestion
                  de talento humano. Optimiza procesos administrativos y
                  fortalece la infraestructura tecnologica de las organizaciones.
                </p>
                <div className="pt-2">
                  <Button variant="ghost" className="px-0 group/btn font-mono text-xs uppercase tracking-widest hover:text-accent-red" asChild>
                    <a href="https://www.skinnersv.net" target="_blank" rel="noopener noreferrer">
                      Conocer SkinnerSV
                      <ExternalLink className="ml-2 size-3 group-hover/btn:translate-x-0.5 transition-transform duration-150" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>

          {/* 3 cards en grid */}
          <div className="grid md:grid-cols-3">
            {/* Desarrollo de Software a Medida */}
            <div className="group border-b md:border-b-0 md:border-r border-border p-0">
              <div className="relative h-40 overflow-hidden bg-muted border-b border-border">
                <Image
                  src="/software.jpg"
                  alt="Desarrollo de Software"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-150"
                />
                <span className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 px-2 py-0.5">
                  Servicio
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="inline-flex p-2 bg-accent-red text-white">
                  <Code2 className="size-4" />
                </div>
                <h3 className="text-lg font-semibold">Software a Medida</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Sistemas ERP, CRM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Automatizacion de procesos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>APIs personalizadas</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Aplicaciones Web Modernas */}
            <div className="group border-b md:border-b-0 md:border-r border-border p-0">
              <div className="relative h-40 overflow-hidden bg-muted border-b border-border">
                <Image
                  src="/web.jpg"
                  alt="Aplicaciones Web"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-150"
                />
                <span className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 px-2 py-0.5">
                  Servicio
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="inline-flex p-2 bg-accent-red text-white">
                  <Laptop className="size-4" />
                </div>
                <h3 className="text-lg font-semibold">Apps Web Modernas</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Sitios corporativos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Plataformas SaaS</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Dashboards empresariales</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* IA y Datos */}
            <div className="group p-0">
              <div className="relative h-40 overflow-hidden bg-muted border-b border-border">
                <Image
                  src="/ia.jpg"
                  alt="Inteligencia Artificial"
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-150"
                />
                <span className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground bg-background/80 px-2 py-0.5">
                  Servicio
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="inline-flex p-2 bg-accent-red text-white">
                  <Brain className="size-4" />
                </div>
                <h3 className="text-lg font-semibold">IA y Datos</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Machine Learning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Analisis de datos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent-red mt-0.5">—</span>
                    <span>Automatizacion inteligente</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
