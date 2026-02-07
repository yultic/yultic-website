"use client"

import { Logo } from "./logo"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#que-hacemos", label: "Servicios" },
    { href: "#enfoque", label: "Enfoque" },
    { href: "#contacto", label: "Contacto" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      {/* Red stripe */}
      <div className="h-[2px] w-full bg-accent-red" />
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-accent-red transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background border-l border-border">
              <div className="flex flex-col h-full">
                {/* Logo en movil */}
                <div className="pt-2 pb-8 border-b border-border">
                  <Logo />
                </div>

                {/* Links con animacion */}
                <motion.div
                  className="flex flex-col gap-1 mt-8 flex-1"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.05,
                      }
                    }
                  }}
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="px-4 py-4 font-mono text-sm uppercase tracking-widest text-muted-foreground hover:text-accent-red border-b border-border transition-colors duration-150"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.3,
                            ease: [0.76, 0, 0.24, 1]
                          }
                        }
                      }}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </motion.div>

                {/* Footer del menu movil */}
                <motion.div
                  className="border-t border-border pt-6 pb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="font-mono text-xs text-muted-foreground text-center tracking-widest uppercase">
                    Tecnologia con raiz
                  </p>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}
