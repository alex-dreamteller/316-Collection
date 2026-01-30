"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatedSection } from "@/hooks/use-scroll-animation"
import { Instagram, Play, ExternalLink } from "lucide-react"
import Image from "next/image"

const reels = [
  { 
    id: "DCRpymAunb9", 
    url: "https://www.instagram.com/reel/DCRpymAunb9/",
    thumbnail: "/images/shepherd-tote-bag.jpg"
  },
  { 
    id: "C9LwPQvNy_u", 
    url: "https://www.instagram.com/reel/C9LwPQvNy_u/",
    thumbnail: "/images/316-studio-edits-23-1c-600x.webp"
  },
  { 
    id: "DHRr76nyiHq", 
    url: "https://www.instagram.com/reel/DHRr76nyiHq/",
    thumbnail: "/images/kingdom-final-26.webp"
  },
  { 
    id: "DA3YpI9uqbq", 
    url: "https://www.instagram.com/reel/DA3YpI9uqbq/",
    thumbnail: "/images/lounge-suit-yacht.webp"
  },
  { 
    id: "C-DRv1Fu26n", 
    url: "https://www.instagram.com/reel/C-DRv1Fu26n/",
    thumbnail: "/images/kingdomglobal-600x.webp"
  },
]

export function InstagramCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section className="py-12 sm:py-16 bg-[#0B0B0B] border-y border-[#222] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <AnimatedSection>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-[#888]" />
              <p className="text-[#888] text-xs sm:text-sm tracking-[0.15em] uppercase">
                @316Collection
              </p>
            </div>
            <a
              href="https://www.instagram.com/316collection/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#888] hover:text-[#F5F5F3] text-xs sm:text-sm flex items-center gap-1.5 transition-colors"
            >
              Follow
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>

      {/* Scrolling Carousel with visible thumbnails */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        className="flex gap-3 sm:gap-4 overflow-x-hidden px-4"
        style={{ scrollBehavior: 'auto' }}
      >
        {[...reels, ...reels].map((reel, index) => (
          <a
            key={`${reel.id}-${index}`}
            href={reel.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[140px] sm:w-[180px] h-[200px] sm:h-[280px] relative group overflow-hidden border border-[#222] hover:border-[#444] transition-all"
          >
            {/* Thumbnail Image */}
            <Image
              src={reel.thumbnail || "/placeholder.svg"}
              alt="Instagram Reel"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-white ml-0.5" />
              </div>
            </div>
            
            {/* Instagram Icon */}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3">
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white drop-shadow-lg" />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
