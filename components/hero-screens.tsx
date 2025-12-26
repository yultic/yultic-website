"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  src1?: string;
  src2?: string;
  alt1?: string;
  alt2?: string;
};

export function HeroScreens({
  src1 = "/p1.png",
  src2 = "/p2.png",
  alt1 = "codigo1",
  alt2 = "Codigo2",
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[100%] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px] xl:h-[800px]">
      {/* Grid de fondo */}
      {/* Grid de fondo */}
<div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[linear-gradient(to_right,#80808030_1px,transparent_1px),linear-gradient(to_bottom,#80808030_1px,transparent_1px)] md:bg-[size:80px_80px] lg:bg-[size:100px_100px]" />
      {/* Gradiente principal de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      {/* Glows mejorados con animación */}
      <motion.div
        className="absolute -right-4 -top-4 sm:-right-10 sm:-top-10 md:-right-16 md:-top-16 size-[250px] sm:size-[400px] md:size-[600px] lg:size-[700px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.25),transparent_60%)] blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.35, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -left-4 bottom-0 sm:-left-10 md:-left-16 size-[220px] sm:size-[350px] md:size-[550px] lg:size-[650px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.22),transparent_60%)] blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.22, 0.32, 0.22],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Glows adicionales */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[200px] sm:size-[300px] md:size-[400px] bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_70%)] blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <motion.div
        className="absolute right-1/4 top-1/4 size-[180px] sm:size-[280px] md:size-[350px] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_65%)] blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* back screen */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute left-[2%] sm:left-[5%] md:left-[8%] top-[18%] sm:top-[10%] md:top-[8%] rotate-[-6deg] rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-background/10 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),0_0_80px_-20px_rgba(99,102,241,0.3)] overflow-hidden w-[55%] sm:w-[50%] md:w-[48%]"
      >
        <Image
          src={src2}
          alt={alt2}
          width={1200}
          height={800}
          className="h-auto w-full object-cover"
          priority
          sizes="(min-width: 1280px) 600px, (min-width: 1024px) 500px, (min-width: 768px) 400px, 300px"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-blue-500/10" />
      </motion.div>

      {/* front screen */}
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute right-[2%] sm:right-[5%] md:right-[8%] bottom-[18%] sm:bottom-[10%] md:bottom-[8%] rotate-[6deg] rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-background/10 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7),0_0_80px_-20px_rgba(139,92,246,0.3)] overflow-hidden w-[65%] sm:w-[60%] md:w-[58%]"
      >
        <Image
          src={src1}
          alt={alt1}
          width={1400}
          height={900}
          className="h-auto w-full object-cover"
          priority
          sizes="(min-width: 1280px) 750px, (min-width: 1024px) 650px, (min-width: 768px) 500px, 350px"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tl from-pink-500/10 via-transparent to-purple-500/10" />
      </motion.div>
    </div>
  );
}
