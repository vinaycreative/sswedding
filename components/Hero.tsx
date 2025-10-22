"use client"
import { motion } from "framer-motion"
import Image from "next/image"

function Hero() {
  return (
    <section className="h-[600px] bg-gray-100 hero">
      <motion.div
        className="w-full h-full relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, ease: "easeInOut" }}
      >
        <Image
          src="/images/Hero-3.jpg"
          alt="Shubham & Shweta"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  )
}

export default Hero
