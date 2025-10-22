"use client";
import { motion } from "framer-motion";
import { CheckCircle, Heart, XCircle } from "lucide-react";
import { useState } from "react";

function RSVPSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "1",
    message: "",
    attending: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("RSVP Data:", formData);
    setIsSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-[#FADAB8]/20 to-[#F5E6D3]/30">
        <div className="max-w-md mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <CheckCircle className="w-20 h-20 text-[#DA5373] mx-auto mb-6" />
            <h2
              className="text-3xl font-bold text-[#9E4E3A] mb-4"
              style={{ fontFamily: "Kaisei Decol" }}
            >
              Thank You!
            </h2>
            <p className="text-[#656565] mb-6">
              We've received your RSVP. We can't wait to celebrate with you!
            </p>
            <button
              type="button"
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-[#DA5373] text-white rounded-lg font-semibold hover:bg-[#B83A5B] transition-colors"
            >
              Submit Another RSVP
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#FADAB8]/20 to-[#F5E6D3]/30">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="text-center mb-8"
        >
          <h2
            className="text-3xl font-bold text-[#9E4E3A] mb-4"
            style={{ fontFamily: "Kaisei Decol" }}
          >
            Will You Join Us?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] mx-auto rounded-full mb-4"></div>
          <p className="text-[#656565]">
            Please let us know if you'll be attending our special day
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
          className="bg-white p-6 rounded-2xl shadow-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Attending Status */}
            <div className="space-y-2">
              <fieldset>
                <legend className="block text-sm font-medium text-[#9E4E3A]">
                  Will you be attending? *
                </legend>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="yes"
                      checked={formData.attending === "yes"}
                      onChange={handleChange}
                      className="text-[#DA5373]"
                      required
                    />
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-[#656565]">Yes, I'll be there!</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="attending"
                      value="no"
                      checked={formData.attending === "no"}
                      onChange={handleChange}
                      className="text-[#DA5373]"
                      required
                    />
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span className="text-[#656565]">Sorry, can't make it</span>
                  </label>
                </div>
              </fieldset>
            </div>

            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[#9E4E3A] mb-1"
              >
                Full Name *
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA5373] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-[#9E4E3A] mb-1"
              >
                Email *
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA5373] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-[#9E4E3A] mb-1"
              >
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA5373] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>

            {/* Number of Guests */}
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-[#9E4E3A] mb-1"
              >
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA5373] focus:border-transparent"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#9E4E3A] mb-1"
              >
                Special Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DA5373] focus:border-transparent"
                placeholder="Share your excitement or any special requests..."
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-[#DA5373] to-[#B83A5B] text-white rounded-lg font-semibold hover:from-[#B83A5B] hover:to-[#9A2E4A] transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Heart className="w-5 h-5" />
              Send RSVP
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default RSVPSection;
