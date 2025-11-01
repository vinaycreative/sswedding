"use client"
import { motion } from "framer-motion"
import { ExternalLink, Heart, MapPin, Navigation } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { AOSInit } from "@/components/Aos"
import Divider from "@/components/Divider"
import InvitationHero from "@/components/InvitationHero"
import Main from "./main"

function page() {
  return (
    <Main>
      <InvitePage />
    </Main>
  )
}

const InvitePage = () => {
  return (
    <>
      <AOSInit />
      <InvitationHero />
      <section className="relative">
        <div className="bg-gradient-to-b from-[rgb(255_255_255)_24%] to-transparent absolute inset-0 top-0 z-10"></div>
        <div className="bg-gradient-to-t from-[rgb(255_255_255)_24%] to-transparent absolute inset-0 top-0 z-10"></div>
        {/* <Divider className="mb-10" /> */}
        <div className="relative flex flex-col items-center justify-center overflow-hidden z-10">
          <div className="overflow-hidden">
            <Image
              src="./images/hearts.svg"
              alt="border-line"
              className="w-20 mx-auto"
              data-aos="zoom-in"
              width={1000}
              height={1000}
            />
          </div>
          <div
            className="flex items-center justify-center gap-3 text-2xl font-semibold"
            style={{ fontFamily: "Momo Trust Display" }}
          >
            <h1
              className="text-[#ac1b46]"
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
            >
              Shubham
            </h1>
            <span
              className="text-[#ac1b46] inline-block"
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
            >
              &
            </span>
            <h1
              className="text-[#573A32]"
              data-aos="fade-up"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
            >
              Shweta
            </h1>
          </div>
        </div>

        <div className="relative mt-8 z-10 w-full" data-aos="zoom-in">
          <Image
            src="/images/hero-image.jpg"
            alt="shubham-and-shweta"
            className="w-full"
            // style={{ clipPath: "rect(10px, 20px, 30px, 40px)" }}
            // style={{ borderRadius: "100px 100px 20px 20px" }}

            width={1000}
            height={1000}
          />
          <div className="h-[20%] w-full bg-gradient-to-t from-white to-transparent absolute right-0 -bottom-2 left-0 z-10"></div>
          <div className="h-[30%] w-full bg-gradient-to-t from-white to-transparent absolute right-0 -bottom-2 left-0 z-10"></div>
        </div>

        <Divider className="mt-10" />
      </section>
      <section className="pt-16 pb-20 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-3 w-[100%] mx-auto">
          <p
            className="text-sm  text-center border bg-[#573A32] text-white px-3 py-1 rounded-md"
            data-aos="fade-down"
          >
            Venue
          </p>
          <h2
            className="text-center text-2xl font-bold w-[80%] mx-auto text-[#573A32] text-wrap"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
          >
            Sushila Mangal Karyalaya & Lawns, Limb Phata, <br />{" "}
            <span className="text-xs font-medium">Talegaon Dabhade - 410507</span>
          </h2>

          <div className="w-full relative z-20 px-10 mt-2">
            {/* Google Maps Directions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-[#9E4E3A] text-center">Get Directions</h3>

              <motion.a
                href="https://www.google.com/maps/search/?api=1&query=Sushila%20Mangal%20Karyalaya%20%26%20Lawns%2C%20Talegaon%20Dabhade"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] text-white py-4 px-6 rounded-xl shadow-lg font-semibold transition-all duration-300 hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Navigation className="w-5 h-5" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={
                  "https://www.google.com/maps/search/?api=1&query=Sushila%20Mangal%20Karyalaya%20%26%20Lawns%2C%20Talegaon%20Dabhade"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border-2 border-[#DA5373] text-[#DA5373] py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-[#DA5373] hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MapPin className="w-5 h-5" />
                <span>Open in Apple Maps</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
            <div className="py-4">
              <h2 className="text-lg font-bold text-[#9E4E3A] text-center">Contact Us</h2>
              <div
                className="grid grid-cols-2 gap-2 text-sm text-center text-[#573A32] mt-2"
                data-aos="fade-up"
              >
                <Link
                  href="tel:7499162533"
                  className="px-4 py-1 cursor-pointer rounded-md border border-pink-500 bg-pink-50 text-pink-500 hover:text-pink-600"
                >
                  <span className="text-xs font-bold text-pink-500">
                    Vitthal Bhadre <br />
                  </span>
                  7499162533
                </Link>
                <Link
                  href="tel:9764796379"
                  className="px-4 py-1 cursor-pointer rounded-md border border-pink-500 bg-pink-50 text-pink-500 hover:text-pink-600"
                >
                  <span className="text-xs font-bold text-pink-500">
                    Vinay Bhadre <br />
                  </span>
                  9764796379
                </Link>
                <Link
                  href="tel:9130307856"
                  className="px-4 py-1 cursor-pointer rounded-md border border-blue-500 bg-blue-50 text-blue-500 hover:text-pink-600"
                >
                  <span className="text-xs font-bold text-blue-500">
                    Sandeep Kadam <br />
                  </span>
                  9130307856
                </Link>{" "}
                <Link
                  href="tel:9730296417"
                  className="px-4 py-1 cursor-pointer rounded-md border border-blue-500 bg-blue-50 text-blue-500 hover:text-blue-600"
                >
                  <span className="text-xs font-bold text-blue-500">
                    Shubham Kadam <br />
                  </span>
                  9730296417
                </Link>
                <Link
                  href="tel:9527434191"
                  className="px-4 py-1 cursor-pointer rounded-md border border-blue-500 bg-blue-50 text-blue-500 hover:text-blue-600"
                >
                  <span className="text-xs font-bold text-blue-500">
                    Shriram Kadam <br />
                  </span>
                  9527434191
                </Link>
              </div>
            </div>
          </div>
          <p
            className="text-xs text-center text-gray-500 mt-1"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Be there by 06:00 PM <br />
            to enjoy and share the joy!
          </p>
        </div>

        <div
          className="px-6 mt-16 flex flex-col bg-white items-center justify-center"
          data-aos="flip-up"
          data-aos-delay="500"
        >
          <p className="text-center text-sm text-[#573A32]">
            Your presence is a blessing, and we're so grateful to have you with us as we begin this
            beautiful journey together.
          </p>
          <Image
            src="/images/gold-divider.png"
            alt="border-line"
            className="absolute scale-[1.3]"
            width={1000}
            height={1000}
          />
        </div>
      </section>
      <footer className="text-center flex flex-col items-center justify-center relative z-10">
        <p className="text-gray-800 text-xs">
          Made with <Heart className="w-3 h-3 inline text-[#fe0058]" fill="#fe0058" /> by
          <Link
            href="https://vinaycreative.com"
            target="_blank"
            className="text-[#fe0058] font-semibold inline-block ml-1"
          >
            VinayCreative
          </Link>
        </p>
        <p className="text-white/40 text-xs mt-2">© 2025 VinayCreatives. All rights reserved.</p>
      </footer>
    </>
  )
}

export default page
