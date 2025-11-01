"use client"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer
      className="bg-gradient-to-br from-[#9E4E3A] to-[#7A3A2A] text-white px-4"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out"
    >
      <div className="max-w-md mx-auto py-6">
        {/* Decorative Elements */}
        <div className="flex justify-center gap-4 py-4">
          <Image
            src="/images/hearts.svg"
            alt="decorative hearts"
            width={32}
            height={32}
            className="w-8 h-8 opacity-60"
          />
          <Image
            src="/images/hearts.svg"
            alt="decorative hearts"
            width={24}
            height={24}
            className="w-6 h-6 opacity-40"
          />
          <Image
            src="/images/hearts.svg"
            alt="decorative hearts"
            width={32}
            height={32}
            className="w-8 h-8 opacity-60"
          />
        </div>
        <div
          className="space-y-6"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-out"
        >
          {/* Wedding Date Reminder */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
            data-aos="zoom-in"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <h4 className="text-lg font-semibold mb-2">Save the Date</h4>
            <p className="text-2xl font-bold text-[#FADAB8] mb-2">November 22, 2025</p>
            <p className="text-white/80 text-sm">6:00 PM onwards</p>
          </div>

          {/* Decorative Elements
          <div className="flex justify-center gap-4 py-4">
            <Image
              src="/images/hearts.svg"
              alt="decorative hearts"
              width={32}
              height={32}
              className="w-8 h-8 opacity-60"
            />
            <Image
              src="/images/hearts.svg"
              alt="decorative hearts"
              width={24}
              height={24}
              className="w-6 h-6 opacity-40"
            />
            <Image
              src="/images/hearts.svg"
              alt="decorative hearts"
              width={32}
              height={32}
              className="w-8 h-8 opacity-60"
            />
          </div> */}
        </div>
        {/* Copyright */}
        <div className="text-center flex flex-col items-center justify-center relative z-10 mt-3 py-4">
          <p className="text-white-800 text-xs">
            Made with <Heart className="w-3 h-3 inline text-[#fe0058]" fill="#fe0058" /> by
            <Link
              href="https://vinaycreative.com"
              target="_blank"
              className="text-[#fe0058] font-semibold inline-block ml-1"
            >
              VinayCreative
            </Link>
          </p>
          <p className="text-white/40 text-xs mt-2">© 2025 VinayCreatives. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
