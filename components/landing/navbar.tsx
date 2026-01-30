"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Opportunity", href: "#products" },
  { label: "Traction", href: "#traction" },
  { label: "Leadership", href: "#team" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [logoLoaded, setLogoLoaded] = useState(false)
  const fundingProgress = 78

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    // Trigger logo fade-in after mount
    setTimeout(() => setLogoLoaded(true), 100)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-[#0B0B0B]/95 backdrop-blur-md border-b border-[#222]" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-22 py-4 sm:py-5">
          {/* Logo - fades in smoothly */}
          <button 
            onClick={() => scrollToSection("#hero")}
            className={`flex-shrink-0 hover:opacity-80 transition-all duration-700 cursor-pointer ${logoLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
          >
            <Image
              src="/images/316-logo.png"
              alt="3:16 Collection"
              width={120}
              height={44}
              className="h-9 sm:h-11 w-auto"
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-[#888] hover:text-[#F5F5F3] transition-colors text-sm tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Progress & CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <button 
              onClick={() => scrollToSection("#hero")}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer"
            >
              <span className="text-sm text-[#888]">{fundingProgress}% Funded</span>
              <div className="w-24 h-2 bg-[#222] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#F5F5F3] rounded-full"
                  style={{ width: `${fundingProgress}%` }}
                />
              </div>
            </button>

            <Button 
              onClick={() => scrollToSection("#hero")}
              className="bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] px-6 py-2.5 text-sm font-medium tracking-wide rounded-sm animate-soft-pulse"
            >
              Join the Round
            </Button>
          </div>

          {/* Mobile: Menu only */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F5F5F3] p-2 hover:bg-[#111] rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0B0B] border-t border-[#222]">
          <div className="px-4 py-6 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-[#F5F5F3] py-2.5 text-base tracking-wide border-b border-[#222] hover:text-[#888] transition-colors"
              >
                {link.label}
              </button>
            ))}
            
            <a
              href="https://www.316collection.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left text-[#888] py-2.5 text-base tracking-wide border-b border-[#222] hover:text-[#F5F5F3] transition-colors"
            >
              Shop Products
            </a>
            
            <div className="pt-3">
              <Button 
                onClick={() => scrollToSection("#hero")}
                className="w-full bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] py-4 font-medium tracking-wide rounded-sm animate-soft-pulse"
              >
                Join the Round
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
