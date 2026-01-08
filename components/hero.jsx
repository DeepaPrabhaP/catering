"use client"

import { useState, useEffect } from "react"

const images = [
  "/gourmet-food-dish-plated-professionally.jpg",
  "/appetizers-catering-display.jpg",
  "/elegant-catering-event-food.jpg",
  "/fine-dining-dish-presentation.jpg",
  "/catering-buffet-display.jpg",
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-[#0B3D2E] min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-[#D4AF37] mb-3 md:mb-4 text-center">
        Elite Catering
      </h1>
      <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-8 md:mb-16 px-2">
        Curating culinary excellence for your celebrations
      </p>

      <div className="relative w-full max-w-2xl md:max-w-4xl px-2 md:px-0">
        <div className="overflow-hidden rounded-xl">
          <div className="relative h-48 sm:h-64 md:h-96 w-full">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img || "/placeholder.svg"}
                alt={`Dish ${idx + 1}`}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
                style={{ opacity: idx === current ? 1 : 0 }}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-1 md:gap-2 mt-4 md:mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-colors duration-300 ${
                idx === current ? "bg-[#D4AF37]" : "bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
