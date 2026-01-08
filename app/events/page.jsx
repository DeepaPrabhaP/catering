"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Sparkles, Users, Cake, TreePine, Utensils, Star } from "lucide-react"

const events = [
  {
    id: "wedding",
    title: "Wedding Catering",
    description: "Make your special day unforgettable with our exquisite wedding catering services",
    icon: Sparkles,
    image: "/elegant-catering-event-food.jpg",
    color: "#D4AF37",
  },
  {
    id: "puberty",
    title: "Puberty Ceremony",
    description: "Traditional South Indian ceremonies with authentic flavors and elegant presentation",
    icon: Star,
    image: "/catering-buffet-display.jpg",
    color: "#FFB800",
  },
  {
    id: "birthday",
    title: "Birthday Parties",
    description: "Celebrate with delicious food and memorable experiences for all ages",
    icon: Cake,
    image: "/appetizers-catering-display.jpg",
    color: "#FF8C42",
  },
  {
    id: "outdoor",
    title: "Outdoor Events",
    description: "Perfect catering solutions for outdoor gatherings and garden parties",
    icon: TreePine,
    image: "/outdoor-catering-setup.jpg",
    color: "#4CAF50",
  },
  {
    id: "buffet",
    title: "Buffet Services",
    description: "Wide variety of dishes served buffet-style for corporate and social events",
    icon: Utensils,
    image: "/catering-buffet-with-flowers.jpg",
    color: "#9C27B0",
  },
  {
    id: "others",
    title: "Other Events",
    description: "Custom catering for anniversaries, engagements, and special occasions",
    icon: Users,
    image: "/gourmet-food-dish-plated-professionally.jpg",
    color: "#FF5252",
  },
]

export default function EventsPage() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />

      {/* Background image with parallax effect */}
      <div
        className="fixed inset-0 -z-10 transition-opacity duration-300"
        style={{
          backgroundImage: "url('/elegant-catering-event-food.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: Math.max(0, 0.15 - scrollY / 1000),
        }}
      />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#0B3D2E] mb-6">Our Catering Events</h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          From intimate gatherings to grand celebrations, we bring culinary excellence to every occasion
        </p>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const Icon = event.icon
            return (
              <Link
                href={`/events/${event.id}`}
                key={event.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Icon Badge */}
                  <div
                    className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: event.color }}
                  >
                    <Icon className="text-white" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#0B3D2E] mb-3 group-hover:text-[#D4AF37] transition">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex items-center text-[#0B3D2E] font-semibold group-hover:text-[#D4AF37] transition">
                    View Details
                    <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
