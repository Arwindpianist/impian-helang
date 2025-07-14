"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="bg-white/90 glass shadow-sm border-b border-blue-200 sticky top-0 z-50 backdrop-blur-lg">
      <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base sm:text-lg">IH</span>
            </div>
            <div className="min-w-0">
                          <h1 className="text-base sm:text-xl font-bold text-blue-900 truncate max-w-[120px] sm:max-w-xs" style={{ fontFamily: "Footlight MT Light, serif" }}>
              Impian Helang Sdn Bhd
            </h1>
            <p className="text-xs sm:text-sm text-blue-700 truncate">HRD Corp Certified Training Provider</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-blue-800 hover:text-blue-900 transition-colors">
              Home
            </Link>
            <Link href="/courses" className="text-blue-800 hover:text-blue-900 transition-colors">
              Courses
            </Link>
            <Link href="/trainer" className="text-blue-800 hover:text-blue-900 transition-colors">
              Trainer
            </Link>
            <Link href="/contact" className="text-blue-800 hover:text-blue-900 transition-colors">
              Contact
            </Link>
            <Link href="/faq" className="text-blue-800 hover:text-blue-900 transition-colors">
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Register Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-blue-800" />
            ) : (
              <Menu className="h-6 w-6 text-blue-800" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-blue-300 glass shadow-2xl rounded-xl bg-white/90 backdrop-blur-sm">
            <nav className="flex flex-col space-y-6 pt-6 px-4">
              <Link 
                href="/" 
                className="text-blue-800 hover:text-blue-900 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/courses" 
                className="text-blue-800 hover:text-blue-900 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </Link>
              <Link 
                href="/trainer" 
                className="text-blue-800 hover:text-blue-900 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trainer
              </Link>
              <Link 
                href="/contact" 
                className="text-blue-800 hover:text-blue-900 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link 
                href="/faq" 
                className="text-blue-800 hover:text-blue-900 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full py-3 mt-2">
                Register Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 