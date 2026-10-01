import React from 'react'
import { Sparkles, ArrowRight, Eye, ShieldCheck, Layers, MessageCircle } from 'lucide-react'
import { InstagramIcon } from '../common/BrandIcons'
import artistData from '../../data/artist.json'
import artworksData from '../../data/artworks.json'
import { buildQuickWhatsAppLink } from '../../utils/whatsappHelper'
import { getAssetUrl } from '../../utils/assetHelper'

export default function Hero() {
  const featuredArtwork = artworksData.find((a) => a.featured) || artworksData[0]
  const whatsappUrl = buildQuickWhatsAppLink()

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#d4af37]/10 via-[#b89326]/5 to-transparent rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#d4af37]/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Brand Statement & Actions */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Status & Artist Moniker */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191b22] border border-[#d4af37]/40 text-xs font-bold uppercase tracking-[0.2em] text-[#d4af37]">
                <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                <span>CHARI CREATIONS</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12141a] border border-[#232631] text-xs font-medium text-[#9ca3af]">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                <span>{artistData.status}</span>
              </div>
            </div>

            {/* Main Headline with Chari Creations Prominently Displayed */}
            <h1 className="font-serif-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f8f6f0] leading-[1.08]">
              Custom Art &amp; Realistic Portraits by{' '}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89326] bg-clip-text text-transparent underline decoration-[#d4af37]/30 decoration-wavy underline-offset-8">
                Chari Creations
              </span>
            </h1>

            {/* Subtitle / Artist Statement */}
            <p className="text-base sm:text-lg text-[#9ca3af] max-w-2xl font-light leading-relaxed">
              Elevating personal memories into timeless handcrafted artworks. Specializing in custom 
              <span className="text-[#f8f6f0] font-medium"> pencil portraits</span>, 
              <span className="text-[#f8f6f0] font-medium"> charcoal portraits</span>, 
              <span className="text-[#f8f6f0] font-medium"> customized portraits</span>, 
              <span className="text-[#f8f6f0] font-medium"> vibrant colour pencils</span>, and 
              <span className="text-[#f8f6f0] font-medium"> hyper-realistic drawings</span>.
            </p>

            {/* Strong Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#commission"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#0c0d10] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89326] hover:brightness-110 shadow-xl shadow-[#d4af37]/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Order Custom Artwork</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm font-semibold tracking-wide text-[#f8f6f0] bg-[#191b22] hover:bg-[#232631] border border-[#232631] transition-all duration-200 hover:border-[#d4af37]/50"
              >
                <Eye className="w-4 h-4 text-[#d4af37]" />
                <span>Explore Gallery</span>
              </a>
            </div>

            {/* Direct Social & Quick Contact Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-[#6b7280] font-semibold">
                Direct Connect:
              </span>
              
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12141a] hover:bg-[#25D366]/10 border border-[#25D366]/40 text-[#25D366] text-xs font-semibold transition-all hover:scale-105"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>WhatsApp: {artistData.socials.whatsappDisplay}</span>
              </a>

              <a
                href={artistData.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12141a] hover:bg-[#E1306C]/10 border border-[#E1306C]/40 text-[#E1306C] text-xs font-semibold transition-all hover:scale-105"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>@{artistData.socials.instagram}</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-[#232631]/70 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {artistData.stats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#f8f6f0]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#9ca3af] font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Art Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#d4af37]/30 via-transparent to-[#b89326]/30 rounded-3xl blur-xl opacity-70"></div>
              
              {/* Artwork Container */}
              <div className="relative bg-[#12141a] border border-[#232631] rounded-2xl overflow-hidden shadow-2xl p-3.5 group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#0c0d10]">
                  <img
                    src={getAssetUrl(featuredArtwork.image)}
                    alt={featuredArtwork.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Tags */}
                  <div className="absolute top-4 left-4 bg-[#0c0d10]/85 backdrop-blur-md border border-[#232631] px-3.5 py-1 rounded-full text-xs font-semibold text-[#d4af37] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Featured Masterpiece</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                      {featuredArtwork.categoryName}
                    </p>
                    <h3 className="font-serif-heading text-2xl font-bold text-[#f8f6f0] mt-0.5">
                      {featuredArtwork.title}
                    </h3>
                    <p className="text-xs text-[#9ca3af] mt-1 line-clamp-1">
                      {featuredArtwork.medium}
                    </p>
                  </div>
                </div>

                {/* Details Footer */}
                <div className="pt-3.5 px-2 flex items-center justify-between text-xs text-[#9ca3af]">
                  <span className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                    {featuredArtwork.dimensions}
                  </span>
                  <span className="text-[#f8f6f0] font-medium bg-[#191b22] px-2.5 py-1 rounded-md border border-[#232631]">
                    {featuredArtwork.hoursSpent} Handcrafted
                  </span>
                </div>
              </div>

              {/* Floating Likeness Guarantee Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#191b22]/95 backdrop-blur-md border border-[#232631] p-3.5 rounded-xl shadow-2xl hidden sm:flex items-center gap-3 max-w-[260px] text-left">
                <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#f8f6f0]">100% Likeness Guarantee</div>
                  <div className="text-[11px] text-[#9ca3af]">Approved by you before dispatch</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
