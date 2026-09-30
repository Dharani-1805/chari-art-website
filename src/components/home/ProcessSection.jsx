import React from 'react'
import { Sparkles, Image, Edit3, Eye, PackageCheck } from 'lucide-react'
import artistData from '../../data/artist.json'

const stepIcons = [Image, Edit3, Eye, PackageCheck]

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 bg-[#0c0d10] border-t border-[#191b22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Easel</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
            From Reference Photo to Heirloom Art
          </h2>
          <p className="text-base text-[#9ca3af]">
            Every portrait is a bespoke collaboration. Here is how your memory comes to life through Chari's meticulous artistic process.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {artistData.processSteps.map((step, index) => {
            const Icon = stepIcons[index] || Sparkles
            return (
              <div
                key={step.step}
                className="bg-[#12141a] border border-[#232631] hover:border-[#d4af37]/40 rounded-2xl p-6 text-left relative group transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Step number badge & icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif-heading text-3xl font-bold text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors">
                      {step.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#191b22] border border-[#232631] text-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-heading text-xl font-bold text-[#f8f6f0] mb-2.5">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#9ca3af] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#191b22] flex items-center gap-1.5 text-[11px] text-[#6b7280]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]"></span>
                  <span>100% Client Involvement</span>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
