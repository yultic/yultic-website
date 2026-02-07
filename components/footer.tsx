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
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-6 sm:gap-8">
            <Logo />
            <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
              Tecnologia con raiz — {new Date().getFullYear()}
            </p>
          </div>

          <div className="flex items-center gap-5">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent-red transition-colors duration-150"
              >
                <social.icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
