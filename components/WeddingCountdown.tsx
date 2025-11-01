"use client"
import NumberFlow from "@number-flow/react"
import moment from "moment-timezone"
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

  const renderTimeUnit = (value: number, label: string) => (
    <div className="flex items-center flex-col relative overflow-hidden min-w-[60px] px-2">
      <div className="h-8 overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#DA5373] to-[#B83A5B] rounded-lg shadow-lg">
        <div className="absolute transition-all duration-300">
          <h1 className="text-2xl font-bold text-[#FE0058]">
            <NumberFlow value={value} />
          </h1>
        </div>
      </div>
      <p className="text-sm font-medium text-[#FE0058] bg-white pt-1 -mt-1 z-10 px-2 rounded-full">
        {label}
      </p>
    </div>
  )

  return (
    <section className="px-4 -mt-4" data-aos="fade-up" data-aos-easing="ease-out">
      <div className="relative h-16 border-2 border-white bg-[#FE0058] flex items-center justify-center rounded-lg">
        {/* <Image
          src="/images/flower.png"
          alt="decorative flowers"
          width={140}
          height={140}
          className="absolute -top-20 right-0 w-[140px]"
        /> */}
        <h1
          className="font-semibold text-2xl text-white"
          data-aos="zoom-in"
          data-aos-duration="500"
          data-aos-delay="800"
          data-aos-easing="ease-out"
        >
          {timeLeft.days} Days - To Forever 💕
        </h1>
      </div>
      <div
        className="flex items-center justify-center h-20 divide-x-2"
        data-aos="zoom-in"
        data-aos-easing="ease-out"
      >
        {renderTimeUnit(timeLeft.days, "Days")}
        {renderTimeUnit(timeLeft.hours, "Hours")}
        {renderTimeUnit(timeLeft.minutes, "Minutes")}
        {renderTimeUnit(timeLeft.seconds, "Seconds")}
      </div>
    </section>
  )
}

export default WeddingCountdown
