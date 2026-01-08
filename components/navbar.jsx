"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar({ scrollToHome, scrollToAbout, scrollToServices }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (callback) => {
    if (callback) callback()
    setIsOpen(false)
  }

  return (
    <nav className="sticky top-0 z-50 bg-[#0B3D2E] text-white px-4 md:px-6 py-4 flex items-center justify-between shadow-lg">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <div className="w-8 md:w-10 h-8 md:h-10 bg-[#D4AF37] rounded-full flex items-center justify-center">
          <span className="text-[#0B3D2E] font-bold text-sm md:text-base">E</span>
        </div>
        <span className="text-lg md:text-xl font-bold">Elite Catering</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {scrollToHome ? (
          <button onClick={scrollToHome} className="hover:text-[#D4AF37] transition">
            Home
          </button>
        ) : (
          <Link href="/" className="hover:text-[#D4AF37] transition">
            Home
          </Link>
        )}
        <Link href="/events" className="hover:text-[#D4AF37] transition">
          Events
        </Link>
        {scrollToAbout && (
          <button onClick={scrollToAbout} className="hover:text-[#D4AF37] transition">
            About Us
          </button>
        )}
        {scrollToServices && (
          <button onClick={scrollToServices} className="hover:text-[#D4AF37] transition">
            Our Services
          </button>
        )}
        <Link href="/daily-menu" className="hover:text-[#D4AF37] transition">
          Daily Menu
        </Link>
        <Link href="/admin" className="hover:text-[#D4AF37] transition">
          Admin
        </Link>
        <Link
          href="/contact-us"
          className="bg-[#D4AF37] text-[#0B3D2E] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Contact Us
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#0B3D2E] md:hidden flex flex-col items-center gap-4 py-6 border-t border-[#D4AF37]">
          {scrollToHome ? (
            <button onClick={() => handleNavClick(scrollToHome)} className="hover:text-[#D4AF37] transition">
              Home
            </button>
          ) : (
            <Link href="/" className="hover:text-[#D4AF37] transition" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          )}
          <Link href="/events" className="hover:text-[#D4AF37] transition" onClick={() => setIsOpen(false)}>
            Events
          </Link>
          {scrollToAbout && (
            <button onClick={() => handleNavClick(scrollToAbout)} className="hover:text-[#D4AF37] transition">
              About Us
            </button>
          )}
          {scrollToServices && (
            <button onClick={() => handleNavClick(scrollToServices)} className="hover:text-[#D4AF37] transition">
              Our Services
            </button>
          )}
          <Link href="/daily-menu" className="hover:text-[#D4AF37] transition" onClick={() => setIsOpen(false)}>
            Daily Menu
          </Link>
          <Link href="/admin" className="hover:text-[#D4AF37] transition" onClick={() => setIsOpen(false)}>
            Admin
          </Link>
          <Link
            href="/contact-us"
            className="bg-[#D4AF37] text-[#0B3D2E] px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition w-40"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  )
}
