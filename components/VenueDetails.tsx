"use client"
import { motion } from "framer-motion"
import { Calendar, Clock, ExternalLink, Heart, MapPin, Navigation } from "lucide-react"
import Image from "next/image"

function VenueDetails() {
  const venueAddress = "Sushila Mangal Karyalaya & Lawns, Talegaon Dabhade"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`

  return (
    <motion.section
      className="relative py-16 px-4 bg-gradient-to-br from-[#FADAB8]/10 to-[#F5E6D3]/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 4.5, ease: "easeOut" }}
    >
      {/* Top White Fade Gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

      {/* Bottom White Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 4.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#9E4E3A] mb-4">Wedding Details</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {/* Venue Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 5.1, ease: "easeOut" }}
            className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
          >
            <Image src="/images/venue.png" alt="Wedding Venue" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white">
                <Heart className="w-4 h-4 text-[#DA5373]" />
                <span className="text-sm font-medium">Our Special Day Venue</span>
              </div>
            </div>
          </motion.div>

          {/* Ceremony Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.5, ease: "easeOut" }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-[#F5E6D3]/50"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DA5373] to-[#B83A5B] rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#9E4E3A]">Wedding Ceremony</h3>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#FADAB8]/20 to-[#F5E6D3]/30 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Clock className="w-5 h-5 text-[#DA5373] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#9E4E3A] font-semibold text-sm">Date & Time</p>
                  <span className="text-[#656565] text-sm">
                    November 22, 2025 - 06:00 PM onwards
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#FADAB8]/20 to-[#F5E6D3]/30 rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-5 h-5 text-[#DA5373] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#9E4E3A] font-semibold text-sm">Venue</p>
                  <span className="text-[#656565] text-sm leading-relaxed">
                    Sushila Mangal Karyalaya & Lawns, Talegaon Dabhade
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Google Maps Directions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 5.9, ease: "easeOut" }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-[#9E4E3A] text-center">Get Directions</h3>

            <motion.a
              href={googleMapsUrl}
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
              href={`https://maps.apple.com/?q=${encodeURIComponent(venueAddress)}`}
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

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 6.3, ease: "easeOut" }}
            className="bg-gradient-to-br from-[#FADAB8]/30 to-[#F5E6D3]/50 p-6 rounded-2xl border border-[#F5E6D3]/50 text-center"
          >
            <Heart className="w-8 h-8 text-[#DA5373] mx-auto mb-3" />
            <p className="text-[#656565] text-base leading-relaxed">
              We can't wait to celebrate this special day with you. Please arrive 15 minutes early
              for the ceremony.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}

export default VenueDetails
