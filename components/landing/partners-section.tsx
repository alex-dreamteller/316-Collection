"use client"

import { AnimatedSection } from "@/hooks/use-scroll-animation"

const partnerships = [
  { name: "International Christian Retail Association", url: "https://www.cbaonline.org" },
  { name: "50+ Charitable Partners", url: "#team" },
  { name: "Mega Church Networks", url: "#traction" },
  { name: "Faith-Based Events", url: "#roadmap" },
]

export function PartnersSection() {
  const handleClick = (url: string) => {
    if (url.startsWith("#")) {
      document.querySelector(url)?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.open(url, "_blank")
    }
  }

  return (
    <section className="py-12 sm:py-16 bg-[#111] border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-center text-[#888] text-[13px] sm:text-sm tracking-[0.2em] uppercase mb-6 sm:mb-8">
            Strategic Partnerships
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-3 sm:gap-y-4">
            {partnerships.map((partner, index) => (
              <button 
                key={index} 
                onClick={() => handleClick(partner.url)}
                className="text-[#F5F5F3] text-[14px] sm:text-sm tracking-wide hover:text-[#888] transition-colors cursor-pointer"
              >
                {partner.name}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
