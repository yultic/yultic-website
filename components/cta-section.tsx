import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="contacto" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance leading-tight">
            ¿Tienes un problema real que resolver?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
            No construimos software por construir. Diseñamos sistemas con
            criterio, pensados para durar y crecer sin romperse.
          </p>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pt-4">
            <Link href="mailto:hello@yultic.dev?subject=Solicitar un demo">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background group text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7"
              >
                hello@yultic.dev
              </Button>
            </Link>
            {/* dejo este boton por las dudas.
            <Button size="lg" variant="outline" asChild>
              <a href="https://www.skinnersv.net" target="_blank" rel="noopener noreferrer">
                Ver SkinnerSV
              </a>
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
