import Image from "next/image"
import { Suspense } from "react"
import InviteMember from "@/components/InviteMember"
import { FadeText } from "@/components/ui/fade-text"

function InvitationHero() {
  return (
    <section className="relative h-[680px] overflow-hidden">
      {/* Mandap Image */}
      <div className="absolute h-[400px] w-full inset-0 overflow-hidden">
        <div className="relative">
          <Image
            src="https://png.pngtree.com/png-clipart/20250502/original/pngtree-luxury-indian-wedding-mandap-pink-flowers-png-image_20931909.png"
            alt="Hero"
            className="scale-[1.25] object-cover mt-3 h-full w-full overflow-hidden"
            width={1000}
            height={1000}
          />
        </div>
        <div className="h-full w-full bg-gradient-to-t from-white to-transparent absolute -bottom-2 left-0 z-10"></div>
        <div className="h-[50%] w-full bg-gradient-to-t from-white to-transparent absolute right-0 -bottom-2 left-0 z-10"></div>
        <div className="h-[20%] w-full bg-gradient-to-t from-white to-transparent absolute right-0 -bottom-2 left-0 z-10"></div>
      </div>

      <div className="relative mt-48 z-[40] flex flex-col justify-center items-center gap-2">
        <Image
          src="./images/hearts.svg"
          alt="hearts"
          className="w-8 mb-2"
          data-aos="fade-down"
          width={1000}
          height={1000}
        />
        <p
          className="text-center text-base text-[#ac1b46]"
          data-aos="zoom-in"
          data-aos-easing="ease-in-sine"
        >
          With Love and Joy, <br /> We Invite You
        </p>
        <Suspense fallback={<div className="w-full py-6"></div>}>
          <InviteMember />
        </Suspense>
        <FadeText
          className="text-sm text-[#ac1b46]"
          direction="up"
          framerProps={{
            show: { transition: { delay: 0.2 } },
          }}
          text="To our wedding"
        />

        <div className="w-[280px] text-center text-base text-[#ac1b46] font-medium leading-6">
          <FadeText
            className="text-[15px] text-[#535220]k"
            direction="up"
            framerProps={{
              show: { transition: { delay: 0.4 } },
            }}
            text="Join us on"
          />

          <div
            className="bg-pink-50 h-[78px] overflow-hidden py-3 border border-[#ac1b46] rounded-md mt-2 mb-3"
            data-aos="flip-up"
          >
            <FadeText
              className="text-base font-semibold text-[#ac1b46]"
              direction="up"
              framerProps={{
                show: { transition: { delay: 1 } },
              }}
              text="November 22, Saturday, 2025"
            />
            <FadeText
              className="font-bold text-[#ac1b46] text-sm mb-2"
              direction="down"
              framerProps={{
                show: { transition: { delay: 1 } },
              }}
              text="At 06:00pm"
            />
          </div>

          <div className="mt-3">
            <FadeText
              className="text-base text-[#ac1b46]"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.4 } },
              }}
              text="to celebrate our big day we can’t wait to make memories"
            />
            <FadeText
              className="text-base text-[#535220]k"
              direction="up"
              framerProps={{
                show: { transition: { delay: 0.45 } },
              }}
              text="with you!"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default InvitationHero
