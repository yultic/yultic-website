"use client"

import { Logo } from "./logo"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#que-hacemos", label: "Nuestros Servicios" },
    { href: "#enfoque", label: "Nuestro enfoque" },
    { href: "#contacto", label: "Contacto" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
            <SheetContent className="bg-background/95 backdrop-blur-xl border-l border-border/40">
              <div className="flex flex-col h-full">
                {/* Logo en móvil */}
                <div className="pt-2 pb-8 border-b border-border/40">
                  <Logo />
                </div>

                {/* Links con animación */}
                <motion.div
                  className="flex flex-col gap-2 mt-8 flex-1"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.1,
                      }
                    }
                  }}
                >
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={handleLinkClick}
                      className="group relative px-4 py-4 rounded-lg text-lg font-medium text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-muted/50"
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.4,
                            ease: [0.22, 1, 0.36, 1]
                          }
                        }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">{link.label}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-foreground/5 to-foreground/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        layoutId={`mobile-nav-hover-${index}`}
                      />
                    </motion.a>
                  ))}
                </motion.div>

                {/* Footer del menú móvil */}
                <motion.div
                  className="border-t border-border/40 pt-6 pb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-sm text-muted-foreground text-center">
                    Tecnología con raíz
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
