"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [activeTab, setActiveTab] = useState("add")
  const [formData, setFormData] = useState({
    dishName: "",
    description: "",
    day: "Monday",
    category: "Rice",
    price: "",
  })
  const router = useRouter()

  const ADMIN_PASSWORD = "elite@123"

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setPasswordError("")
      setPassword("")
    } else {
      setPasswordError("Invalid password. Access denied.")
    }
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleAddDish = (e) => {
    e.preventDefault()
    console.log("Adding dish:", formData)
    alert(`Dish "${formData.dishName}" added successfully!`)
    setFormData({
      dishName: "",
      description: "",
      day: "Monday",
      category: "Rice",
      price: "",
    })
  }

  const handleModifyDish = (e) => {
    e.preventDefault()
    console.log("Modifying dish:", formData)
    alert(`Dish "${formData.dishName}" modified successfully!`)
  }

  const handleRemoveDish = (e) => {
    e.preventDefault()
    console.log("Removing dish:", formData)
    alert(`Dish "${formData.dishName}" removed successfully!`)
    setFormData({
      dishName: "",
      description: "",
      day: "Monday",
      category: "Rice",
      price: "",
    })
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B3D2E] via-white to-[#0B3D2E] flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-2">Admin Login</h1>
              <p className="text-gray-600">Elite Catering Management Panel</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Admin Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter admin password"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                />
                {passwordError && <p className="text-red-500 text-sm mt-2">{passwordError}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#0B3D2E] text-[#D4AF37] py-3 rounded-lg font-bold hover:bg-[#0B3D2E]/90 transition"
              >
                Login
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">(Demo Password: elite@123)</p>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B3D2E] via-white to-[#0B3D2E]">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Manage dishes across all categories and days</p>
          </div>
          <button
            onClick={() => {
              setIsAuthenticated(false)
              setPassword("")
            }}
            className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-600 transition"
          >
            Logout
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 flex-wrap">
          {[
            { id: "add", label: "Add Dish" },
            { id: "modify", label: "Modify Dish" },
            { id: "remove", label: "Remove Dish" },
            { id: "view", label: "View All" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition ${
                activeTab === tab.id
                  ? "bg-[#0B3D2E] text-[#D4AF37]"
                  : "bg-white text-[#0B3D2E] border-2 border-[#0B3D2E] hover:bg-[#0B3D2E] hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab !== "view" && (
            <form
              onSubmit={
                activeTab === "add" ? handleAddDish : activeTab === "modify" ? handleModifyDish : handleRemoveDish
              }
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Dish Name</label>
                  <input
                    type="text"
                    name="dishName"
                    value={formData.dishName}
                    onChange={handleFormChange}
                    placeholder="Enter dish name"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Category</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                  >
                    <option>Rice</option>
                    <option>Dosa</option>
                    <option>Idly</option>
                    <option>Puri</option>
                    <option>Curry</option>
                    <option>Chutney</option>
                    <option>Dessert</option>
                    <option>Beverage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Day</label>
                  <select
                    name="day"
                    value={formData.day}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                  >
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                      <option key={day}>{day}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Price (₹)</label>
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                    placeholder="Enter price"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  placeholder="Enter dish description"
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                />
              </div>

              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-bold text-white transition ${
                  activeTab === "add"
                    ? "bg-green-500 hover:bg-green-600"
                    : activeTab === "modify"
                      ? "bg-blue-500 hover:bg-blue-600"
                      : "bg-red-500 hover:bg-red-600"
                }`}
              >
                {activeTab === "add" ? "Add Dish" : activeTab === "modify" ? "Modify Dish" : "Remove Dish"}
              </button>
            </form>
          )}

          {activeTab === "view" && (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-[#0B3D2E] mb-4">All Dishes Database</h2>
              <p className="text-gray-600 mb-6">View and manage all dishes from the database</p>
              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-700">Database connection feature coming soon</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}
