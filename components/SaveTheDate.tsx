"use client"
import { motion } from "framer-motion"
import { BookHeart, CalendarHeart } from "lucide-react"
import Image from "next/image"

const SaveTheDate = () => {
  return (
    <motion.section
      className="relative w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10 overflow-hidden" />
      <div className="absolute -top-4 left-0 w-full h-14 rounded-full  bg-gradient-to-b from-white to-transparent z-10 overflow-hidden" />
      <div className="w-full overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        >
          <Image
            src="/images/wedding-decoration-watercolor-event-curtains.jpg"
            alt="decorative-curtains"
            className="w-full h-[360px] object-fit scale-[1]"
            width={1000}
            height={1000}
          />
        </motion.div>
        <div className="flex items-center justify-center flex-col absolute pt-5">
          <motion.span
            className="tex-sm text-[#858383] inline-block mb-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
          >
            Save the Date
          </motion.span>
          <motion.div
            className="flex items-center gap-2 text-[#DA5373]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1.8, ease: "easeOut" }}
          >
            <CalendarHeart size={20} />{" "}
            <h1 className="font-semibold text-xl">November 22, 2025</h1>
          </motion.div>
          <motion.p
            className="text-sm text-[#656565] mt-2 text-center "
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2, ease: "easeOut" }}
          >
            Mark your calendars for a day filled <br /> with love, laughter, and memories!
          </motion.p>
        </div>
      </div>

      <motion.div
        className="action flex flex-col gap-2 w-full px-4 mt-5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2, ease: "easeOut" }}
      >
        <motion.a
          className="text-[15px] flex items-center justify-center gap-2 border border-[#573A32] py-3 text-white bg-[#DA5373] w-full rounded-md font-semibold"
          href="/invite"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <BookHeart size={20} />
          View Invitation
        </motion.a>
        {/* <motion.button
          className="text-[15px] flex items-center justify-center gap-2 font-semibold border border-[#573A32] py-3 text-[#573A32] bg-white w-full rounded-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
        >
          <Images size={20} />
          Share & View Photos
        </motion.button> */}
      </motion.div>
    </motion.section>
  )
}

export default SaveTheDate
