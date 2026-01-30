import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-16 lg:py-20 border-t border-[#222] bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          <div>
            <Image
              src="/images/316-logo.png"
              alt="3:16 Collection"
              width={100}
              height={36}
              className="h-8 w-auto opacity-80"
            />
          </div>
          
          <div className="flex items-center gap-8 text-sm text-[#888]">
            <a 
              href="https://www.316collection.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#F5F5F3] transition-colors inline-flex items-center gap-1.5"
            >
              Shop
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://www.316collection.com/pages/contact" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#F5F5F3] transition-colors inline-flex items-center gap-1.5"
            >
              Contact
              <ExternalLink className="w-3 h-3" />
            </a>
            <a href="#" className="hover:text-[#F5F5F3] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#F5F5F3] transition-colors">Terms</a>
          </div>
        </div>
        
        <div className="pt-12 border-t border-[#222]">
          <p className="text-[#555] text-xs text-center leading-relaxed max-w-3xl mx-auto mb-4">
            This is a securities offering. Investment in startups involves substantial risk, including illiquidity, 
            lack of dividends, loss of investment, and dilution. It should only be considered as part of a diversified 
            portfolio. Please read the offering materials carefully before investing.
          </p>
          <p className="text-[#555] text-xs text-center">
            {new Date().getFullYear()} 3:16 Collection. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
