"use client"

import { useState } from "react"
import { AnimatedSection } from "@/hooks/use-scroll-animation"
import { ChevronDown, ChevronRight } from "lucide-react"

const milestones = [
  {
    period: "Q1 2026",
    title: "Capital Deployment",
    items: ["Close $750K raise", "Expand inventory depth", "Strengthen supply chain"],
    status: "current",
  },
  {
    period: "Q2-Q3 2026",
    title: "Retail Expansion",
    items: ["Flagship store launch", "5-city pop-up tour", "Conference partnerships"],
    status: "upcoming",
  },
  {
    period: "Q4 2026",
    title: "Product Expansion",
    items: ["The Shepherd Line launch", "Basics collection", "Healthcare line (scrubs)"],
    status: "upcoming",
  },
  {
    period: "2027+",
    title: "National Scale",
    items: ["3+ retail locations", "Major wholesale deals", "$20M+ annual revenue"],
    status: "future",
  },
  {
    period: "2028+",
    title: "Strategic Exits",
    items: ["Acquisition opportunities", "Strategic partnerships", "Investor liquidity events"],
    status: "exit",
  },
]

const useOfFunds = [
  { label: "Inventory", amount: "$250K", percent: "33%" },
  { label: "Working Capital", amount: "$250K", percent: "33%" },
  { label: "Marketing", amount: "$100K", percent: "13%" },
  { label: "Operations", amount: "$100K", percent: "13%" },
  { label: "Staffing", amount: "$50K", percent: "7%" },
]

export function RoadmapSection() {
  const [expandedMilestone, setExpandedMilestone] = useState<number | null>(0)

  return (
    <section id="roadmap" className="py-16 sm:py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-16">
            <p className="text-[#888] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">Growth Plan</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F3] mb-4 sm:mb-6 italic leading-tight">
              A Clear Path to Category Leadership
            </h2>
            <p className="text-[#888] text-sm sm:text-lg leading-relaxed">
              Strategic milestones designed to scale 3:16 Collection into the definitive faith-driven fashion brand.
            </p>
          </div>

          {/* Mobile Timeline - Vertical collapsible */}
          <div className="md:hidden space-y-2 mb-12">
            {milestones.map((milestone, index) => (
              <div key={index}>
                <button
                  onClick={() => setExpandedMilestone(expandedMilestone === index ? null : index)}
                  className={`w-full text-left p-4 transition-colors ${
                    milestone.status === "current" ? "bg-[#111] border-l-2 border-l-[#F5F5F3]" : 
                    milestone.status === "exit" ? "bg-[#161616] border border-[#2a2a2a]" : "bg-[#0B0B0B]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs tracking-[0.1em] uppercase ${
                        milestone.status === "current" ? "text-[#F5F5F3]" : "text-[#888]"
                      }`}>
                        {milestone.period}
                      </span>
                      <span className="text-[#333]">|</span>
                      <span className={`font-serif text-base italic ${
                        milestone.status === "exit" ? "text-[#9CA3AF]" : "text-[#F5F5F3]"
                      }`}>
                        {milestone.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[#888] transition-transform ${
                      expandedMilestone === index ? "rotate-180" : ""
                    }`} />
                  </div>
                </button>
                
                {expandedMilestone === index && (
                  <div className={`p-4 pt-2 ${
                    milestone.status === "exit" ? "bg-[#161616]" : "bg-[#0B0B0B]"
                  }`}>
                    <ul className="space-y-2">
                      {milestone.items.map((item, i) => (
                        <li key={i} className={`text-sm flex items-start gap-2 ${
                          milestone.status === "exit" ? "text-[#666]" : "text-[#888]"
                        }`}>
                          <ChevronRight className="w-3 h-3 mt-1 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {/* Arrow connector */}
                {index < milestones.length - 1 && (
                  <div className="flex justify-center py-1">
                    <div className="w-px h-4 bg-[#333]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Timeline - Grid */}
          <div className="hidden md:grid md:grid-cols-5 gap-px bg-[#222] mb-12 sm:mb-20">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`bg-[#0B0B0B] p-4 sm:p-6 lg:p-8 transition-colors ${
                  milestone.status === "current" ? "border-t-2 border-t-[#F5F5F3]" : ""
                } ${milestone.status === "exit" ? "bg-[#161616] border border-[#2a2a2a]" : ""}`}
              >
                <p className={`text-xs sm:text-sm tracking-[0.1em] uppercase mb-2 sm:mb-3 ${
                  milestone.status === "current" ? "text-[#F5F5F3]" : 
                  milestone.status === "exit" ? "text-[#888]" : "text-[#888]"
                }`}>
                  {milestone.period}
                </p>
                <h3 className={`font-serif text-base sm:text-lg lg:text-xl italic mb-2 sm:mb-4 ${
                  milestone.status === "exit" ? "text-[#9CA3AF]" : "text-[#F5F5F3]"
                }`}>{milestone.title}</h3>
                <ul className="space-y-1 sm:space-y-2">
                  {milestone.items.map((item, i) => (
                    <li key={i} className={`text-xs lg:text-sm flex items-start gap-1.5 sm:gap-2 ${
                      milestone.status === "exit" ? "text-[#666]" : "text-[#888]"
                    }`}>
                      <span className={`w-1 h-1 rounded-full mt-1.5 flex-shrink-0 ${
                        milestone.status === "exit" ? "bg-[#666]" : "bg-[#888]"
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Use of Funds - Mobile vertical, Desktop grid */}
          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#F5F5F3] mb-6 sm:mb-8 italic text-center">
              Use of Funds: $750K Raise
            </h3>
            
            {/* Mobile - Vertical stack */}
            <div className="sm:hidden space-y-2">
              {useOfFunds.map((fund, index) => (
                <div 
                  key={index} 
                  className="bg-[#0B0B0B] p-4 flex items-center justify-between hover:bg-[#111] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-xl text-[#F5F5F3]">{fund.amount}</span>
                    <span className="text-[#555] text-sm">{fund.percent}</span>
                  </div>
                  <span className="text-[#888] text-sm">{fund.label}</span>
                </div>
              ))}
            </div>
            
            {/* Desktop - Grid */}
            <div className="hidden sm:grid sm:grid-cols-5 gap-px bg-[#222]">
              {useOfFunds.map((fund, index) => (
                <div 
                  key={index} 
                  className="bg-[#0B0B0B] p-4 lg:p-6 text-center hover:bg-[#111] transition-colors"
                >
                  <p className="font-serif text-xl lg:text-2xl text-[#F5F5F3] mb-1">{fund.amount}</p>
                  <p className="text-[#888] text-xs lg:text-sm">{fund.label}</p>
                  <p className="text-[#555] text-xs mt-1">{fund.percent}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
