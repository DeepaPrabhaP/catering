"use client"

import { Phone, MessageCircle, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0B3D2E] text-white px-4 md:px-6 py-12 md:py-16">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-[#D4AF37] mb-3 md:mb-4">Elite Catering</h3>
            <p className="text-gray-200 text-sm md:text-base">
              Creating unforgettable culinary experiences for over 15 years. We pride ourselves on exceptional service,
              exquisite cuisine, and attention to every detail.
            </p>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-[#D4AF37] mb-4 md:mb-6">Contact Details</h4>
            <div className="space-y-3 md:space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="text-[#D4AF37] flex-shrink-0" size={18} />
                <span className="text-sm md:text-base">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="text-[#D4AF37] flex-shrink-0" size={18} />
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base hover:text-[#D4AF37] transition-colors duration-300 cursor-pointer"
                >
                  WhatsApp: +91 XXXXX XXXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#D4AF37] flex-shrink-0" size={18} />
                <span className="text-sm md:text-base">info@elitecatering.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg md:text-xl font-bold text-[#D4AF37] mb-4 md:mb-6">Ready to Get Started?</h4>
            <p className="text-gray-200 mb-4 text-sm md:text-base">
              Contact us today to discuss your event and receive a personalized quote.
            </p>
            <button
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              className="w-full bg-[#D4AF37] text-[#0B3D2E] px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:bg-yellow-400 transition text-sm md:text-base"
            >
              Contact Us on WhatsApp
            </button>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 md:pt-8 text-center text-gray-400 text-sm md:text-base">
          <p>&copy; 2025 Elite Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
