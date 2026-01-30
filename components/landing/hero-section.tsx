"use client"

import React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [showEmailCapture, setShowEmailCapture] = useState(false)
  const [email, setEmail] = useState("")
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30,
  })
  const investButtonRef = useRef<HTMLButtonElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 }
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.5 }
    )
    if (investButtonRef.current) observer.observe(investButtonRef.current)
    return () => observer.disconnect()
  }, [])

  const handleInvestClick = () => setShowEmailCapture(true)

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      window.open("https://wefunder.com/316collection", "_blank")
      setShowEmailCapture(false)
    }
  }

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center bg-[#0B0B0B] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/missionkingdom52-800x.webp"
          alt="3:16 Collection Kingdom Campaign"
          fill
          className="object-cover object-center opacity-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0B] via-[#0B0B0B]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-[#0B0B0B]/40" />
      </div>

      {/* Content - fuller width on mobile, left-aligned */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-4 sm:pt-28 sm:pb-16">
        <div className="max-w-2xl">
          {/* Eyebrow with Live indicator */}
          <div className="flex items-center gap-2 mb-2 sm:mb-6">
            <span className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-live-pulse" />
              <span className="text-emerald-400 text-[10px] sm:text-xs font-medium uppercase tracking-wide">Live</span>
            </span>
            <p className="text-[#888] text-[11px] sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] uppercase">
              Equity Crowdfunding
            </p>
          </div>

          {/* Headline - larger on mobile, left-aligned */}
          <h1 className="font-serif text-[42px] sm:text-5xl lg:text-7xl text-[#F5F5F3] leading-[1.02] mb-3 sm:mb-5 lg:mb-6 italic">
            Own Equity in Faith-Driven Fashion
          </h1>

          {/* Subheadline - punchier */}
          <p className="text-base sm:text-lg lg:text-xl text-[#888] leading-relaxed mb-4 sm:mb-8 lg:mb-10 max-w-xl lg:max-w-2xl">
            <span className="text-[#F5F5F3]">$12M+ revenue</span>. <span className="text-[#F5F5F3]">80% margins</span>. <span className="text-[#F5F5F3]">100K+ customers</span>. Now open to investors.
          </p>

          {/* Key Metrics - 3 on one line, display only */}
          <div className="flex items-center justify-start gap-5 sm:gap-8 lg:gap-12 mb-4 sm:mb-8 lg:mb-10">
            <div className="text-left group cursor-default">
              <p className="text-[26px] sm:text-3xl lg:text-4xl font-serif text-[#F5F5F3] group-hover:text-white transition-colors">$12M+</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#888] mt-0.5 group-hover:text-[#aaa] transition-colors">Revenue</p>
            </div>
            <div className="w-px h-10 sm:h-12 lg:h-14 bg-[#333]" />
            <div className="text-left group cursor-default">
              <p className="text-[26px] sm:text-3xl lg:text-4xl font-serif text-[#F5F5F3] group-hover:text-white transition-colors">100K+</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#888] mt-0.5 group-hover:text-[#aaa] transition-colors">Customers</p>
            </div>
            <div className="w-px h-10 sm:h-12 lg:h-14 bg-[#333]" />
            <div className="text-left group cursor-default">
              <p className="text-[26px] sm:text-3xl lg:text-4xl font-serif text-[#F5F5F3] group-hover:text-white transition-colors">80%</p>
              <p className="text-[10px] sm:text-xs lg:text-sm text-[#888] mt-0.5 group-hover:text-[#aaa] transition-colors">Margin</p>
            </div>
          </div>

          {/* Valuation & Countdown - side by side */}
          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 mb-5 sm:mb-8 lg:mb-10">
            <button 
              onClick={handleInvestClick}
              className="bg-[#111]/80 backdrop-blur-sm border border-[#222] px-5 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 hover:border-[#444] hover:bg-[#161616]/80 transition-all cursor-pointer group"
            >
              <p className="text-[#888] text-[10px] sm:text-xs lg:text-sm tracking-[0.1em] uppercase group-hover:text-[#aaa] transition-colors">Valuation Cap</p>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif text-[#F5F5F3] group-hover:text-white transition-colors">$30M</p>
            </button>
            <div className="bg-[#111]/80 backdrop-blur-sm border border-[#222] px-5 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5 hover:border-[#333] transition-colors group cursor-default">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-live-pulse" />
                <p className="text-[#888] text-[10px] sm:text-xs lg:text-sm tracking-[0.1em] uppercase group-hover:text-[#aaa] transition-colors">Closes In</p>
              </div>
              <div className="flex gap-1.5 text-[#F5F5F3] font-mono text-lg sm:text-xl lg:text-2xl group-hover:text-white transition-colors">
                <span>{String(timeLeft.days).padStart(2, "0")}d</span>
                <span className="text-[#555]">:</span>
                <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
                <span className="text-[#555]">:</span>
                <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-5">
            <Button 
              ref={investButtonRef}
              onClick={handleInvestClick}
              className={`bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] text-base sm:text-base lg:text-lg px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 font-medium tracking-wide rounded-sm transition-all ${isInView ? 'animate-soft-pulse' : ''}`}
            >
              Become an Investor
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </Button>
            <Button 
              variant="outline" 
              className="border-[#333] bg-transparent text-[#F5F5F3] hover:bg-[#161616] hover:border-[#444] text-base sm:text-base lg:text-lg px-8 sm:px-10 lg:px-12 py-5 sm:py-6 lg:py-7 rounded-sm transition-all"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Opportunity
            </Button>
          </div>
        </div>
      </div>

      {/* Email Capture Modal */}
      {showEmailCapture && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#111] border border-[#222] p-8 max-w-md w-full relative animate-fade-in-up">
            <button 
              onClick={() => setShowEmailCapture(false)}
              className="absolute top-4 right-4 text-[#888] hover:text-[#F5F5F3] transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="text-center mb-6">
              <h3 className="font-serif text-2xl text-[#F5F5F3] mb-2 italic">Become an Investor</h3>
              <p className="text-[#888] text-sm">Enter email to access investment portal</p>
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
                Continue to Investment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      )}
    </section>
  )
}
