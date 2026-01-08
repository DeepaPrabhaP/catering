import { Heart, Briefcase, Users } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Wedding Catering",
    description:
      "Make your special day unforgettable with our elegant wedding catering services. From intimate gatherings to grand celebrations.",
  },
  {
    icon: Briefcase,
    title: "Corporate Events",
    description:
      "Professional catering for business meetings, conferences, and corporate functions. Impress your clients and colleagues.",
  },
  {
    icon: Users,
    title: "Private Parties",
    description:
      "Celebrate life's moments with custom menus tailored to your preferences. Perfect for birthdays, anniversaries, and gatherings.",
  },
]

export default function Services() {
  return (
    <section className="bg-white px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B3D2E] text-center mb-3 md:mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-base md:text-lg text-center mb-12 md:mb-16 px-2">
          We specialize in creating memorable culinary experiences for every occasion
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`p-6 md:p-8 rounded-lg border-2 transition ${idx === 1 ? "border-[#D4AF37] bg-yellow-50" : "border-gray-200 hover:border-[#D4AF37]"}`}
              >
                <div className="bg-[#0B3D2E] text-[#D4AF37] w-14 md:w-16 h-14 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-6 mx-auto">
                  <Icon size={24} className="md:w-8 md:h-8" />
                </div>
                <h3 className="text-lg md:text-2xl font-bold text-[#0B3D2E] text-center mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 text-center">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
