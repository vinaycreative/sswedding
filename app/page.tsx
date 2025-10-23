"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import CoupleSection from "@/components/CoupleSection"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import LoadingScreen from "@/components/Loading"
import PhotoGallery from "@/components/PhotoGallery"
import RSVPSection from "@/components/RSVPSection"
import SaveTheDate from "@/components/SaveTheDate"
import VenueDetails from "@/components/VenueDetails"
import WeddingCountdown from "@/components/WeddingCountdown"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <main
      className="w-full h-full bg-white md:w-[400px] mx-auto border border-gray-200 overflow-hidden"
      key="main"
    >
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
        <motion.div
          key="main"
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
        >
          {/* <Header /> */}
          <Hero />
          <WeddingCountdown />
          <SaveTheDate />
          <CoupleSection />
          <VenueDetails />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  )
}
