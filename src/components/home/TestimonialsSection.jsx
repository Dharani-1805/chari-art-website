import React from 'react'
import { Sparkles, Star, Quote, MapPin } from 'lucide-react'
import testimonialsData from '../../data/testimonials.json'

export default function TestimonialsSection() {
  return (
    <section id="reviews" className="py-24 bg-[#0c0d10] border-t border-[#191b22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Collector Stories</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
            Loved By Collectors Across The World
          </h2>
          <p className="text-base text-[#9ca3af]">
            Real reactions from clients who entrusted Chari with their most sacred family moments and gifts.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-[#12141a] border border-[#232631] hover:border-[#d4af37]/40 rounded-2xl p-6 sm:p-7 text-left relative flex flex-col justify-between transition-all duration-300 shadow-xl group"
            >
              <div>
                {/* Rating stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#d4af37]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#232631] group-hover:text-[#d4af37]/40 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-[#d1d5db] leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-6 mt-6 border-t border-[#191b22]">
                <div className="font-serif-heading text-base font-bold text-[#f8f6f0]">
                  {item.clientName}
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#9ca3af] mt-1">
                  <span className="flex items-center gap-1 text-[#6b7280]">
                    <MapPin className="w-3 h-3 text-[#d4af37]" />
                    {item.location}
                  </span>
                  <span className="text-[#d4af37] font-medium">{item.artworkType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
