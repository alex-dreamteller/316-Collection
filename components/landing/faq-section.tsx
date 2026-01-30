"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { AnimatedSection } from "@/hooks/use-scroll-animation"
import { ExternalLink } from "lucide-react"

const faqs = [
  {
    question: "What is the investment structure?",
    answer: "SAFE Notes with convertible notes preferred (negotiable). Minimum investment is $100 at a share price of $1.25. This equity crowdfunding opportunity allows investors to become part owners of a proven, growing brand.",
  },
  {
    question: "What are the financial fundamentals?",
    answer: "$12M+ lifetime revenue. 80% gross margins. 14:1 LTV to CAC ratio ($780 customer lifetime value against $55 acquisition cost). 14 years of profitable operations across multiple retail formats.",
  },
  {
    question: "How will funds be deployed?",
    answer: "$750K raise allocated: $250K inventory expansion, $250K working capital, $100K marketing, $100K operations, $50K staffing. This capital fuels flagship store launch, nationwide pop-up tour, and new product lines.",
  },
  {
    question: "What is the market opportunity?",
    answer: "$185B global streetwear TAM. $4-6B US Christian retail market. $700M-1.2B serviceable addressable market in faith-based apparel. 210M Christians in the US, with 60%+ of Gen Z and Millennials preferring values-aligned brands.",
  },
  {
    question: "What makes 3:16 defensible?",
    answer: "Registered trademark in 3 classes. First-mover advantage in premium Christian streetwear. Youngest member of International Christian Retail Association. 100K+ customers across 46 countries. 112K email/SMS subscribers.",
  },
  {
    question: "What are the growth channels?",
    answer: "Multi-channel model: DTC e-commerce, brick-and-mortar retail in high-traffic locations, wholesale partnerships with mega churches and Christian events, and pop-up shops at conferences and festivals.",
  },
  {
    question: "Where can I see the products?",
    answer: "Visit the official 3:16 Collection store to explore the full catalog of premium faith-driven streetwear, accessories, and lifestyle products.",
    isLink: true,
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-32 bg-[#0B0B0B] border-t border-[#1a1a1a]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          {/* Section Header */}
          <div className="mb-8 sm:mb-12">
            <p className="text-[#888] text-[13px] sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">Common Questions</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F5F3] italic">
              Investor FAQ
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-0">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#222] py-0"
              >
                <AccordionTrigger className="text-left text-[#F5F5F3] hover:text-[#F5F5F3] py-5 sm:py-6 font-serif text-base sm:text-lg italic [&[data-state=open]]:text-[#F5F5F3]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#888] pb-5 sm:pb-6 leading-relaxed text-[14px] sm:text-base">
                  {faq.answer}
                  {"isLink" in faq && faq.isLink && (
                    <a 
                      href="https://www.316collection.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-[#F5F5F3] hover:text-white transition-colors"
                    >
                      Visit 316collection.com
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AnimatedSection>
      </div>
    </section>
  )
}
