"use client"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import CoupleSection from "@/components/CoupleSection"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero"
import LoadingScreen from "@/components/Loading"
import SaveTheDate from "@/components/SaveTheDate"
import VenueDetails from "@/components/VenueDetails"
import WeddingCountdown from "@/components/WeddingCountdown"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <main className="w-full h-full bg-white md:w-[400px] mx-auto" key="main">
          <AnimatePresence mode="wait">
            <motion.div
              key="content"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
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
      )}
    </>
  )
}
