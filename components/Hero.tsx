"use client"
import { motion } from "framer-motion"
import Image from "next/image"

function Hero() {
  return (
    <motion.section
      className="h-[600px] bg-gray-100 hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="w-full h-full relative"
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
      >
        <Image
          src="/images/Hero-3.jpg"
          alt="Shubham & Shweta"
          fill
          className="object-cover"
          priority
        />
      </motion.div>
    </motion.section>
  )
}

export default Hero
