"use client"

import Image from "next/image"

type Props = {
  src1?: string
  src2?: string
  alt1?: string
  alt2?: string
}

export function HeroScreens({
  src1 = "/p1.png",
  src2 = "/p2.png",
  alt1 = "codigo1",
  alt2 = "Codigo2",
}: Props) {
  return (
    <div className="relative mx-auto w-full max-w-[100%] h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px] xl:h-[800px]">
      {/* glows */}
      <div className="absolute -right-4 -top-4 sm:-right-10 sm:-top-10 md:-right-16 md:-top-16 size-[250px] sm:size-[400px] md:size-[600px] lg:size-[700px] bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.20),transparent_60%)] blur-3xl" />
      <div className="absolute -left-4 bottom-0 sm:-left-10 md:-left-16 size-[220px] sm:size-[350px] md:size-[550px] lg:size-[650px] bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.18),transparent_60%)] blur-3xl" />

      {/* back screen */}
      <div className="absolute left-[2%] sm:left-[5%] md:left-[8%] top-[18%] sm:top-[10%] md:top-[8%] rotate-[-6deg] rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-background/10 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] overflow-hidden w-[55%] sm:w-[50%] md:w-[48%]">
        <Image src={src2} alt={alt2} width={1200} height={800} className="h-auto w-full object-cover" priority sizes="(min-width: 1280px) 600px, (min-width: 1024px) 500px, (min-width: 768px) 400px, 300px" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      </div>

      {/* front screen */}
      <div className="absolute right-[2%] sm:right-[5%] md:right-[8%] bottom-[18%] sm:bottom-[10%] md:bottom-[8%] rotate-[6deg] rounded-xl sm:rounded-2xl md:rounded-3xl border border-white/10 bg-background/10 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] overflow-hidden w-[65%] sm:w-[60%] md:w-[58%]">
        <Image src={src1} alt={alt1} width={1400} height={900} className="h-auto w-full object-cover" priority sizes="(min-width: 1280px) 750px, (min-width: 1024px) 650px, (min-width: 768px) 500px, 350px" />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      </div>
    </div>
  )
}