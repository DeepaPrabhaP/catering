"use client"

import { useState } from "react"

const aboutCards = [
  {
    title: "Our Story",
    description:
      "Founded in 2008, Elite Catering has been crafting unforgettable culinary experiences for over 15 years. From humble beginnings to becoming one of the region's most trusted catering partners, our journey is built on passion, excellence, and dedication to every client.",
    icon: "📖",
  },
  {
    title: "Our Mission",
    description:
      "To create exceptional dining experiences that elevate every celebration. We combine creative cuisine, impeccable service, and attention to detail to transform your events into lasting memories. Our mission is your satisfaction.",
    icon: "🎯",
  },
  {
    title: "Our Team",
    description:
      "Our expert team of award-winning chefs, event planners, and service professionals bring decades of combined experience. We're passionate about what we do and committed to exceeding your expectations on every occasion.",
    icon: "👨‍🍳",
  },
]

export default function About() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section className="bg-gray-50 px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3D2E] mb-3 md:mb-4">About Us</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Experience the essence of luxury catering with a personal touch
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {aboutCards.map((card, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-transparent hover:border-[#D4AF37]">
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 transition-transform duration-300 group-hover:scale-125">
                  {card.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0B3D2E] mb-3 md:mb-4 transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed transition-colors duration-300 group-hover:text-gray-700">
                  {card.description}
                </p>
                <div className="mt-4 md:mt-6 h-1 w-12 bg-gradient-to-r from-[#0B3D2E] to-[#D4AF37] rounded-full transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 bg-white rounded-2xl p-8 md:p-12 border-l-4 border-[#D4AF37] shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-[#0B3D2E] mb-4">Why Choose Us?</h4>
              <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-lg">✓</span> 15+ years of proven excellence
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-lg">✓</span> Award-winning culinary team
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-lg">✓</span> Customized menus for every occasion
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-[#D4AF37] text-lg">✓</span> Attention to every detail
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-[#0B3D2E] mb-4">Our Commitment</h4>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                We believe that great catering goes beyond serving food. It's about creating moments, building
                relationships, and delivering an experience that guests will remember for years to come. Your vision is
                our mission, and your satisfaction is our guarantee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
