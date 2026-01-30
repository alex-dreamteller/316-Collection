import Image from "next/image"

export function ProblemSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left - Problem Statement */}
          <div>
            <p className="text-[#888] text-[13px] sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">Market Opportunity</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F3] mb-4 sm:mb-6 italic leading-tight">
              A $185 Billion Market, Vastly Underserved
            </h2>
            <p className="text-[#888] text-[14px] sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              210 million Christians in the US alone. 60%+ of Gen Z and Millennials prefer brands aligned with personal values. The gap between demand and supply 
              is where 3:16 Collection dominates.
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex gap-4 sm:gap-6 group cursor-default">
                <div className="w-px bg-[#222] group-hover:bg-[#444] transition-colors" />
                <div>
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F3] mb-1 sm:mb-2 group-hover:text-white transition-colors">$185B</p>
                  <p className="text-[#888] text-[14px] sm:text-sm lg:text-base group-hover:text-[#aaa] transition-colors">Global Streetwear TAM</p>
                </div>
              </div>
              
              <div className="flex gap-4 sm:gap-6 group cursor-default">
                <div className="w-px bg-[#222] group-hover:bg-[#444] transition-colors" />
                <div>
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F3] mb-1 sm:mb-2 group-hover:text-white transition-colors">$4.5B</p>
                  <p className="text-[#888] text-[14px] sm:text-sm lg:text-base group-hover:text-[#aaa] transition-colors">US Christian Retail Market</p>
                </div>
              </div>
              
              <div className="flex gap-4 sm:gap-6 group cursor-default">
                <div className="w-px bg-[#F5F5F3] group-hover:bg-white transition-colors" />
                <div>
                  <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#F5F5F3] mb-1 sm:mb-2 group-hover:text-white transition-colors">$900M</p>
                  <p className="text-[#888] text-[14px] sm:text-sm lg:text-base group-hover:text-[#aaa] transition-colors">Addressable Faith-Based Apparel</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative aspect-[4/5] bg-[#111] group">
            <Image
              src="/images/lounge-suit-yacht.webp"
              alt="3:16 Collection Lifestyle"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-40 group-hover:opacity-30 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  )
}
