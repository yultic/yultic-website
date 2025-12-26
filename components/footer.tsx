import { Logo } from "./logo"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Producto: ["SkinnerSV", "Características", "Casos de éxito", "Testimonios"],
    Empresa: ["Sobre nosotros", "Blog", "Carreras", "Contacto"],
    Recursos: ["Documentación", "Guías", "API Reference", "Comunidad"],
    Legal: ["Privacidad", "Términos", "Cookies", "Licencias"],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/yultic", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "hello@yultic.dev", label: "Email" },
  ]

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Tecnología con raíz. Sistemas con propósito. Construimos software con intención desde El Salvador para el
              mundo.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex items-center justify-center size-9 rounded-md hover:bg-muted transition-colors"
                >
                  <social.icon className="size-4 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yultic. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Términos de Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
