"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { HeroScreens } from "./hero-screens";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function TypewriterText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setFinished(true);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayedText}
      {!finished && <span className="text-accent-red animate-blink">_</span>}
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.5, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Images now use clip-path reveal driven by scroll progress

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.76, 0, 0.24, 1] as const,
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[250vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Texto - alineado a la izquierda con borde rojo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex items-center z-10"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl border-l-2 border-accent-red pl-6 sm:pl-8 md:pl-12 space-y-6 sm:space-y-8">
              {/* Metadata line */}
              <motion.p
                variants={itemVariants}
                className="font-mono text-xs sm:text-sm text-muted-foreground tracking-widest uppercase"
              >
                // Yultic Lab — El Salvador — 2026
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold tracking-tighter leading-[0.9]"
              >
                <span className="block">Tecnología</span>
                <span className="block">con raíz.</span>
                <span className="block text-muted-foreground text-[0.65em]">
                  <TypewriterText text="Sistemas con propósito." delay={800} />
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl text-pretty leading-relaxed"
              >
                Construimos software con intención, desde el
                origen del problema. Cada línea de código tiene un propósito.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex items-start gap-4 pt-2"
              >
                <Link
                  href="mailto:hello@yultic.dev?subject=Solicitar un demo"
                >
                  <Button
                    size="lg"
                    className="bg-accent-red hover:bg-accent-red-dim text-white font-mono text-sm uppercase tracking-widest px-8 py-7 group"
                  >
                    Hablemos de tu proyecto
                    <ArrowRight className="ml-2 size-4 group-hover:translate-x-1 transition-transform duration-150" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Imagenes - clip-path reveal on scroll */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
          <div className="w-full max-w-6xl px-4">
            <HeroScreens scrollProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
}
