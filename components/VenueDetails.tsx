"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import Image from "next/image";

function VenueDetails() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl font-bold text-[#9E4E3A] mb-4"
            style={{ fontFamily: "Kaisei Decol" }}
          >
            Wedding Details
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {/* Ceremony Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-gradient-to-br from-[#FADAB8]/30 to-[#F5E6D3]/50 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#DA5373] rounded-full flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl font-bold text-[#9E4E3A]"
                style={{ fontFamily: "Kaisei Decol" }}
              >
                Wedding Ceremony
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#DA5373]" />
                <span className="text-[#656565]">
                  November 21, 2025 - 7:00 PM onwards
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#DA5373]" />
                <span className="text-[#656565]">Taj Palace Hotel, Mumbai</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#DA5373]" />
                <span className="text-[#656565]">200+ Guests</span>
              </div>
            </div>
          </motion.div>

          {/* Reception Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-gradient-to-br from-[#FADAB8]/30 to-[#F5E6D3]/50 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#DA5373] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl font-bold text-[#9E4E3A]"
                style={{ fontFamily: "Kaisei Decol" }}
              >
                Reception
              </h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#DA5373]" />
                <span className="text-[#656565]">
                  November 21, 2025 - 8:30 PM onwards
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#DA5373]" />
                <span className="text-[#656565]">Taj Palace Hotel, Mumbai</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#DA5373]" />
                <span className="text-[#656565]">Dinner & Dancing</span>
              </div>
            </div>
          </motion.div>

          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/venue.png"
              alt="Wedding Venue"
              width={400}
              height={192}
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-bold text-lg">Taj Palace Hotel</h4>
              <p className="text-sm opacity-90">Mumbai, Maharashtra</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default VenueDetails;
