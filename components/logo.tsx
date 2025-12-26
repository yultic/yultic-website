import Image from "next/image"

export function Logo() {
  return (
    <div className="flex items-center gap-2 group cursor-pointer">
      <Image src="/yultic.png" alt="Yultic Logo" width={80} height={80} />
    </div>
  )
}
