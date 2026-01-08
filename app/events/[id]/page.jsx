"use client"
import { useParams } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Star, ArrowLeft, Check } from "lucide-react"
import Link from "next/link"

const eventDetails = {
  wedding: {
    title: "Wedding Catering",
    tagline: "Creating Magical Moments for Your Special Day",
    packages: [
      {
        name: "Classic Package",
        dishes: 8,
        price: 110,
        items: ["Sambar", "Rasam", "Kootu", "Poriyal", "Papad", "Rice", "Curd Rice", "Payasam"],
      },
      {
        name: "Premium Package",
        dishes: 12,
        price: 175,
        items: [
          "Sambar",
          "Rasam",
          "Kootu",
          "Poriyal",
          "Avial",
          "More Kuzhambu",
          "Papad",
          "Appalam",
          "Rice",
          "Ghee Rice",
          "Curd Rice",
          "Kesari & Payasam",
        ],
      },
      {
        name: "Deluxe Package",
        dishes: 15,
        price: 250,
        items: [
          "Sambar",
          "Rasam",
          "Kootu",
          "Poriyal",
          "Avial",
          "Vendakkai Puli Kuzhambu",
          "More Kuzhambu",
          "Papad",
          "Appalam",
          "Rice",
          "Ghee Rice",
          "Lemon Rice",
          "Curd Rice",
          "Kesari",
          "Badam Payasam",
        ],
      },
    ],
    reviews: [
      {
        name: "Priya & Rajesh",
        rating: 5,
        text: "The traditional Tamil Nadu feast was exceptional! The sambar and rasam were perfectly made, and the payasam was divine. Our 500 guests were thoroughly satisfied.",
        date: "December 2024",
      },
      {
        name: "Meera & Karthik",
        rating: 5,
        text: "Elite Catering made our wedding memorable with authentic Chettinad flavors. The live dosa counter was a huge hit! Professional service throughout.",
        date: "November 2024",
      },
      {
        name: "Lakshmi Sundaram",
        rating: 5,
        text: "Perfect banana leaf experience! Every dish from kootu to more kuzhambu reminded us of homemade food. The filter coffee station was an excellent touch.",
        date: "October 2024",
      },
    ],
    dishes: [
      { name: "Sambar & Rice", image: "/gourmet-food-dish-plated-professionally.jpg", category: "Main Course" },
      { name: "Chettinad Chicken", image: "/elegant-catering-event-food.jpg", category: "Non-Veg Special" },
      { name: "Badam Payasam", image: "/appetizers-catering-display.jpg", category: "Desserts" },
    ],
    specialDishes: ["Live Dosa Counter", "Ghee Pongal", "Filter Coffee Station", "Banana Leaf Service"],
    gallery: ["/elegant-catering-event-food.jpg", "/catering-buffet-display.jpg", "/outdoor-catering-setup.jpg"],
  },
  puberty: {
    title: "Puberty Ceremony Catering",
    tagline: "Traditional South Indian Excellence",
    packages: [
      {
        name: "Traditional Package",
        dishes: 8,
        price: 95,
        items: ["Sambar", "Rasam", "Kootu", "Poriyal", "Papad", "Rice", "Curd", "Sweet Pongal"],
      },
      {
        name: "Premium Package",
        dishes: 10,
        price: 135,
        items: ["Sambar", "Rasam", "Kootu", "Poriyal", "Avial", "Papad", "Rice", "Curd Rice", "Sweet Pongal", "Kesari"],
      },
    ],
    reviews: [
      {
        name: "Lakshmi Iyer",
        rating: 5,
        text: "Authentic traditional Tamil food that reminded us of our grandmother's cooking! The sweet pongal and kesari were perfect for our function.",
        date: "November 2024",
      },
      {
        name: "Venkatesh Family",
        rating: 5,
        text: "Perfect for our ceremony. Everything was fresh and served hot. The vadai with chutney was excellent, and service was very respectful of traditions.",
        date: "October 2024",
      },
      {
        name: "Gayathri Ramesh",
        rating: 5,
        text: "Wonderful experience! They understood our traditional requirements perfectly. The banana leaf presentation and authentic recipes made it special.",
        date: "September 2024",
      },
    ],
    dishes: [
      { name: "Vadai & Chutney", image: "/catering-buffet-display.jpg", category: "Traditional" },
      { name: "Sweet Pongal", image: "/appetizers-catering-display.jpg", category: "Desserts" },
      { name: "Coconut Rice", image: "/gourmet-food-dish-plated-professionally.jpg", category: "Rice Varieties" },
    ],
    specialDishes: ["Sweet Pongal", "Vadai Platter", "Coconut Chutney", "Filter Coffee"],
    gallery: ["/catering-buffet-display.jpg", "/elegant-catering-event-food.jpg", "/appetizers-catering-display.jpg"],
  },
  birthday: {
    title: "Birthday Party Catering",
    tagline: "Fun-Filled Celebrations with Delicious Food",
    packages: [
      {
        name: "Kids Special",
        dishes: 6,
        price: 85,
        items: ["Mini Idli", "Dosa Varieties", "Vadai", "Sambar", "Coconut Chutney", "Kesari"],
      },
      {
        name: "Family Package",
        dishes: 8,
        price: 120,
        items: ["Idli", "Dosa", "Vadai", "Pongal", "Sambar", "3 Chutneys", "Payasam", "Filter Coffee"],
      },
    ],
    reviews: [
      {
        name: "Sneha Reddy",
        rating: 5,
        text: "Kids loved the mini idlis and dosa varieties! The interactive dosa counter was a hit. Great food and entertainment combined.",
        date: "December 2024",
      },
      {
        name: "Arjun Patel",
        rating: 5,
        text: "Made my son's birthday memorable with delicious South Indian snacks. The kesari and payasam were loved by everyone!",
        date: "November 2024",
      },
      {
        name: "Divya Kumar",
        rating: 5,
        text: "Perfect menu for a birthday party! The variety of dosas kept all age groups happy. Fresh and tasty food throughout.",
        date: "October 2024",
      },
    ],
    dishes: [
      { name: "Mini Idli Platter", image: "/appetizers-catering-display.jpg", category: "Kids Special" },
      { name: "Assorted Dosas", image: "/gourmet-food-dish-plated-professionally.jpg", category: "Live Counter" },
      { name: "Kesari", image: "/elegant-catering-event-food.jpg", category: "Desserts" },
    ],
    specialDishes: ["Live Dosa Counter", "Mini Idli Bar", "Pongal Station", "Juice Corner"],
    gallery: [
      "/appetizers-catering-display.jpg",
      "/catering-buffet-with-flowers.jpg",
      "/gourmet-food-dish-plated-professionally.jpg",
    ],
  },
  outdoor: {
    title: "Outdoor Event Catering",
    tagline: "Al Fresco Dining with Tamil Nadu Flavors",
    packages: [
      {
        name: "Garden Party",
        dishes: 8,
        price: 125,
        items: [
          "Paniyaram",
          "Sundal Varieties",
          "Murukku",
          "Samosa",
          "Mini Idli",
          "Tamarind Rice",
          "Lemon Rice",
          "Payasam",
        ],
      },
      {
        name: "Grand Outdoor",
        dishes: 12,
        price: 185,
        items: [
          "Paniyaram",
          "Sundal Varieties",
          "Murukku Platter",
          "Vadai",
          "Sambar Rice",
          "Lemon Rice",
          "Curd Rice",
          "Biryani",
          "Raita",
          "Papad",
          "Fruit Salad",
          "Payasam",
        ],
      },
    ],
    reviews: [
      {
        name: "Rohan Mehta",
        rating: 5,
        text: "Perfect setup for our garden party. The sundal varieties and murukku were fresh and crunchy! Food stayed hot despite outdoor setting.",
        date: "November 2024",
      },
      {
        name: "Ananya Krishnan",
        rating: 5,
        text: "Loved the traditional Tamil snacks served at our outdoor event. The paniyaram and sundal were authentic and delicious!",
        date: "October 2024",
      },
      {
        name: "Suresh Babu",
        rating: 5,
        text: "Excellent outdoor catering experience! The biryani and raita combo was perfect. Professional setup and service throughout.",
        date: "September 2024",
      },
    ],
    dishes: [
      { name: "Sundal Varieties", image: "/outdoor-catering-setup.jpg", category: "Snacks" },
      { name: "Paniyaram", image: "/appetizers-catering-display.jpg", category: "Traditional" },
      { name: "Lemon Rice", image: "/gourmet-food-dish-plated-professionally.jpg", category: "Rice Varieties" },
    ],
    specialDishes: ["Sundal Counter", "Murukku Platter", "Fresh Coconut Water", "Filter Coffee Station"],
    gallery: ["/outdoor-catering-setup.jpg", "/elegant-catering-event-food.jpg", "/catering-buffet-display.jpg"],
  },
  buffet: {
    title: "Buffet Catering Services",
    tagline: "Variety and Quality Combined",
    packages: [
      {
        name: "Standard Buffet",
        dishes: 10,
        price: 140,
        items: [
          "Sambar",
          "Rasam",
          "Kootu",
          "Poriyal",
          "Papad",
          "White Rice",
          "Variety Rice",
          "Curd",
          "Pickle",
          "Payasam",
        ],
      },
      {
        name: "Grand Buffet",
        dishes: 15,
        price: 220,
        items: [
          "Sambar",
          "Rasam",
          "Kootu",
          "Poriyal",
          "Avial",
          "Kuzhambu",
          "Papad",
          "Appalam",
          "White Rice",
          "Ghee Rice",
          "Lemon Rice",
          "Curd Rice",
          "Pickle",
          "Kesari",
          "Payasam",
        ],
      },
    ],
    reviews: [
      {
        name: "Corporate Client - TCS",
        rating: 5,
        text: "Excellent buffet setup for our 200-person annual event. The variety of rice dishes and authentic Tamil sambar were appreciated by all!",
        date: "December 2024",
      },
      {
        name: "Ramesh Industries",
        rating: 5,
        text: "Very professional buffet catering. The kootu and poriyal were fresh, and the payasam was the perfect sweet ending. Highly recommended!",
        date: "November 2024",
      },
      {
        name: "Saravana Hotels",
        rating: 5,
        text: "Perfect for large gatherings! The variety rice options and traditional curries maintained authentic Tamil flavors throughout the service.",
        date: "October 2024",
      },
    ],
    dishes: [
      { name: "Variety Rice Platter", image: "/catering-buffet-display.jpg", category: "Main Course" },
      { name: "Traditional Sambar", image: "/elegant-catering-event-food.jpg", category: "Curries" },
      { name: "Assorted Papads", image: "/appetizers-catering-display.jpg", category: "Sides" },
    ],
    specialDishes: ["Variety Rice Station", "Live Pongal Counter", "Pickle Bar", "Dessert Counter"],
    gallery: ["/catering-buffet-display.jpg", "/catering-buffet-with-flowers.jpg", "/elegant-catering-event-food.jpg"],
  },
  others: {
    title: "Custom Event Catering",
    tagline: "Tailored to Your Unique Needs",
    packages: [
      {
        name: "Customized Menu",
        dishes: "Flexible",
        price: "Starting from ₹100",
        items: [
          "Menu designed based on your preferences",
          "Mix of traditional and modern",
          "Dietary requirements accommodated",
        ],
      },
    ],
    reviews: [
      {
        name: "Divya Nair",
        rating: 5,
        text: "They customized a perfect Tamil-Continental fusion menu for our anniversary! The team was very accommodating to all our requests.",
        date: "December 2024",
      },
      {
        name: "Arun & Preethi",
        rating: 5,
        text: "Excellent customization for our corporate event. They incorporated Jain food requirements seamlessly with traditional Tamil dishes.",
        date: "November 2024",
      },
      {
        name: "Kavitha Enterprises",
        rating: 5,
        text: "Professional team that understood our unique requirements perfectly. The customized menu was a hit at our product launch event!",
        date: "October 2024",
      },
    ],
    dishes: [
      { name: "Custom Thali", image: "/gourmet-food-dish-plated-professionally.jpg", category: "Custom" },
      { name: "Fusion Dishes", image: "/elegant-catering-event-food.jpg", category: "Tailored" },
      { name: "Gourmet Selection", image: "/appetizers-catering-display.jpg", category: "Premium" },
    ],
    specialDishes: ["Personalized Menu", "Theme-Based Setup", "Specialty Cuisines", "Custom Desserts"],
    gallery: [
      "/gourmet-food-dish-plated-professionally.jpg",
      "/elegant-catering-event-food.jpg",
      "/catering-buffet-display.jpg",
    ],
  },
}

export default function EventDetailPage() {
  const params = useParams()
  const eventId = params.id
  const event = eventDetails[eventId]

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4"
        style={{
          backgroundImage: `url(${event.gallery[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <Link href="/events" className="inline-flex items-center text-white hover:text-[#D4AF37] mb-6 transition">
            <ArrowLeft className="mr-2" size={20} />
            Back to Events
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{event.title}</h1>
          <p className="text-xl md:text-2xl">{event.tagline}</p>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">Our Packages</h2>
        <p className="text-center text-gray-600 mb-12 text-lg">Choose the perfect package for your event</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {event.packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border-2 border-gray-100 hover:border-[#0B3D2E] transition-all hover:shadow-xl"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#0B3D2E] mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-[#D4AF37]">
                    ₹{typeof pkg.price === "number" ? pkg.price : pkg.price}
                  </span>
                  {typeof pkg.price === "number" && <span className="text-gray-600">/person</span>}
                </div>
                <p className="text-gray-500 mt-2">
                  {typeof pkg.dishes === "number" ? `${pkg.dishes} Dishes` : pkg.dishes}
                </p>
              </div>
              <div className="space-y-3">
                {pkg.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check className="text-[#0B3D2E] flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <a
                href="#contact"
                className="mt-8 w-full block text-center bg-[#0B3D2E] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#165140] transition-colors"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Reviews Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Recent Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {event.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-[#D4AF37] fill-current" size={18} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Dishes Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Popular Dishes for {event.title.replace(" Catering", "")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {event.specialDishes.map((dish, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-[#0B3D2E] hover:border-4 transition-all"
            >
              <p className="text-gray-900 font-medium text-lg">{dish}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-start">
          <a
            href="#contact"
            className="bg-[#0B3D2E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#165140] transition-colors inline-block"
          >
            Contact us for this event
          </a>
        </div>
      </section>

      {/* Signature Dishes Gallery */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white/80 rounded-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-8 text-center">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {event.dishes.map((dish, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg">
              <img
                src={dish.image || "/placeholder.svg"}
                alt={dish.name}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-sm text-[#D4AF37] mb-1">{dish.category}</p>
                <h3 className="text-2xl font-bold">{dish.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Previous Events Gallery */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-8 text-center">Previous Events Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {event.gallery.map((image, index) => (
            <div key={index} className="relative h-80 rounded-xl overflow-hidden shadow-xl group">
              <img
                src={image || "/placeholder.svg"}
                alt={`Event ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-8 text-center">Book This Event</h2>
        <ContactForm eventType={event.title} />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
