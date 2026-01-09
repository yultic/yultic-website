import { Logo } from "./logo"
import { FaFacebook, FaInstagram, FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6"

export function Footer() {
  const socialLinks = [
    { icon: FaLinkedin, href: "https://www.linkedin.com/company/yultic/?viewAsMember=true", label: "LinkedIn" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61586155982396&sk=about", label: "Facebook" },
    { icon: FaInstagram, href: "https://www.instagram.com/yultic.sv/", label: "Instagram" },
    { icon: FaXTwitter, href: "https://x.com/yulticsv", label: "X" },
    { icon: FaGithub, href: "https://github.com/yultic", label: "GitHub" },
  ]

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-6 sm:gap-8">
            <Logo />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Yultic. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center size-15 rounded-lg border border-border/40 hover:border-border hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-all duration-200 group"
              >
                <social.icon className="size-5 group-hover:scale-110 transition-transform duration-200" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
