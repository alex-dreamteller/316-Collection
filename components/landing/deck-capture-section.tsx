"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import { AnimatedSection } from "@/hooks/use-scroll-animation"

export function DeckCaptureSection({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    )
    if (buttonRef.current) observer.observe(buttonRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setIsSubmitted(true)
  }

  const bgClass = variant === "secondary" ? "bg-[#0f0f0f] border-t border-[#1a1a1a]" : "bg-[#0B0B0B]"

  return (
    <section className={`pt-16 pb-10 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20 ${bgClass}`}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-8 sm:mb-10">
            <p className="text-[#888] text-[11px] sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">For Prospective Investors</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F3] mb-4 sm:mb-6 italic leading-tight">
              Request the Full Investor Deck
            </h2>
            <p className="text-[#888] text-sm sm:text-lg leading-relaxed">
              Complete financial projections, market analysis, and growth roadmap.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 sm:px-5 py-3 sm:py-4 bg-[#111] border border-[#222] text-[#F5F5F3] placeholder:text-[#555] focus:outline-none focus:border-[#444] transition-colors text-sm sm:text-base"
                  required
                />
                <Button
                  ref={buttonRef}
                  type="submit"
                  className={`bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] px-6 sm:px-8 py-3 sm:py-4 font-medium tracking-wide rounded-sm transition-all whitespace-nowrap ${isInView ? 'animate-soft-pulse' : ''}`}
                >
                  Get Deck
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-[#555] text-[13px] sm:text-sm text-center mt-4">
                Instant access. No spam.
              </p>
            </form>
          ) : (
            <div className="text-center py-6 sm:py-8">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#111] border border-[#222] flex items-center justify-center mx-auto mb-4">
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5F5F3]" />
              </div>
              <p className="text-[#F5F5F3] font-serif text-lg sm:text-xl italic mb-2">Check your inbox</p>
              <p className="text-[#888] text-sm">Your investor deck is on its way.</p>
            </div>
          )}

          <div className="mt-10 sm:mt-12 pt-10 sm:pt-12 border-t border-[#222]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
              <button onClick={() => document.getElementById('traction')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#F5F5F3] transition-colors">
                <p className="text-[#888] hover:text-[#F5F5F3] text-[13px] sm:text-sm">Financial Projections</p>
              </button>
              <button onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#F5F5F3] transition-colors">
                <p className="text-[#888] hover:text-[#F5F5F3] text-[13px] sm:text-sm">Market Analysis</p>
              </button>
              <button onClick={() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#F5F5F3] transition-colors">
                <p className="text-[#888] hover:text-[#F5F5F3] text-[13px] sm:text-sm">Growth Roadmap</p>
              </button>
              <button onClick={() => document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-[#F5F5F3] transition-colors">
                <p className="text-[#888] hover:text-[#F5F5F3] text-[13px] sm:text-sm">Team Backgrounds</p>
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
