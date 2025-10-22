"use client";
import { motion } from "framer-motion";
import { Heart, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#9E4E3A] to-[#7A3A2A] text-white py-16 px-4">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl font-bold mb-4"
            style={{ fontFamily: "Kaisei Decol" }}
          >
            Shubham & Shweta
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto rounded-full mb-6"></div>
          <p className="text-white/80 text-sm leading-relaxed">
            "Two souls, one heart. Two families, one celebration. Thank you for
            being part of our special day."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          className="space-y-6"
        >
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-center">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-[#FADAB8]" />
                <span className="text-sm">+91 98765 43210 (Shubham)</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-[#FADAB8]" />
                <span className="text-sm">+91 98765 43211 (Shweta)</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-[#FADAB8]" />
                <span className="text-sm">
                  shubham.shweta.wedding@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-[#FADAB8]" />
                <span className="text-sm">Taj Palace Hotel, Mumbai</span>
              </div>
            </div>
          </div>

          {/* Wedding Date Reminder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
          >
            <h4 className="text-lg font-semibold mb-2">Save the Date</h4>
            <p className="text-2xl font-bold text-[#FADAB8] mb-2">
              November 21, 2025
            </p>
            <p className="text-white/80 text-sm">7:00 PM onwards</p>
          </motion.div>

          {/* Decorative Elements */}
          <div className="flex justify-center gap-4 py-4">
            <Image
              src="/images/hearts.svg"
              alt="decorative hearts"
              width={32}
              height={32}
              className="w-8 h-8 opacity-60"
            />
            <Image
              src="/images/hearts.svg"
              alt="decorative hearts"
              width={24}
              height={24}
              className="w-6 h-6 opacity-40"
            />
            <Image
              src="/images/hearts.svg"
              alt="decorative hearts"
              width={32}
              height={32}
              className="w-8 h-8 opacity-60"
            />
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
            className="text-center pt-6 border-t border-white/20"
          >
            <p className="text-white/60 text-xs">
              Made with <Heart className="w-3 h-3 inline text-[#FADAB8]" /> for
              Shubham & Shweta
            </p>
            <p className="text-white/40 text-xs mt-2">
              © 2024 Shubham & Shweta Wedding. All rights reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
