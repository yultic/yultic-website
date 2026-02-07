import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section id="contacto" className="bg-accent-red">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-xs text-white/60 tracking-widest">03</span>
          <div className="flex-1 h-px bg-white/20" />
        </div>

        <div className="max-w-3xl space-y-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            ¿Tienes un problema real que resolver?
          </h2>
          <p className="text-xl text-white/80 text-pretty leading-relaxed">
            No construimos software por construir. Diseñamos sistemas con
            criterio, pensados para durar y crecer sin romperse.
          </p>
          <div className="flex items-start gap-4 pt-4">
            <Link href="mailto:hello@yultic.dev?subject=Solicitar un demo">
              <Button
                size="lg"
                className="bg-background text-foreground hover:bg-background/90 font-mono text-sm uppercase tracking-widest px-8 py-7 group"
              >
                hello@yultic.dev
                <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-150" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
