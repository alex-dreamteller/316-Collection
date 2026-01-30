"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, X } from "lucide-react"

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const fundingProgress = 78

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight
        setIsVisible(window.scrollY > heroBottom - 200)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        window.open("https://wefunder.com/316collection", "_blank")
      }, 1500)
    }
  }

  if (!isVisible) return null

  return (
    <>
      {/* Mobile Sticky Bar - Progress 2/5, CTA 3/5 */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-[#0B0B0B]/95 backdrop-blur-md border-t border-[#222] p-3 safe-area-inset-bottom">
        <div className="flex items-center gap-3">
          {/* Progress bar section - 2/5 width */}
          <button 
            onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
            className="w-2/5 text-left hover:opacity-80 transition-opacity cursor-pointer"
          >
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-live-pulse" />
                <p className="text-[12px] text-[#888] uppercase tracking-wide">Live</p>
              </div>
              <p className="text-[13px] font-medium text-[#F5F5F3]">{fundingProgress}%</p>
            </div>
            <div className="w-full h-1.5 bg-[#222] rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full animate-progress-glow"
                style={{ width: `${fundingProgress}%` }}
              />
            </div>
          </button>
          
          {/* CTA button - 3/5 width */}
          <Button
            onClick={() => setShowModal(true)}
            className="w-3/5 bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] font-medium py-5 rounded-sm animate-soft-pulse text-base"
          >
            Become an Investor
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Desktop Floating CTA */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <div className="bg-[#111] border border-[#222] p-5 shadow-2xl hover:border-[#333] transition-colors">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowModal(true)}
              className="text-left hover:opacity-80 transition-opacity cursor-pointer"
            >
              <p className="text-xs text-[#888] mb-0.5">Valuation Cap</p>
              <p className="text-xl font-serif text-[#F5F5F3]">$30M</p>
            </button>
            <Button
              onClick={() => setShowModal(true)}
              className="bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] font-medium px-6 rounded-sm animate-soft-pulse transition-all"
            >
              Become an Investor
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm">
          <div className="bg-[#111] border border-[#222] p-10 max-w-md w-full relative animate-fade-in-up">
            <button 
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#888] hover:text-[#F5F5F3] transition-colors"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </button>
            
            {!isSubmitted ? (
              <>
                <div className="text-center mb-8">
                  <h3 className="font-serif text-3xl text-[#F5F5F3] mb-3 italic">Become an Investor</h3>
                  <p className="text-[#888]">Enter your email to access the investment portal</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-4 py-4 bg-[#0B0B0B] border border-[#222] text-[#F5F5F3] placeholder:text-[#555] focus:outline-none focus:border-[#444] transition-colors"
                    required
                  />
                  <Button 
                    type="submit"
                    className="w-full bg-[#F5F5F3] hover:bg-white text-[#0B0B0B] py-6 font-medium rounded-sm animate-soft-pulse"
                  >
                    Continue to Investment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
                
                <p className="text-[#555] text-xs text-center mt-6">
                  By continuing, you agree to receive investor communications
                </p>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="w-14 h-14 bg-[#0B0B0B] border border-[#222] flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#F5F5F3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-[#F5F5F3] font-serif italic mb-2">Opening investment portal...</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
