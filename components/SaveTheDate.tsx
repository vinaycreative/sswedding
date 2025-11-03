"use client"
import { CalendarHeart } from "lucide-react"
import Image from "next/image"

const SaveTheDate = () => {
  return (
    <section className="w-full relative z-10 h-auto">
      <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white to-transparent z-10 overflow-hidden" />
      <div className="absolute -top-4 left-0 w-full h-[10%] rounded-full  bg-gradient-to-b from-white to-transparent z-10 overflow-hidden" />
      <div className="w-full overflow-hidden flex items-center justify-center">
        <Image
          src="/images/white-curtains.png"
          alt="decorative-curtains"
          className="w-full object-fit scale-[1] object-cover"
          width={1000}
          height={1000}
        />
        <div className="flex items-center justify-center flex-col absolute pt-12">
          <span className="tex-sm text-[#858383] inline-block mb-3" data-aos="fade-down">
            Save the Date
          </span>
          <div className="flex items-center flex-col justify-center gap-1 text-[#ac1b46]">
            <CalendarHeart data-aos="zoom-in" size={42} className="animate-bounce" />{" "}
            <h1 data-aos="fade-up" className="font-bold text-2xl text-[#ac1b46]">
              November 22, 2025
            </h1>
          </div>
          <p data-aos="fade-up" className="text-sm text-[#656565] mt-2 text-center ">
            Mark your calendars for a day filled <br /> with love, laughter, and memories!
          </p>
        </div>
      </div>

      {/* <div className="action flex flex-col gap-2 w-full px-4 mt-5">
        <Link
          className="text-[15px] flex items-center justify-center gap-2 border border-[#573A32] py-3 text-white bg-[#DA5373] w-full rounded-md font-semibold"
          href="/invite"
        >
          <BookHeart size={20} />
          View Invitation
        </Link>
      </div> */}
    </section>
  )
}

export default SaveTheDate
