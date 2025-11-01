"use client"
import { Calendar, Clock, ExternalLink, Heart, MapPin, Navigation } from "lucide-react"
import Image from "next/image"

function VenueDetails() {
  const venueAddress = "Sushila Mangal Karyalaya & Lawns, Talegaon Dabhade"
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venueAddress)}`

  return (
    <section
      className="relative py-16 px-4 bg-gradient-to-br from-[#FADAB8]/10 to-[#F5E6D3]/20"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-easing="ease-out"
    >
      {/* Top White Fade Gradient */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />

      {/* Bottom White Fade Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
      <div className="max-w-md mx-auto">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-easing="ease-out"
        >
          <h2 className="text-3xl font-bold text-[#9E4E3A] mb-4">Wedding Details</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Venue Image */}
          <div
            className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-easing="ease-out"
          >
            <Image src="/images/venue.png" alt="Wedding Venue" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white">
                <Heart className="w-4 h-4 text-[#DA5373]" />
                <span className="text-sm font-medium">Our Special Day Venue</span>
              </div>
            </div>
          </div>

          {/* Ceremony Details */}
          <div
            className="bg-white p-6 rounded-2xl shadow-lg border border-[#F5E6D3]/50"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#DA5373] to-[#B83A5B] rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#9E4E3A]">Wedding Ceremony</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#FADAB8]/20 to-[#F5E6D3]/30 rounded-xl transition-transform duration-200 hover:scale-[1.02]">
                <Clock className="w-5 h-5 text-[#DA5373] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#9E4E3A] font-semibold text-sm">Date & Time</p>
                  <span className="text-[#656565] text-sm">
                    November 22, 2025 - 06:00 PM onwards
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gradient-to-r from-[#FADAB8]/20 to-[#F5E6D3]/30 rounded-xl transition-transform duration-200 hover:scale-[1.02]">
                <MapPin className="w-5 h-5 text-[#DA5373] mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-[#9E4E3A] font-semibold text-sm">Venue</p>
                  <span className="text-[#656565] text-sm leading-relaxed">
                    Sushila Mangal Karyalaya & Lawns, Talegaon Dabhade
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Directions */}
          <div
            className="space-y-4"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <h3 className="text-lg font-bold text-[#9E4E3A] text-center">Get Directions</h3>

            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] text-white py-4 px-6 rounded-xl shadow-lg font-semibold transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
            >
              <Navigation className="w-5 h-5" />
              <span>Open in Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={`https://maps.apple.com/?q=${encodeURIComponent(venueAddress)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 border-2 border-[#DA5373] text-[#DA5373] py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:bg-[#DA5373] hover:text-white hover:scale-105 active:scale-95"
            >
              <MapPin className="w-5 h-5" />
              <span>Open in Apple Maps</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Additional Info */}
          <div
            className="bg-gradient-to-br from-[#FADAB8]/30 to-[#F5E6D3]/50 p-6 rounded-2xl border border-[#F5E6D3]/50 text-center"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-easing="ease-out"
          >
            <Heart className="w-8 h-8 text-[#DA5373] mx-auto mb-3" />
            <p className="text-[#656565] text-base leading-relaxed">
              We can't wait to celebrate this special day with you. Please arrive 15 minutes early
              for the ceremony.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueDetails
