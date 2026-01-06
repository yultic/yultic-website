import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Code2, Laptop, Users, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function WhatWeDoSection() {
  return (
    <section id="que-hacemos" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-20 text-justify-center">
          <h2 className="text-xl font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">Lo que hacemos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* SkinnerSV - Software de RRHH */}
          <Card className="group hover:shadow-xl hover:border-foreground/20 transition-all duration-300 border-border bg-card relative overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-muted flex items-center justify-center p-6">
              <Image
                src="/skinner-logo.png"
                alt="SkinnerSV HR Software"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 space-y-4 relative">
              <div className="inline-flex p-2.5 rounded-md bg-foreground text-background">
                <Users className="size-5" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">Skinner</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground font-medium">
                    Producto
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">Software de Recursos Humanos</p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Plataforma de gestión administrativa inteligente que combina IA avanzada con gestión 
                de talento humano. Optimiza procesos administrativos y 
                fortalece la infraestructura tecnológica de las organizaciones.
              </p>
              <div className="pt-2">
                <Button variant="ghost" className="px-0 group/btn" asChild>
                  <a href="https://www.skinnersv.net" target="_blank" rel="noopener noreferrer">
                    Conocer SkinnerSV
                    <ExternalLink className="ml-2 size-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Desarrollo de Software a Medida */}
          <Card className="group hover:shadow-xl hover:border-foreground/20 transition-all duration-300 border-border bg-card relative overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              <Image
                src="/software.jpg"
                alt="Desarrollo de Software"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 space-y-4 relative">
              <div className="inline-flex p-2.5 rounded-md bg-foreground text-background">
                <Code2 className="size-5" />
              </div>
              <h3 className="text-xl font-semibold">Desarrollo de Software a Medida</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Software desde el origen del problema. Cada decisión técnica con un propósito claro, cada sistema
                diseñado con criterio y responsabilidad.
              </p>
              <ul className="space-y-2 text-[15px] text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Sistemas de gestión empresarial (ERP, CRM)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Automatización de procesos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Integraciones y APIs personalizadas</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Aplicaciones Web Modernas */}
          <Card className="group hover:shadow-xl hover:border-foreground/20 transition-all duration-300 border-border bg-card relative overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              <Image
                src="/web.jpg"
                alt="Aplicaciones Web"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 space-y-4 relative">
              <div className="inline-flex p-2.5 rounded-md bg-foreground text-background">
                <Laptop className="size-5" />
              </div>
              <h3 className="text-xl font-semibold">Aplicaciones Web Modernas</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Experiencias web rápidas y escalables. Construidas con estándares globales, diseñadas para durar.
              </p>
              <ul className="space-y-2 text-[15px] text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Sitios web corporativos y landing pages</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Plataformas SaaS y e-commerce</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Dashboards y aplicaciones empresariales</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* IA y Datos */}
          <Card className="group hover:shadow-xl hover:border-foreground/20 transition-all duration-300 border-border bg-card relative overflow-hidden">
            <div className="relative h-48 w-full overflow-hidden bg-muted">
              <Image
                src="/ia.jpg"
                alt="Inteligencia Artificial"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <CardContent className="p-8 space-y-4 relative">
              <div className="inline-flex p-2.5 rounded-md bg-foreground text-background">
                <Brain className="size-5" />
              </div>
              <h3 className="text-xl font-semibold">Inteligencia Artificial y Datos</h3>
              <p className="text-muted-foreground leading-relaxed text-[15px]">
                Experimentamos, aprendemos y mejoramos. Transformamos datos en decisiones estratégicas con IA aplicada.
              </p>
              <ul className="space-y-2 text-[15px] text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Machine Learning y modelos predictivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Análisis y visualización de datos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-foreground mt-0.5">—</span>
                  <span>Automatización inteligente de procesos</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
