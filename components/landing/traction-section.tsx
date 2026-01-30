"use client"

import React from "react"

import { useState } from "react"
import { AnimatedSection } from "@/hooks/use-scroll-animation"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

const primaryMetrics = [
  { value: "$12M+", label: "LIFETIME REV" },
  { value: "100K+", label: "CUSTOMERS" },
  { value: "80%", label: "MARGIN" },
]

const secondaryMetrics = [
  { value: "112K", label: "SUBSCRIBERS" },
  { value: "46+", label: "COUNTRIES" },
  { value: "14:1", label: "LTV:CAC" },
]

export function TractionSection() {
  const [showDeckCapture, setShowDeckCapture] = useState(false)
  const [email, setEmail] = useState("")

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      window.open("https://docsend.com/view/316collection-deck", "_blank")
      setShowDeckCapture(false)
    }
  }

  return (
    <>
      <section id="traction" className="py-16 sm:py-24 lg:py-32 bg-[#F5F5F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            {/* Section Header */}
            <div className="max-w-3xl mb-10 sm:mb-16">
              <p className="text-[#888] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">Proven Traction</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0B0B0B] mb-4 sm:mb-6 italic leading-tight">
                Results That Speak for Themselves
              </h2>
              <p className="text-[#555] text-sm sm:text-lg leading-relaxed">
                14 years of profitable operations. This is not a concept—it is a proven, 
                scalable business with institutional-grade unit economics.
              </p>
            </div>

            {/* Primary Metrics - clicking triggers deck capture */}
            <div className="grid grid-cols-3 border border-[#ddd] mb-3 sm:mb-4">
              {primaryMetrics.map((metric, index) => (
                <button 
                  key={index}
                  onClick={() => setShowDeckCapture(true)}
                  className={`bg-[#F5F5F3] py-6 sm:py-10 lg:py-12 text-center hover:bg-[#eee] transition-colors cursor-pointer ${
                    index < 2 ? 'border-r border-[#ddd]' : ''
                  }`}
                >
                  <p className="font-serif text-2xl sm:text-4xl lg:text-5xl text-[#0B0B0B] mb-1 sm:mb-2">
                    {metric.value}
                  </p>
                  <p className="text-[#888] text-[13px] sm:text-xs tracking-[0.15em]">{metric.label}</p>
                </button>
              ))}
            </div>

            {/* Secondary Metrics - clicking triggers deck capture */}
            <div className="grid grid-cols-3 border border-[#ddd] mb-10 sm:mb-16">
              {secondaryMetrics.map((metric, index) => (
                <button 
                  key={index}
                  onClick={() => setShowDeckCapture(true)}
                  className={`bg-[#F5F5F3] py-5 sm:py-8 lg:py-10 text-center hover:bg-[#eee] transition-colors cursor-pointer ${
                    index < 2 ? 'border-r border-[#ddd]' : ''
                  }`}
                >
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#0B0B0B] mb-1 sm:mb-2">
                    {metric.value}
                  </p>
                  <p className="text-[#888] text-[13px] sm:text-xs tracking-[0.1em]">{metric.label}</p>
                </button>
              ))}
            </div>

            {/* Differentiators - display only */}
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0B] mb-4 sm:mb-6 italic">Defensible Moat</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#555] text-[14px] sm:text-base">Registered trademark in 3 classes—brand protection at scale</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#555] text-[14px] sm:text-base">First-mover advantage in premium Christian streetwear</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#555] text-[14px] sm:text-base">Youngest member of International Christian Retail Association</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#0B0B0B] mb-4 sm:mb-6 italic">Proven Demand</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#555] text-[14px] sm:text-base">$780 average customer lifetime value</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#555] text-[14px] sm:text-base">Multi-channel revenue: DTC, retail, wholesale, pop-ups</span>
                  </li>
                  <li className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 bg-[#0B0B0B] rounded-full mt-2 flex-shrink-0" />
                    <span className="text-[#555] text-[14px] sm:text-base">10,000+ documented faith conversions through the brand</span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Deck Capture Modal */}
      {showDeckCapture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#111] border border-[#222] p-8 max-w-md w-full relative animate-fade-in-up">
            <button 
              onClick={() => setShowDeckCapture(false)}
              className="absolute top-4 right-4 text-[#888] hover:text-[#F5F5F3] transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-[#F5F5F3] mb-2 italic">View Investor Deck</h3>
              <p className="text-[#888] text-sm">Enter email to access full pitch deck</p>
            </div>
            
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#0B0B0B] border border-[#222] text-[#F5F5F3] placeholder:text-[#555] focus:outline-none focus:border-[#444]"
                required
              />
              <Button 
                type="submit"
                className="w-full bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] py-5 font-medium tracking-wide rounded-sm animate-soft-pulse"
              >
                View Deck
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
