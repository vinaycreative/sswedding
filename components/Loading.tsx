"use client"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

import PaperPlaneHeart from "@/public/animation/paper_plane_heart.json"

function LoadingScreen() {
  return (
    <div className="w-full h-dvh bg-white md:w-[400px] mx-auto border border-gray-200 overflow-hidden flex items-center justify-center">
      <div className="w-[200px] h-[200px]">
        <Lottie animationData={PaperPlaneHeart} loop={false} />
      </div>
    </div>
  )
}

export default LoadingScreen
