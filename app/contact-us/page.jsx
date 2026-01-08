"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { User, MapPin, Phone, Mail, Send } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    place: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    alert("Thank you for your inquiry! We'll contact you soon.")
    setFormData({
      name: "",
      place: "",
      phone: "",
      email: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <div className="bg-gradient-to-r from-[#0B3D2E] via-[#0B3D2E]/90 to-[#0B3D2E] pt-20 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Order from Our Daily Menu</h1>
          <p className="text-[#D4AF37] text-lg md:text-xl">
            Fresh authentic Tamil Nadu dishes delivered to your doorstep
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 py-16">
        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-[#0B3D2E]/10 to-[#D4AF37]/10 p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-[#0B3D2E] rounded-full flex items-center justify-center mx-auto mb-3">
              <Phone className="text-[#D4AF37]" size={24} />
            </div>
            <h3 className="font-bold text-[#0B3D2E] mb-2">Call Us</h3>
            <p className="text-gray-600">+91 XXXXX XXXXX</p>
          </div>

          <div className="bg-gradient-to-br from-[#0B3D2E]/10 to-[#D4AF37]/10 p-6 rounded-2xl text-center">
            <div className="w-12 h-12 bg-[#0B3D2E] rounded-full flex items-center justify-center mx-auto mb-3">
              <Mail className="text-[#D4AF37]" size={24} />
            </div>
            <h3 className="font-bold text-[#0B3D2E] mb-2">Email Us</h3>
            <p className="text-gray-600">info@elitecatering.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border-2 border-gray-100">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-2 text-center">Order Details</h2>
          <p className="text-center text-gray-600 mb-8">Fill in your details below to place an order</p>

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
                Delivery Location *
              </label>
              <input
                type="text"
                name="place"
                value={formData.place}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition"
                placeholder="Your city or address"
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

            {/* Special Requests */}
            <div>
              <label className="text-[#0B3D2E] font-semibold mb-2 block">Special Requests & Preferences</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-[#D4AF37] focus:outline-none transition resize-none"
                placeholder="Which day's menu? Dietary restrictions? Any special dishes you prefer? Let us know!"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0B3D2E] to-[#165140] text-white py-4 rounded-lg font-bold text-lg hover:from-[#165140] hover:to-[#0B3D2E] transition-all flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl"
            >
              <Send size={24} />
              Submit Order Inquiry
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6">
            We'll get back to you within 2 hours to confirm your order and discuss delivery details
          </p>
        </div>
      </div>

      <Footer />
    </div>
  )
}
