import Image from "next/image"

export function ManifestoSection() {
  return (
    <section id="enfoque" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 max-w-5xl mx-auto">
          <span className="font-mono text-xs text-accent-red tracking-widest">02</span>
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Nuestro enfoque</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-0 border border-border">
            {/* Imagen - 3 columnas */}
            <div className="relative md:col-span-3 h-[400px] md:h-auto overflow-hidden bg-muted">
              <Image src="/esa.png" alt="Yultic Laboratorio" fill className="object-cover grayscale" />
              {/* Barra roja al fondo de la imagen */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-red" />
            </div>

            {/* Texto - 2 columnas */}
            <div className="md:col-span-2 border-l border-border p-8 md:p-10 space-y-8">
              <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
                Un laboratorio de tecnologia aplicada
              </h3>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  La tecnologia no es magia. Es{" "}
                  <strong className="text-accent-red">criterio, diseno y responsabilidad</strong>. Construimos desde el
                  origen del problema, no desde la moda.
                </p>

                <p>
                  Experimentamos, fallamos, aprendemos y mejoramos. No por curiosidad vacia, sino para crear soluciones que empoderan a las personas y empresas.
                </p>

                <p>
                  Nacimos en <strong className="text-accent-red">El Salvador</strong>, pero construimos con estandares
                  globales. Nuestro origen es parte de nuestra identidad, no un limite para nuestra ambicion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
