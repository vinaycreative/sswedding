"use client"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import SparklesText from "./ui/sparkles-text"

function InviteMember() {
  const searchParams = useSearchParams()
  const name = searchParams.get("n") || "Heartfelt Guest!"
  return (
    <div className="flex flex-col relative items-center justify-center overflow-hidden mb-1 w-full">
      <SparklesText
        text={name}
        className="text-center absolute font-semibold text-xl mt-3 text-[#573A32] capitalize"
        data-aos="zoom-out"
        data-aos-easing="ease-in-sine"
      />
      {name === "Heartfelt Guest!" && (
        <span
          className="absolute top-1 z-10 px-4 bg-white rounded-lg border border-[#C49531] text-[#573A32]"
          data-aos="fade-up"
        >
          Our
        </span>
      )}

      <div className="s" data-aos="flip-down">
        <Image
          src="/images/border-line.png"
          alt="border-line"
          className="w-3/4 mx-auto"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}

export default InviteMember
