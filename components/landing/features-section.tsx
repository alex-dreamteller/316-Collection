"use client"

import Image from "next/image"
import { AnimatedSection } from "@/hooks/use-scroll-animation"

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-[4/5] bg-[#0B0B0B]">
                <Image
                  src="/images/dsc-1692-c092bdb6-563f-496a-94d9-5302f443b174-1000x.webp"
                  alt="3:16 Collection Kingdom Denim"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <p className="text-[#888] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">Investment Thesis</p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F3] mb-4 sm:mb-6 italic leading-tight">
                Why This Investment Matters
              </h2>
              <p className="text-[#888] text-sm sm:text-lg mb-8 sm:mb-10 leading-relaxed">
                3:16 Collection is positioned to lead a category with proven demand, 
                defensible brand equity, and institutional-grade unit economics.
              </p>

              <div className="space-y-6 sm:space-y-8">
                <div className="border-l border-[#222] pl-4 sm:pl-6">
                  <h3 className="text-[#F5F5F3] font-serif text-lg sm:text-xl mb-2 italic">Trademark-Protected Brand</h3>
                  <p className="text-[#888] text-[13px] sm:text-sm leading-relaxed">
                    Registered in 3 classes. First-mover advantage in premium Christian streetwear 
                    with unique, defensible brand positioning.
                  </p>
                </div>
                
                <div className="border-l border-[#222] pl-4 sm:pl-6">
                  <h3 className="text-[#F5F5F3] font-serif text-lg sm:text-xl mb-2 italic">Exceptional Unit Economics</h3>
                  <p className="text-[#888] text-[13px] sm:text-sm leading-relaxed">
                    80% gross margins. $780 customer LTV against $55 CAC. 
                    14:1 ratio outperforms most consumer brands.
                  </p>
                </div>
                
                <div className="border-l border-[#222] pl-4 sm:pl-6">
                  <h3 className="text-[#F5F5F3] font-serif text-lg sm:text-xl mb-2 italic">Scalable Multi-Channel Model</h3>
                  <p className="text-[#888] text-[13px] sm:text-sm leading-relaxed">
                    DTC e-commerce, wholesale partnerships, pop-up tours, and flagship retail. 
                    Multiple vectors for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
