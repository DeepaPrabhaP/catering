export default function Gallery() {
  const galleryImages = [
    "/outdoor-catering-event-table-setting.jpg",
    "/fine-dining-food-presentation.jpg",
    "/elegant-dinner-party-setup.jpg",
    "/catering-buffet-with-flowers.jpg",
    "/gourmet-food-on-plate.jpg",
    "/elegant-event-venue-setup.jpg",
  ]

  return (
    <section className="bg-gray-50 px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3D2E] text-center mb-3 md:mb-4">
          Our Gallery
        </h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-12 md:mb-16 px-2">
          A glimpse into our past events and culinary creations
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="h-48 sm:h-56 md:h-72 rounded-lg overflow-hidden hover:shadow-lg transition">
              <img
                src={img || "/placeholder.svg"}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
