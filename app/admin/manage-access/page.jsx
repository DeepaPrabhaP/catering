"use client"

import { useState } from "react"
import { Trash2, Edit2, Plus, Eye, EyeOff } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function ManageAccessPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [adminUsers, setAdminUsers] = useState([
    {
      id: 1,
      email: "admin@elitecatering.com",
      role: "Super Admin",
      status: "Active",
      createdDate: "2024-01-15",
      lastLogin: "2024-01-08",
    },
    {
      id: 2,
      email: "manager@elitecatering.com",
      role: "Menu Manager",
      status: "Active",
      createdDate: "2024-02-01",
      lastLogin: "2024-01-06",
    },
  ])
  const [showAddForm, setShowAddForm] = useState(false)
  const [newAdmin, setNewAdmin] = useState({
    email: "",
    role: "Menu Manager",
    password: "",
  })
  const [editingId, setEditingId] = useState(null)
  const [editData, setEditData] = useState(null)
  const [showPassword, setShowPassword] = useState(false)

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

  const handleAddAdmin = (e) => {
    e.preventDefault()
    if (!newAdmin.email || !newAdmin.password) {
      alert("Please fill all fields")
      return
    }

    const newAdminUser = {
      id: adminUsers.length + 1,
      email: newAdmin.email,
      role: newAdmin.role,
      status: "Active",
      createdDate: new Date().toISOString().split("T")[0],
      lastLogin: "-",
    }

    setAdminUsers([...adminUsers, newAdminUser])
    setNewAdmin({ email: "", role: "Menu Manager", password: "" })
    setShowAddForm(false)
    alert(`Admin user "${newAdmin.email}" added successfully!`)
  }

  const handleDeleteAdmin = (id) => {
    if (confirm("Are you sure you want to delete this admin user?")) {
      setAdminUsers(adminUsers.filter((admin) => admin.id !== id))
      alert("Admin user deleted successfully!")
    }
  }

  const handleEditAdmin = (admin) => {
    setEditingId(admin.id)
    setEditData({ ...admin })
  }

  const handleSaveEdit = (id) => {
    setAdminUsers(adminUsers.map((admin) => (admin.id === id ? editData : admin)))
    setEditingId(null)
    setEditData(null)
    alert("Admin user updated successfully!")
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0B3D2E] via-white to-[#0B3D2E] flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-2">Manage Access</h1>
              <p className="text-gray-600">Admin Access Control Panel</p>
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
                Access Control Panel
              </button>
            </form>
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
            <h1 className="text-3xl md:text-4xl font-bold text-[#0B3D2E] mb-2">Manage Admin Access</h1>
            <p className="text-gray-600">Control admin users and their permissions</p>
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

        {/* Add Admin Button */}
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="mb-8 bg-[#0B3D2E] text-[#D4AF37] px-6 py-3 rounded-lg font-semibold hover:bg-[#0B3D2E]/90 transition flex items-center gap-2"
        >
          <Plus size={20} />
          Add New Admin User
        </button>

        {/* Add Admin Form */}
        {showAddForm && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#0B3D2E] mb-6">Add New Admin User</h2>
            <form onSubmit={handleAddAdmin} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    value={newAdmin.email}
                    onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
                    placeholder="Enter email"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Role</label>
                  <select
                    value={newAdmin.role}
                    onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                  >
                    <option>Super Admin</option>
                    <option>Menu Manager</option>
                    <option>Order Manager</option>
                    <option>View Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={newAdmin.password}
                      onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
                      placeholder="Enter password"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0B3D2E]"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-600"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Add Admin User
                </button>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Admin Users Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#0B3D2E] text-[#D4AF37]">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Email</th>
                  <th className="px-6 py-4 text-left font-semibold">Role</th>
                  <th className="px-6 py-4 text-left font-semibold">Status</th>
                  <th className="px-6 py-4 text-left font-semibold">Created Date</th>
                  <th className="px-6 py-4 text-left font-semibold">Last Login</th>
                  <th className="px-6 py-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {adminUsers.map((admin) => (
                  <tr key={admin.id} className="border-b hover:bg-gray-50">
                    {editingId === admin.id ? (
                      <>
                        <td className="px-6 py-4">
                          <input
                            type="email"
                            value={editData.email}
                            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                            className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-[#0B3D2E]"
                          />
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={editData.role}
                            onChange={(e) => setEditData({ ...editData, role: e.target.value })}
                            className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-[#0B3D2E]"
                          >
                            <option>Super Admin</option>
                            <option>Menu Manager</option>
                            <option>Order Manager</option>
                            <option>View Only</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={editData.status}
                            onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                            className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-[#0B3D2E]"
                          >
                            <option>Active</option>
                            <option>Inactive</option>
                            <option>Suspended</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">{editData.createdDate}</td>
                        <td className="px-6 py-4">{editData.lastLogin}</td>
                        <td className="px-6 py-4 text-center">
                          <button
                            onClick={() => handleSaveEdit(admin.id)}
                            className="bg-green-500 text-white px-3 py-1 rounded mr-2 hover:bg-green-600"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                          >
                            Cancel
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td className="px-6 py-4 font-medium text-gray-900">{admin.email}</td>
                        <td className="px-6 py-4 text-gray-700">{admin.role}</td>
                        <td className="px-6 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              admin.status === "Active"
                                ? "bg-green-100 text-green-800"
                                : admin.status === "Inactive"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                            }`}
                          >
                            {admin.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-700">{admin.createdDate}</td>
                        <td className="px-6 py-4 text-gray-700">{admin.lastLogin}</td>
                        <td className="px-6 py-4 text-center flex justify-center gap-3">
                          <button
                            onClick={() => handleEditAdmin(admin)}
                            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                            title="Edit"
                          >
                            <Edit2 size={18} />
                          </button>
                          <button
                            onClick={() => handleDeleteAdmin(admin.id)}
                            className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
