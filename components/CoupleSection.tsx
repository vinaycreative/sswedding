"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function CoupleSection() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-[#FADAB8]/20 to-[#F5E6D3]/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
        <Image
          src="/images/divider-line.png"
          alt="decorative divider"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-md mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mb-8"
        >
          <h2
            className="text-3xl font-bold text-[#9E4E3A] mb-4"
            style={{ fontFamily: "Kaisei Decol" }}
          >
            Together With Their Families
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative mb-8"
        >
          <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-white">
            <Image
              src="/images/vinay-and-jyo.jpg"
              alt="Shubham & Shweta"
              fill
              className="object-cover"
            />
          </div>
          {/* Decorative flowers around the image */}
          <Image
            src="/images/flower-mandap.png"
            alt="decorative flowers"
            width={64}
            height={64}
            className="absolute -top-4 -right-4 w-16 h-16 opacity-80"
          />
          <Image
            src="/images/flower-mn.png"
            alt="decorative flowers"
            width={64}
            height={64}
            className="absolute -bottom-4 -left-4 w-16 h-16 opacity-80"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="text-center">
              <h3
                className="text-2xl font-bold text-[#9E4E3A]"
                style={{ fontFamily: "Kaisei Decol" }}
              >
                Shubham
              </h3>
              <p className="text-sm text-[#656565]">Son of Mr. & Mrs. Sharma</p>
            </div>
            <div className="text-4xl text-[#DA5373]">&</div>
            <div className="text-center">
              <h3
                className="text-2xl font-bold text-[#9E4E3A]"
                style={{ fontFamily: "Kaisei Decol" }}
              >
                Shweta
              </h3>
              <p className="text-sm text-[#656565]">
                Daughter of Mr. & Mrs. Gupta
              </p>
            </div>
          </div>

          <p
            className="text-[#656565] text-sm leading-relaxed mt-6"
            style={{ fontFamily: "Kaisei Decol" }}
          >
            Two hearts, one soul. Two families, one celebration. Join us as we
            begin our journey together in holy matrimony.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default CoupleSection;
