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
      {!finished && <span className="animate-pulse">|</span>}
    </span>
  );
}

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Texto se desvanece cuando scrolleas
  const textOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 0.5, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);

  // Imágenes aparecen después
  const imageOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);
  const imageY = useTransform(scrollYProgress, [0.25, 0.5], [150, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
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
        {/* Texto - se va hacia arriba y desaparece */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ opacity: textOpacity, y: textY }}
          className="absolute inset-0 flex items-center justify-center z-10"
        >
          <div className="container mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8 text-center max-w-5xl">
            <motion.h1
              variants={itemVariants}
              className="pt-20 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1]"
            >
              <span className="block">Tecnología con raíz.</span>
              <span className="block text-muted-foreground">
                <TypewriterText text="Sistemas con propósito." delay={800} />
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed px-2"
            >
              Construimos software con intención, desde el
              origen del problema. Cada línea de código tiene un propósito.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 sm:pt-6"
            >
              <Link
                href="mailto:hello@yultic.dev?subject=Solicitar un demo"
              >
                <Button
                  size="lg"
                  className="bg-foreground hover:bg-foreground/90 text-background group text-base sm:text-lg px-6 sm:px-8 py-6 sm:py-7"
                >
                  Conversemos
                  <ArrowRight className="ml-2 size-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Imágenes - aparecen desde abajo */}
        <motion.div
          style={{ opacity: imageOpacity, y: imageY }}
          className="absolute inset-0 flex items-center justify-center z-0"
        >
          <div className="w-full max-w-6xl px-4">
            <HeroScreens />
          </div>
        </motion.div>
      </div>
    </section>
  );
}