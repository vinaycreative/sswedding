"use client"
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <motion.footer
      className="bg-gradient-to-br from-[#9E4E3A] to-[#7A3A2A] text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 7, ease: "easeOut" }}
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 7.2, ease: "easeOut" }}
          className="space-y-6"
        >
          {/* Wedding Date Reminder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 7.4, ease: "easeOut" }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">Save the Date</h4>
            <p className="text-2xl font-bold text-[#FADAB8] mb-2">November 22, 2025</p>
            <p className="text-white/80 text-sm">6:00 PM onwards</p>
          </motion.div>

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
        </motion.div>
        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 7.6, ease: "easeOut" }}
          className="text-center pt-6"
        >
          <p className="text-white/60 text-xs">
            Made with <Heart className="w-3 h-3 inline text-[#fe0058]" fill="#fe0058" /> by
            <Link
              href="https://vinaycreative.vercel.app/"
              target="_blank"
              className="text-[#fe0058] font-semibold inline-block ml-1"
            >
              VinayCreative
            </Link>
          </p>
          <p className="text-white/40 text-xs mt-2">
            © 2025 VinayCreatives. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
