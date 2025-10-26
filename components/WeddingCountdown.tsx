"use client"
import { AnimatePresence, motion } from "framer-motion"
import moment from "moment-timezone"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"

function WeddingCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const calculateTimeLeft = useCallback(() => {
    const weddingDate = moment.tz("2025-11-22", "Asia/Kolkata") // Wedding time in IST
    const now = moment.tz("Asia/Kolkata") // Current time in IST

    const difference = weddingDate.diff(now) // Get difference in milliseconds

    if (difference > 0) {
      const duration = moment.duration(difference)

      setTimeLeft({
        days: Math.floor(duration.asDays()),
        hours: duration.hours(),
        minutes: duration.minutes(),
        seconds: duration.seconds(),
      })
    } else {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    }
  }, [])

  useEffect(() => {
    calculateTimeLeft() // Initial calculation
    const timer = setInterval(() => {
      calculateTimeLeft()
    }, 1000)

    return () => clearInterval(timer) // Cleanup timer on component unmount
  }, [calculateTimeLeft])

  const formatNumber = (value: number): string => {
    return value.toString().padStart(2, "0") // Ensure 2-digit format
  }

  const renderTimeUnit = (value: number, label: string) => (
    <motion.div
      className="flex items-center flex-col relative overflow-hidden min-w-[60px] px-2"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, ease: "easeInOut" }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="h-8 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#DA5373] to-[#B83A5B] rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={label + value}
            className="absolute"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-2xl font-bold text-[#FE0058]">{formatNumber(value)}</h1>
          </motion.div>
        </AnimatePresence>
      </div>
      <p className="text-sm font-medium text-[#FE0058] bg-white pt-1 -mt-1 z-10 px-2 rounded-full">
        {label}
      </p>
    </motion.div>
  )

  return (
    <motion.section
      className="px-4 -mt-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
    >
      <div className="relative h-16 border-2 border-white bg-[#FE0058] flex items-center justify-center rounded-lg">
        <Image
          src="/images/flower.png"
          alt="decorative flowers"
          width={140}
          height={140}
          className="absolute -top-20 right-0 w-[140px]"
        />
        <motion.h1
          className="font-semibold text-2xl text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
        >
          {timeLeft.days} Days - To Forever 💕
        </motion.h1>
      </div>
      <motion.div
        className="flex items-center justify-center h-20 divide-x-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
      >
        {renderTimeUnit(timeLeft.days, "Days")}
        {renderTimeUnit(timeLeft.hours, "Hours")}
        {renderTimeUnit(timeLeft.minutes, "Minutes")}
        {renderTimeUnit(timeLeft.seconds, "Seconds")}
      </motion.div>
    </motion.section>
  )
}

export default WeddingCountdown
