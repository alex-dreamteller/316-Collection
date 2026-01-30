"use client"

import Image from "next/image"
import { AnimatedSection } from "@/hooks/use-scroll-animation"
import { ExternalLink } from "lucide-react"

const productImages = [
  {
    src: "/images/kingdom-denim-pool.webp",
    alt: "Kingdom Collection Denim",
    title: "Premium Denim",
    objectPosition: "left center",
  },
  {
    src: "/images/316collection-psalm-23-large-tote-genuine-leather-black-1106455133-1200x.webp",
    alt: "Psalm 23 Leather Tote",
    title: "Lux Leather",
  },
  {
    src: "/images/kingdomglobal-600x.webp",
    alt: "Kingdom Global Puffer",
    title: "Statement Outerwear",
  },
  {
    src: "/images/316-collection-7-600x.webp",
    alt: "Man of God Wallet",
    title: "Accessories",
  },
]

const SHOP_ALL_URL = "https://www.316collection.com/collections/shop-all"

export function ProductSection() {
  return (
    <section id="products" className="py-16 sm:py-24 lg:py-32 bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="max-w-3xl mb-10 sm:mb-16">
            <p className="text-[#888] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">The Opportunity</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F3] mb-4 sm:mb-6 italic leading-tight">
              Premium Faith-Driven Fashion at Institutional Scale
            </h2>
            <p className="text-[#888] text-sm sm:text-lg leading-relaxed">
              3:16 Collection has built a defensible brand in a $350B global apparel market.
            </p>
          </div>

          {/* Product Grid - All clickable to shop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-16">
            {productImages.map((product, index) => (
              <a 
                key={index} 
                href={SHOP_ALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-[3/4] bg-[#111] overflow-hidden cursor-pointer"
              >
                <Image
                  src={product.src || "/placeholder.svg"}
                  alt={product.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: product.objectPosition || 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex items-center justify-between">
                  <p className="text-[#F5F5F3] text-[11px] sm:text-sm tracking-wide">{product.title}</p>
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-[#F5F5F3] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

          {/* Key Value Props - Display only with hover effects */}
          <div className="grid md:grid-cols-3 gap-px bg-[#222]">
            <div className="bg-[#0B0B0B] p-6 sm:p-8 lg:p-12 group cursor-default hover:bg-[#111] transition-colors">
              <p className="text-2xl sm:text-3xl lg:text-5xl font-serif text-[#F5F5F3] mb-2 sm:mb-3 group-hover:text-white transition-colors">80%</p>
              <p className="text-[#888] text-[11px] sm:text-sm lg:text-base tracking-wide uppercase mb-3 sm:mb-4 group-hover:text-[#aaa] transition-colors">Gross Margins</p>
              <p className="text-[#888] text-[12px] sm:text-sm lg:text-base leading-relaxed group-hover:text-[#999] transition-colors">
                Premium pricing power with strategic product mix across signature pieces.
              </p>
            </div>
            <div className="bg-[#0B0B0B] p-6 sm:p-8 lg:p-12 group cursor-default hover:bg-[#111] transition-colors">
              <p className="text-2xl sm:text-3xl lg:text-5xl font-serif text-[#F5F5F3] mb-2 sm:mb-3 group-hover:text-white transition-colors">$12M+</p>
              <p className="text-[#888] text-[11px] sm:text-sm lg:text-base tracking-wide uppercase mb-3 sm:mb-4 group-hover:text-[#aaa] transition-colors">Lifetime Revenue</p>
              <p className="text-[#888] text-[12px] sm:text-sm lg:text-base leading-relaxed group-hover:text-[#999] transition-colors">
                Proven demand with 100K+ customers across 46 countries.
              </p>
            </div>
            <div className="bg-[#0B0B0B] p-6 sm:p-8 lg:p-12 group cursor-default hover:bg-[#111] transition-colors">
              <p className="text-2xl sm:text-3xl lg:text-5xl font-serif text-[#F5F5F3] mb-2 sm:mb-3 group-hover:text-white transition-colors">14:1</p>
              <p className="text-[#888] text-[11px] sm:text-sm lg:text-base tracking-wide uppercase mb-3 sm:mb-4 group-hover:text-[#aaa] transition-colors">LTV to CAC</p>
              <p className="text-[#888] text-[12px] sm:text-sm lg:text-base leading-relaxed group-hover:text-[#999] transition-colors">
                $780 customer lifetime value against $55 acquisition cost.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
