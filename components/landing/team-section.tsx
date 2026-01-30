"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimatedSection } from "@/hooks/use-scroll-animation"

const team = [
  {
    name: "Jaylen LaGrande",
    role: "Chief Steward / Visionary",
    initials: "JL",
    bio: "Opened first store, growing to 3 locations within 2 years, earning ~$600K per year. Exited to create 3:16, growing to $1M+ in under 12 months, now $3M+. Youngest ever member of the International Christian Retail Association. Education: Wayland Baptist University, Marketing/Management.",
    highlights: ["$3M+ revenue growth", "14 years retail experience", "ICRA member"],
  },
  {
    name: "Pete Devkota",
    role: "CMO (Fractional)",
    initials: "PD",
    bio: "8+ years of Direct Response/Email Marketing experience. Achieved 20-50% revenue increases over 400 brands and 600+ e-commerce stores, including INC 5000 brands. Recognized in the top 2% of Klaviyo Agency Partners (NYSE: KVYO). Generated $130M+ in revenues through Email Marketing alone.",
    highlights: ["$130M+ generated", "Top 2% Klaviyo Partner", "400+ brands served"],
  },
]

export function TeamSection() {
  const [expandedMember, setExpandedMember] = useState<string | null>(null)

  return (
    <section id="team" className="py-16 sm:py-24 lg:py-32 bg-[#0f0f0f] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-16">
            <p className="text-[#888] text-sm tracking-[0.2em] uppercase mb-4">Core Leadership</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#F5F5F3] mb-6 italic leading-tight">
              Operators with Proven Track Records
            </h2>
            <p className="text-[#888] text-lg leading-relaxed">
              14 years of retail experience. $130M+ in marketing-driven revenue. 
              The core team built to scale.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 gap-px bg-[#222]">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-[#0B0B0B] p-6 sm:p-8 lg:p-12"
              >
                <div className="flex items-start gap-6 mb-6">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-[#111] border border-[#222] flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-serif text-[#F5F5F3] italic">{member.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#F5F5F3] italic">{member.name}</h3>
                    <p className="text-[#888] text-sm tracking-wide">{member.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-6">
                  {member.highlights.map((highlight, i) => (
                    <span
                      key={i}
                      className="text-[13px] sm:text-xs bg-[#111] border border-[#222] text-[#888] px-2.5 sm:px-3 py-1.5 sm:py-1.5"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setExpandedMember(expandedMember === member.name ? null : member.name)}
                  className="flex items-center gap-2 text-[#888] hover:text-[#F5F5F3] transition-colors text-[14px] sm:text-sm"
                >
                  <span>{expandedMember === member.name ? "Hide bio" : "Read full bio"}</span>
                  {expandedMember === member.name ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {expandedMember === member.name && (
                  <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-[#222]">
                    <p className="text-[#888] leading-relaxed text-[14px] sm:text-base">{member.bio}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
