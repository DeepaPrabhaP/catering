"use client"

import { useState } from "react"
import { Calendar, User, MapPin, Phone, Users, Mail, Send } from "lucide-react"

export default function ContactForm({ eventType = "General Inquiry" }) {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    numberOfPeople: "",
    eventDate: "",
    message: "",
  })

  const [showCalendar, setShowCalendar] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you! We'll contact you soon.")
    // Reset form
    setFormData({
      name: "",
      place: "",
      phone: "",
      email: "",
      numberOfPeople: "",
      eventDate: "",
      message: "",
    })
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl">
      <div className="mb-8 p-4 bg-gradient-to-r from-[#0B3D2E] to-[#165140] text-white rounded-lg text-center">
        <p className="text-lg font-semibold">Event Type: {eventType}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label className="flex items-center gap-2 text-[#0B3D2E] font-semibold mb-2">
            <User size={20} className="text-[#D4AF37]" />
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition"
            placeholder="Enter your full name"
          />
        </div>

        {/* Place */}
        <div>
          <label className="flex items-center gap-2 text-[#0B3D2E] font-semibold mb-2">
            <MapPin size={20} className="text-[#D4AF37]" />
            Location *
          </label>
          <input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition"
            placeholder="Event location or city"
          />
        </div>

        {/* Phone & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="flex items-center gap-2 text-[#0B3D2E] font-semibold mb-2">
              <Phone size={20} className="text-[#D4AF37]" />
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-[#0B3D2E] font-semibold mb-2">
              <Mail size={20} className="text-[#D4AF37]" />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition"
              placeholder="your@email.com"
            />
          </div>
        </div>

        {/* Number of People */}
        <div>
          <label className="flex items-center gap-2 text-[#0B3D2E] font-semibold mb-2">
            <Users size={20} className="text-[#D4AF37]" />
            Number of People *
          </label>
          <input
            type="number"
            name="numberOfPeople"
            value={formData.numberOfPeople}
            onChange={handleChange}
            required
            min="1"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition"
            placeholder="Expected guests"
          />
        </div>

        {/* Event Date with Calendar */}
        <div>
          <label className="flex items-center gap-2 text-[#0B3D2E] font-semibold mb-2">
            <Calendar size={20} className="text-[#D4AF37]" />
            Event Date *
          </label>
          <input
            type="date"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            required
            min={new Date().toISOString().split("T")[0]}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition cursor-pointer"
          />
        </div>

        {/* Message */}
        <div>
          <label className="flex items-center gap-2 text-[#0B3D2E] font-semibold mb-2">Additional Requirements</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition resize-none"
            placeholder="Any special requests or dietary requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#0B3D2E] to-[#165140] text-white py-4 rounded-lg font-bold text-lg hover:from-[#165140] hover:to-[#0B3D2E] transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
        >
          <Send size={24} />
          Submit Booking Request
        </button>
      </form>

      <p className="text-center text-gray-600 mt-6">
        We'll get back to you within 24 hours to discuss your event in detail
      </p>
    </div>
  )
}
