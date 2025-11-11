"use client"
import { Heart } from "lucide-react"
import Image from "next/image"

function CoupleSection() {
  return (
    <section className="relative pt-10 pb-10 px-4 bg-gradient-to-br from-[#FADAB8]/15 to-[#F5E6D3]/25 overflow-hidden">
      {/* Top White Fade Gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

      {/* Bottom White Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      <div className="max-w-md mx-auto text-center relative z-20">
        <div
          className="mb-12"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-out"
        >
          <h2 className="text-3xl font-bold text-[#9E4E3A] mb-4">Together With Their Families</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] mx-auto rounded-full"></div>
        </div>

        <div className="relative mb-12">
          <div className="relative w-72 h-72 mx-auto">
            {/* Decorative Ring Around Image */}
            <div className="absolute inset-0 rounded-full border-4 border-[#DA5373]/20 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border-2 border-[#B83A5B]/30"></div>

            {/* Main Image Container */}
            <div
              className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white"
              data-aos="flip-up"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <Image src="/images/Hero.png" alt="Shubham & Shweta" fill className="object-cover" />
            </div>

            {/* Decorative Hearts */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#DA5373] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <div data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-out">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>

            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#B83A5B] rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <div data-aos="zoom-in" data-aos-duration="600" data-aos-easing="ease-out">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="space-y-8"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-out"
        >
          {/* Couple Names */}
          <div className="flex items-center justify-center gap-6">
            <div
              className="text-center group transition-transform duration-200 hover:scale-105"
              data-aos="flip-down"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#9E4E3A] mb-2">Shweta</h3>
                <p className="text-sm text-[#656565] leading-relaxed">
                  Daughter of <br />
                  Mr. & Mrs. Bhadre
                </p>
              </div>
            </div>
            <div
              className="text-center group transition-transform duration-200 hover:scale-105"
              data-aos="flip-up"
              data-aos-duration="600"
              data-aos-easing="ease-out"
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#9E4E3A] mb-2">Shubham</h3>
                <p className="text-sm text-[#656565] leading-relaxed">
                  Son of <br />
                  Mr. & Mrs. Kadam
                </p>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <div
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
            data-aos="flip-up"
            data-aos-duration="700"
            data-aos-easing="ease-out"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-[#DA5373] fill-[#DA5373]" />
              <Heart className="w-5 h-5 text-[#DA5373] fill-[#DA5373]" />
            </div>
            <p className="text-[#656565] text-base leading-relaxed italic">
              "Two hearts, one soul. Two families, one celebration. Join us as we begin our journey
              together in holy matrimony."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoupleSection
