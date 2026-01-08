"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"

const dailyMenuData = {
  Monday: {
    special: "Sambar Rice & Idly Special",
    headerImage: "/sambar-rice-tamil-nadu.jpg",
    categories: {
      Breakfast: [
        {
          name: "Sambar Rice",
          description: "Aromatic vegetables in traditional sambar with tempered spices",
        },
        {
          name: "Masala Idly",
          description: "Soft idly coated with spiced potato and fried onions",
        },
        {
          name: "Coconut Chutney",
          description: "Fresh ground coconut with roasted spices",
        },
      ],
      "Main Courses": [
        {
          name: "Rasam",
          description: "Tangy tomato-based broth with herbs and spices",
        },
        { name: "Dal Rice", description: "Rice with lentil curry and vegetables" },
        {
          name: "Vegetable Poriyal",
          description: "Stir-fried mixed vegetables with coconut",
        },
      ],
      Desserts: [
        {
          name: "Payasam",
          description: "Traditional rice pudding with jaggery and ghee",
        },
        { name: "Jaggery Pongal", description: "Rice and lentil sweet dish" },
        {
          name: "Andhra Gundpongal",
          description: "Roasted rice with mung dal and spices",
        },
      ],
    },
  },
  Tuesday: {
    special: "Dosa Festival",
    headerImage: "/masala-idly.jpg",
    categories: {
      Breakfast: [
        {
          name: "Masala Dosa",
          description: "Crispy rice crepe with spiced potato filling",
        },
        {
          name: "Ghee Roast Dosa",
          description: "Dosa prepared with generous ghee for rich flavor",
        },
        {
          name: "Mint Chutney",
          description: "Fresh mint leaves ground with green chilies",
        },
      ],
      "Main Courses": [
        {
          name: "Sambhar with Vegetables",
          description: "Mixed vegetable sambar with authentic spices",
        },
        {
          name: "Chow Chow Bath",
          description: "Rice noodles with vegetables in butter",
        },
        {
          name: "Butter Dosa Gravy",
          description: "Rich gravy served with butter dosa",
        },
      ],
      Desserts: [
        {
          name: "Gulab Jamun",
          description: "Sweet milk solids in sugar syrup",
        },
        {
          name: "Kheer",
          description: "Rice pudding with condensed milk",
        },
        {
          name: "Mysore Pak",
          description: "Traditional gram flour sweet",
        },
      ],
    },
  },
  Wednesday: {
    special: "Uttapam & Appam Day",
    headerImage: "/coconut-chutney.jpg",
    categories: {
      Breakfast: [
        {
          name: "Onion Uttapam",
          description: "Thick rice pancake topped with onions and peppers",
        },
        {
          name: "Tomato Uttapam",
          description: "Uttapam with fresh tomato and coriander toppings",
        },
        {
          name: "Appam with Vegetable Stew",
          description: "Soft rice cake served with coconut vegetable stew",
        },
      ],
      "Main Courses": [
        {
          name: "Peanut Chutney",
          description: "Roasted peanuts ground with dry spices",
        },
        {
          name: "Vegetable Curry",
          description: "Seasonal vegetables in coconut gravy",
        },
        {
          name: "Idiyappam",
          description: "String hoppers with potato curry",
        },
      ],
      Desserts: [
        {
          name: "Puttu",
          description: "Steamed cylinder cake with jaggery",
        },
        {
          name: "Mango Pudding",
          description: "Fresh mango dessert with cream",
        },
        {
          name: "Coconut Halwa",
          description: "Fresh coconut with ghee and jaggery",
        },
      ],
    },
  },
  Thursday: {
    special: "Puri & Curry Day",
    headerImage: "/rasam-soup-tamil.jpg",
    categories: {
      Breakfast: [
        {
          name: "Potato Puri",
          description: "Fried bread with spiced potato curry",
        },
        {
          name: "Chole Puri",
          description: "Fried bread with chickpea curry",
        },
        {
          name: "Mixed Vegetable Curry",
          description: "Seasonal vegetables in coconut and spices",
        },
      ],
      "Main Courses": [
        {
          name: "Ginger Chutney",
          description: "Fresh ginger with coconut and green chilies",
        },
        {
          name: "Avial",
          description: "Mixed vegetables in coconut paste",
        },
        {
          name: "Lentil Curry",
          description: "Red lentils in spiced coconut gravy",
        },
      ],
      Desserts: [
        {
          name: "Jalebi",
          description: "Spiral sweet soaked in sugar syrup",
        },
        { name: "Imarti", description: "Lacy sweet in sugar syrup" },
        {
          name: "Rava Kesari",
          description: "Semolina pudding with ghee",
        },
      ],
    },
  },
  Friday: {
    special: "Biryani & Rice Specialties",
    headerImage: "/dal-rice-lunch.jpg",
    categories: {
      Breakfast: [
        {
          name: "Vegetable Biryani",
          description: "Basmati rice with fragrant spices and vegetables",
        },
        {
          name: "Tamarind Rice",
          description: "Tangy rice with peanuts and curry leaves",
        },
        {
          name: "Lemon Rice",
          description: "Flavored rice with fresh lemon and turmeric",
        },
      ],
      "Main Courses": [
        {
          name: "Lime Pickle & Mango Pickle",
          description: "Homemade tangy pickles",
        },
        {
          name: "Coconut Rice",
          description: "Rice with fresh grated coconut",
        },
        {
          name: "Mint Rice",
          description: "Rice flavored with fresh mint leaves",
        },
      ],
      Desserts: [
        {
          name: "Semolina Halwa",
          description: "Roasted semolina with ghee and nuts",
        },
        {
          name: "Carrot Halwa",
          description: "Grated carrot with milk and ghee",
        },
        { name: "Barfi", description: "Milk solid fudge with nuts" },
      ],
    },
  },
  Saturday: {
    special: "Dinner Special - Traditional Tamil Nadu Feast",
    headerImage: "/poriyal-stir-fry.jpg",
    categories: {
      Dinner: [
        {
          name: "Dosa with Sambar",
          description: "Crispy dosa served with vegetable sambar",
        },
        {
          name: "Curd Rice",
          description: "Steamed rice mixed with cooling yogurt and flavored spices",
        },
        {
          name: "Rasam",
          description: "Tangy tomato and tamarind-based South Indian soup",
        },
      ],
      "Side Dishes": [
        {
          name: "Vegetable Kootu",
          description: "Mixed vegetables cooked with lentils and coconut",
        },
        {
          name: "Vegetable Poriyal",
          description: "Dry stir-fried vegetables with grated coconut",
        },
        {
          name: "Papad & Appalam",
          description: "Crispy wafers with traditional tempering",
        },
      ],
      Desserts: [
        {
          name: "Mango Payasam",
          description: "Rice pudding with fresh mango and ghee",
        },
        {
          name: "Jaggery Pongal",
          description: "Sweet rice with jaggery and cashews",
        },
        {
          name: "Gulab Jamun",
          description: "Soft milk balls in sugar syrup",
        },
      ],
    },
  },
  Sunday: {
    special: "Premium Sunday Feast",
    headerImage: "/payasam-dessert-south-india.jpg",
    categories: {
      Breakfast: [
        {
          name: "Pesarattu",
          description: "Green moong dal crepe with ginger and green chilies",
        },
        {
          name: "Upma",
          description: "Semolina porridge with vegetables",
        },
        {
          name: "Gongura Pachadi",
          description: "Tangy leafy greens with spices",
        },
      ],
      "Main Courses": [
        {
          name: "Paneer Do Pyaza",
          description: "Cottage cheese with double onions",
        },
        {
          name: "Baingan Bharta",
          description: "Roasted eggplant with tomatoes and spices",
        },
        {
          name: "Methi Dal",
          description: "Fenugreek leaves with lentils",
        },
      ],
      Desserts: [
        {
          name: "Payasam",
          description: "Traditional rice pudding with jaggery and ghee",
        },
        {
          name: "Laddu",
          description: "Round balls of gram flour and ghee",
        },
        {
          name: "Rasgulla",
          description: "Cheese balls in sugar syrup",
        },
      ],
    },
  },
}

export default function DailyMenu() {
  const [selectedDay, setSelectedDay] = useState("Monday")
  const [expandedCategory, setExpandedCategory] = useState(null)
  const [orderMode, setOrderMode] = useState(false)
  const [selectedItems, setSelectedItems] = useState({})

  const days = Object.keys(dailyMenuData)
  const currentMenu = dailyMenuData[selectedDay]
  const categories = Object.keys(currentMenu.categories)

  const toggleItem = (itemName) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemName]: (prev[itemName] || 0) + 1,
    }))
  }

  const decrementItem = (itemName) => {
    setSelectedItems((prev) => {
      if (prev[itemName] > 1) {
        return { ...prev, [itemName]: prev[itemName] - 1 }
      } else {
        const newItems = { ...prev }
        delete newItems[itemName]
        return newItems
      }
    })
  }

  const handlePlaceOrder = () => {
    const orderSummary = Object.entries(selectedItems)
      .map(([item, qty]) => `${item} x${qty}`)
      .join(", ")
    alert(`Order placed: ${orderSummary}. Proceed to checkout for ${selectedDay}'s menu.`)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header with background image */}
      <div
        className="relative py-20 px-4 bg-cover bg-center"
        style={{
          backgroundImage: `url(${currentMenu.headerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2">Daily Menu</h1>
          <p className="text-[#D4AF37] text-lg md:text-xl">Authentic Tamil Nadu cuisine fresh every day</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        {/* Day Selector */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-12">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => {
                setSelectedDay(day)
                setExpandedCategory(null)
                setOrderMode(false)
                setSelectedItems({})
              }}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition duration-300 ${
                selectedDay === day
                  ? "bg-[#0B3D2E] text-[#D4AF37] shadow-lg"
                  : "bg-gray-100 text-[#0B3D2E] hover:bg-gray-200"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Special Highlight */}
        <div className="bg-gradient-to-r from-[#0B3D2E] to-[#0B3D2E]/80 rounded-2xl p-8 md:p-10 mb-12 text-center">
          <p className="text-[#D4AF37] font-semibold text-sm md:text-base mb-2">✨ Today's Special</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">{currentMenu.special}</h2>

          <button
            onClick={() => setOrderMode(!orderMode)}
            className={`px-6 md:px-8 py-3 rounded-lg font-bold text-lg transition-all ${
              orderMode ? "bg-red-600 text-white hover:bg-red-700" : "bg-[#D4AF37] text-[#0B3D2E] hover:bg-yellow-400"
            }`}
          >
            {orderMode ? "Cancel Ordering" : "Place Your Order"}
          </button>
        </div>

        {/* Category Cards Grid - 3 cards only */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, idx) => (
            <div
              key={idx}
              onClick={() => !orderMode && setExpandedCategory(expandedCategory === idx ? null : idx)}
              className="group cursor-pointer"
            >
              {/* Card Container */}
              <div
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 min-h-96 flex flex-col ${
                  expandedCategory === idx ? "bg-[#0B3D2E]" : "bg-white hover:bg-gray-50"
                }`}
              >
                {/* Header */}
                <div
                  className={`px-6 md:px-8 py-6 md:py-8 ${
                    expandedCategory === idx ? "bg-[#0B3D2E]" : "bg-gradient-to-r from-[#0B3D2E]/10 to-[#D4AF37]/10"
                  }`}
                >
                  <h3
                    className={`text-2xl md:text-3xl font-bold ${expandedCategory === idx ? "text-[#D4AF37]" : "text-[#0B3D2E]"}`}
                  >
                    {category}
                  </h3>
                  <p className={`text-sm mt-2 ${expandedCategory === idx ? "text-gray-200" : "text-gray-600"}`}>
                    {currentMenu.categories[category].length} items
                  </p>
                </div>

                {/* Dishes List */}
                <div
                  className={`flex-1 px-6 md:px-8 py-4 md:py-6 space-y-3 ${expandedCategory === idx ? "block" : "hidden md:block"}`}
                >
                  {currentMenu.categories[category].map((dish, dishIdx) => (
                    <div
                      key={dishIdx}
                      className={`p-3 md:p-4 rounded-lg transition duration-300 ${
                        expandedCategory === idx
                          ? "bg-[#0B3D2E]/50 hover:bg-[#0B3D2E]/70"
                          : orderMode
                            ? "hover:bg-gray-100"
                            : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex gap-4 items-start justify-between">
                        {/* Dish Info */}
                        <div className="flex-1">
                          <h4
                            className={`font-bold text-base md:text-lg ${expandedCategory === idx ? "text-white" : "text-[#0B3D2E]"}`}
                          >
                            {dish.name}
                          </h4>
                          <p
                            className={`text-xs md:text-sm mt-1 ${expandedCategory === idx ? "text-gray-300" : "text-gray-600"}`}
                          >
                            {dish.description}
                          </p>
                        </div>

                        {orderMode && (
                          <div className="flex items-center gap-2 ml-2">
                            {selectedItems[dish.name] ? (
                              <div className="flex items-center gap-1 bg-[#0B3D2E] text-white rounded-lg px-2 py-1">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    decrementItem(dish.name)
                                  }}
                                  className="text-sm font-bold hover:opacity-70"
                                >
                                  −
                                </button>
                                <span className="w-6 text-center text-sm">{selectedItems[dish.name]}</span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation()
                                    toggleItem(dish.name)
                                  }}
                                  className="text-sm font-bold hover:opacity-70"
                                >
                                  +
                                </button>
                              </div>
                            ) : (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation()
                                  toggleItem(dish.name)
                                }}
                                className="bg-[#0B3D2E] text-white px-3 py-1 rounded-lg text-sm font-semibold hover:bg-[#165140] transition"
                              >
                                Add
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Collapse indicator only shows when expanded */}
                {expandedCategory === idx && (
                  <div className="px-6 md:px-8 py-3 text-center">
                    <button className="text-sm md:text-base font-semibold text-[#D4AF37] transition">Collapse ▲</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        {orderMode && Object.keys(selectedItems).length > 0 && (
          <div className="mt-12 bg-gradient-to-r from-[#0B3D2E]/10 to-[#D4AF37]/10 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-[#0B3D2E] mb-6">Order Summary for {selectedDay}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {Object.entries(selectedItems).map(([item, qty]) => (
                <div key={item} className="flex justify-between items-center bg-white p-4 rounded-lg shadow">
                  <span className="font-semibold text-gray-700">{item}</span>
                  <span className="text-[#0B3D2E] font-bold">Qty: {qty}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contact-us"
              className="inline-block bg-[#0B3D2E] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#165140] transition-all shadow-lg hover:shadow-xl"
            >
              Proceed to Checkout
            </Link>
          </div>
        )}

        {/* Call to Action - only show when not in order mode */}
        {!orderMode && (
          <div className="text-center mt-16">
            <p className="text-gray-600 text-lg mb-6">Want to order from our daily menu?</p>
            <button
              onClick={() => setOrderMode(true)}
              className="inline-block bg-[#0B3D2E] text-white px-8 md:px-12 py-4 rounded-xl font-bold text-lg hover:bg-[#165140] transition-all shadow-lg hover:shadow-xl"
            >
              Place Your Order Now
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
