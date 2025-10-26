"use client"
import { motion } from "framer-motion"
import React from "react"

function Divider({ ...rest }: any) {
  return (
    <div {...rest}>
      <motion.img
        src="/images/divider-line.png"
        alt="border-line"
        className="relative z-10"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1.5, ease: "easeInOut" }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      />
    </div>
  )
}

export default Divider
