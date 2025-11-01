"use client"
import Image from "next/image"

function Hero() {
  return (
    <section
      className="h-[600px] bg-gray-100 hero"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out"
    >
      <div
        className="w-full h-full relative"
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-delay="200"
        data-aos-easing="ease-out"
      >
        <Image
          src="/images/Hero-3.jpg"
          alt="Shubham & Shweta"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}

export default Hero
