"use client"
import type React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import InvitationLoading from "@/components/InvitationLoading"

function Main({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading ? (
        <InvitationLoading />
      ) : (
        <motion.main
          className="w-full h-full bg-white md:w-[400px] mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          {children}
        </motion.main>
      )}
    </AnimatePresence>
  )
}

export default Main
