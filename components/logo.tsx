import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <Image src="/yultic_letras3.png" alt="Yultic Logo" width={130} height={80} />
    </div>
  )
}
