import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <Image src="/t.png" alt="Yultic Logo" width={80} height={80} />
      <span className="font-semibold text-lg tracking-tight text-foreground">Yultic</span>
    </div>
  )
}
