"use client"
import { motion } from "framer-motion"
import { BookHeart, CalendarHeart } from "lucide-react"
import Image from "next/image"

const SaveTheDate = () => {
  return (
    <section className="relative w-full">
      <div className="w-full overflow-hidden flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1, ease: "linear" }}
        >
          <Image
            src="/images/wedding-decoration-watercolor-event-curtains.jpg"
            alt="decorative-curtains"
            className="w-full h-[360px] object-fit scale-[1.50]"
            width={1000}
            height={1000}
          />
        </motion.div>
        <div className="flex items-center justify-center flex-col absolute pt-5">
          <motion.span
            className="tex-sm text-[#858383] inline-block mb-1"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Save the Date
          </motion.span>
          <motion.div
            className="flex items-center gap-2 text-[#DA5373]"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.3, ease: "linear" }}
          >
            <CalendarHeart size={20} />{" "}
            <h1 className="font-semibold text-xl">November 22, 2025</h1>
          </motion.div>
          <p
            className="text-sm text-[#656565] mt-2 text-center "
            style={{ fontFamily: "Kaisei Decol" }}
            data-aos="fade-up"
            data-aos-duration="600"
          >
            Mark your calendars for a day filled <br /> with love, laughter, and memories!
          </p>
        </div>
      </div>

      <div className="action flex flex-col gap-2 w-full px-4 pb-16 pt-2">
        <motion.a
          className="text-[15px] flex items-center justify-center gap-2 border border-[#573A32] py-3 text-white bg-[#DA5373] w-full rounded-md font-semibold"
          href="/invite"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          whileHover={{ scale: 1.05 }}
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
      </div>
    </section>
  )
}

export default SaveTheDate
