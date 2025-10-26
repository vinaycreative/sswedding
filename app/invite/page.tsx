"use client"
import { MapPin } from "lucide-react"
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
              src="/images/name-decoration.png"
              alt="border-line"
              className="w-1/2 mx-auto"
              data-aos="zoom-in"
              width={1000}
              height={1000}
            />
          </div>
          <div
            className="absolute flex items-center justify-center gap-3 text-4xl font-semibold"
            style={{ fontFamily: "Kaushan Script" }}
          >
            <h1
              className="text-[#AA8D56]"
              data-aos="fade-down"
              data-aos-easing="ease-in-back"
              data-aos-offset="0"
            >
              Shubham
            </h1>
            <span
              className="text-[#E1A40F] inline-block"
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
            className="text-center text-lg font-bold w-[60%] mx-auto text-[#573A32] mb-2 text-wrap"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
          >
            Sushila Mangal Karyalaya & Lawns, Limb Phata, <br />{" "}
            <span className="text-xs">Talegaon Dabhade - 410507</span>
          </h2>

          <Link
            className="flex items-center text-sm border border-yellow-800 text-white hover:bg-yellow-900 hover:text-white bg-yellow-700 px-4 rounded-sm py-2 gap-2 transition-all"
            data-aos="fade-up"
            href="https://www.google.com/maps/search/?api=1&query=Sushila%20Mangal%20Karyalaya%20%26%20Lawns%2C%20Talegaon%20Dabhade"
            target="_blank" // Opens the link in a new tab
            rel="noopener noreferrer"
          >
            <MapPin size={14} /> Get Directions
          </Link>
          <p className="text-sm text-center text-[#974630] font-extrabold" data-aos="fade-up">
            Vitthal | Vinay
          </p>
          <p className="text-sm text-center text-[#573A32] -mt-2" data-aos="fade-up">
            <Link href="tel:7499162533">7499162533</Link> |{" "}
            <Link href="tel:9764796379">9764796379</Link>
          </p>
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
    </>
  )
}

export default page
