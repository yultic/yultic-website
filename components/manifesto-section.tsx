import Image from "next/image"

export function ManifestoSection() {
  return (
    <section id="enfoque" className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden bg-muted">
              <Image src="/esa.png" alt="Yultic Laboratorio" fill className="object-cover" />
            </div>

            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Nuestro enfoque
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">Un laboratorio de tecnología aplicada</h3>
              </div>

              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  La tecnología no es magia. Es{" "}
                  <strong className="text-foreground">criterio, diseño y responsabilidad</strong>. Construimos desde el
                  origen del problema, no desde la moda.
                </p>

                <p>
                  Experimentamos, fallamos, aprendemos y mejoramos. No por curiosidad vacía, sino para crear soluciones que empoderan a las personas y empresas.
                </p>

                <p>
                  Nacimos en <strong className="text-foreground">El Salvador</strong>, pero construimos con estándares
                  globales. Nuestro origen es parte de nuestra identidad, no un límite para nuestra ambición.
                </p>

                <p className="text-foreground font-medium pt-4">
                  En Yultic no vendemos promesas. Construimos software con intención, pensado para durar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
