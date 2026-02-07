"use client";

import Image from "next/image";
import { motion, useTransform, useMotionTemplate, type MotionValue } from "framer-motion";

type Props = {
  src1?: string;
  src2?: string;
  alt1?: string;
  alt2?: string;
  scrollProgress?: MotionValue<number>;
};

export function HeroScreens({
  src1 = "/p1.png",
  src2 = "/p2.png",
  alt1 = "codigo1",
  alt2 = "Codigo2",
  scrollProgress,
}: Props) {
  const fallback = { get: () => 0 } as MotionValue<number>;
  const sp = scrollProgress ?? fallback;

  // Back card: reveals left to right
  const clipBack = useTransform(sp, [0.20, 0.40], [100, 0]);
  const clipPathBack = useMotionTemplate`inset(0 ${clipBack}% 0 0)`;
  // Red scan line tracks the reveal edge (100 - clipBack)% from left
  const edgeBack = useTransform(clipBack, (v: number) => 100 - v);
  const edgeBackPos = useMotionTemplate`${edgeBack}%`;
  const lineOpacityBack = useTransform(sp, [0.20, 0.21, 0.39, 0.40], [0, 1, 1, 0]);

  // Front card: reveals right to left
  const clipFront = useTransform(sp, [0.28, 0.48], [100, 0]);
  const clipPathFront = useMotionTemplate`inset(0 0 0 ${clipFront}%)`;
  // Red scan line at the left edge of visible area = clipFront% from left
  const edgeFrontPos = useMotionTemplate`${clipFront}%`;
  const lineOpacityFront = useTransform(sp, [0.28, 0.29, 0.47, 0.48], [0, 1, 1, 0]);

  return (
    <div className="relative mx-auto w-full max-w-[100%] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px] xl:h-[800px]">
      {/* Grid de fondo */}
      <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-screen bg-grid" />
      {/* Gradiente de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      {/* back screen — clip-path reveal left to right */}
      <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] top-[18%] sm:top-[10%] md:top-[8%] w-[55%] sm:w-[50%] md:w-[48%]">
        {/* Red scan line */}
        <motion.div
          style={{ left: edgeBackPos, opacity: scrollProgress ? lineOpacityBack : 0 }}
          className="absolute top-0 bottom-0 w-[3px] bg-accent-red z-10 -translate-x-1/2"
        />
        {/* Card */}
        <motion.div
          style={{ clipPath: scrollProgress ? clipPathBack : "none" }}
          className="border-2 border-border bg-card overflow-hidden shadow-[8px_8px_0px_0px_oklch(0.20_0_0)]"
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
        </motion.div>
      </div>

      {/* front screen — clip-path reveal right to left */}
      <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] bottom-[18%] sm:bottom-[10%] md:bottom-[8%] w-[65%] sm:w-[60%] md:w-[58%]">
        {/* Red scan line */}
        <motion.div
          style={{ left: edgeFrontPos, opacity: scrollProgress ? lineOpacityFront : 0 }}
          className="absolute top-0 bottom-0 w-[3px] bg-accent-red z-10 -translate-x-1/2"
        />
        {/* Card */}
        <motion.div
          style={{ clipPath: scrollProgress ? clipPathFront : "none" }}
          className="border-2 border-border bg-card overflow-hidden shadow-[8px_8px_0px_0px_oklch(0.60_0.24_25)]"
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
        </motion.div>
      </div>
    </div>
  );
}
