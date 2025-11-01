"use client"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

import InviteAni from "@/public/animation/invitation.json"

function InvitationLoading() {
  return (
    <div className="w-full h-dvh flex items-center justify-center mx-auto bg-white">
      {/* <h2>Loading....</h2> */}
      <div className="w-[300px] h-[300px] relative">
        <Lottie animationData={InviteAni} loop={false} />
      </div>
    </div>
  )
}

export default InvitationLoading
