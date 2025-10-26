"use client"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"

function CoupleSection() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-[#FADAB8]/15 to-[#F5E6D3]/25 overflow-hidden">
      {/* Top White Fade Gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

      {/* Bottom White Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      <div className="max-w-md mx-auto text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-[#9E4E3A] mb-4">Together With Their Families</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative mb-12"
        >
          <div className="relative w-72 h-72 mx-auto">
            {/* Decorative Ring Around Image */}
            <div className="absolute inset-0 rounded-full border-4 border-[#DA5373]/20 animate-pulse"></div>
            <div className="absolute inset-2 rounded-full border-2 border-[#B83A5B]/30"></div>

            {/* Main Image Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-white">
              <Image src="/images/Hero.png" alt="Shubham & Shweta" fill className="object-cover" />
            </div>

            {/* Decorative Hearts */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-[#DA5373] rounded-full flex items-center justify-center shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Heart className="w-4 h-4 text-white fill-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-2 -left-2 w-8 h-8 bg-[#B83A5B] rounded-full flex items-center justify-center shadow-lg"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <Heart className="w-4 h-4 text-white fill-white" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          className="space-y-8"
        >
          {/* Couple Names */}
          <div className="flex items-center justify-center gap-6">
            <motion.div
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#9E4E3A] mb-2">Shubham</h3>
                <p className="text-sm text-[#656565] leading-relaxed">
                  Son of <br />
                  Mr. & Mrs. Kadam
                </p>
              </div>
            </motion.div>

            {/* <motion.div
              className="text-5xl text-[#DA5373] font-bold"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              &
            </motion.div> */}

            <motion.div
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-white/50">
                <h3 className="text-2xl font-bold text-[#9E4E3A] mb-2">Shweta</h3>
                <p className="text-sm text-[#656565] leading-relaxed">
                  Daughter of <br />
                  Mr. & Mrs. Bhadre
                </p>
              </div>
            </motion.div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
            className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-[#DA5373] fill-[#DA5373]" />
              {/* <Heart className="w-4 h-4 text-[#B83A5B] fill-[#B83A5B]" /> */}
              <Heart className="w-5 h-5 text-[#DA5373] fill-[#DA5373]" />
            </div>
            <p className="text-[#656565] text-base leading-relaxed italic">
              "Two hearts, one soul. Two families, one celebration. Join us as we begin our journey
              together in holy matrimony."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CoupleSection
