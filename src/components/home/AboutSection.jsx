import React from 'react'
import { Sparkles, Palette, CheckCircle } from 'lucide-react'
import artistData from '../../data/artist.json'
import { getAssetUrl } from '../../utils/assetHelper'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#08090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Studio Vignette */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d4af37]/20 to-transparent rounded-3xl blur-2xl"></div>
              
              <div className="relative rounded-2xl overflow-hidden border border-[#232631] bg-[#12141a] p-3 shadow-2xl">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#0c0d10] relative">
                  <img
                    src={getAssetUrl(artistData.founderImage)}
                    alt="Dharani Achari (Chari) - Founder & Artist"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-60"></div>
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0c0d10]/90 backdrop-blur-md border border-[#232631] p-3.5 rounded-xl text-left">
                    <div className="font-serif-heading text-lg font-bold text-[#f8f6f0]">
                      Dharani Achari
                    </div>
                    <div className="text-xs text-[#d4af37] font-medium">
                      Founder &amp; Master Artist at Chari Creations
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Materials */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Meet The Artist Behind Chari Creations</span>
            </div>

            <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
              Capturing What The Camera Cannot: The Essence.
            </h2>

            <p className="text-base text-[#9ca3af] leading-relaxed">
              {artistData.bio}
            </p>

            <p className="text-sm text-[#9ca3af] leading-relaxed">
              Every stroke of pencil on textured cotton paper is an exercise in mindfulness. Whether rendering the intricate glint in a person’s eye or blending soft graphite tones for a vintage couple portrait, my mission is to deliver an artwork that evokes deep emotion for decades to come.
            </p>

            {/* Archival Grade Materials Showcase */}
            <div className="pt-4 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <Palette className="w-4 h-4" />
                <span>Professional & Archival Tools Used</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {artistData.materials.map((mat, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-[#12141a] border border-[#232631] text-left"
                  >
                    <div className="text-xs font-bold text-[#f8f6f0] mb-1">
                      {mat.category}
                    </div>
                    <div className="text-[11px] text-[#9ca3af] leading-tight">
                      {mat.tools}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Studio Guarantees */}
            <div className="pt-2 flex flex-wrap gap-4 text-xs text-[#9ca3af]">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>Acid-Free 100% Archival Paper</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>UV Protective Fixative Coating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#25D366]" />
                <span>Damage-Proof Protective Flat-Pack</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
