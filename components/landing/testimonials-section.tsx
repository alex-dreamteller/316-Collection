import Image from "next/image"

const impactStats = [
  { value: "10K+", label: "Lives Transformed" },
  { value: "50+", label: "Charitable Partners" },
  { value: "46", label: "Countries Reached" },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#0f0f0f] border-t border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Left - Impact Statement */}
          <div>
            <p className="text-[#888] text-[11px] sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">Beyond Business</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F3] mb-4 sm:mb-6 italic leading-tight">
              Fashion With Eternal Impact
            </h2>
            <p className="text-[#888] text-sm sm:text-lg mb-8 sm:mb-10 leading-relaxed">
              10,000+ documented faith conversions through our retail ministry. 
              This is not just apparel—it is a platform for the Gospel.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {impactStats.map((stat, index) => (
                <div key={index}>
                  <p className="font-serif text-2xl sm:text-3xl text-[#F5F5F3] mb-1">{stat.value}</p>
                  <p className="text-[#888] text-[11px] sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative aspect-square bg-[#111]">
            <Image
              src="/images/psalm-23-15-258eae4f-be70-434d-8fab-921a89a6aae4-600x.jpg"
              alt="3:16 Collection Psalm 23 Bomber"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
