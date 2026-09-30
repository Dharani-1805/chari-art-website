import React, { useState } from 'react'
import { Sparkles, Maximize2, X, Clock, Layers, ArrowRight, MessageCircle } from 'lucide-react'
import artworksData from '../../data/artworks.json'
import { buildQuickWhatsAppLink } from '../../utils/whatsappHelper'

export default function GallerySection({ onSelectMediumForCommission }) {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeModalArt, setActiveModalArt] = useState(null)

  const categories = [
    { id: 'all', label: 'All Artworks' },
    { id: 'pencil', label: 'Pencil Portraits' },
    { id: 'charcoal', label: 'Charcoal Portraits' },
    { id: 'custom', label: 'Customized Portraits' },
    { id: 'colour-pencil', label: 'Colour Pencil Portraits' },
    { id: 'realistic', label: 'Hyper-Realistic Drawings' }
  ]

  const filteredArtworks = selectedCategory === 'all'
    ? artworksData
    : artworksData.filter(art => art.category === selectedCategory)

  const handleCommissionClick = (art) => {
    setActiveModalArt(null)
    if (onSelectMediumForCommission) {
      onSelectMediumForCommission(art.category)
    }
    const commissionSection = document.getElementById('commission')
    if (commissionSection) {
      commissionSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="gallery" className="py-24 bg-[#0c0d10] border-t border-[#191b22] relative">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Portfolio</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
            Original Artworks & Commissions
          </h2>
          <p className="text-base text-[#9ca3af]">
            Explore handcrafted works across graphite, deep charcoal, personalized customized portraits, vibrant colour pencils, and hyper-realistic drawings. Each piece is crafted with patient precision and archival-grade materials.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#d4af37] to-[#b89326] text-[#0c0d10] font-bold shadow-lg shadow-[#d4af37]/20 scale-105'
                  : 'bg-[#191b22] text-[#9ca3af] hover:text-[#f8f6f0] hover:bg-[#232631] border border-[#232631]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Artworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveModalArt(art)}
              className="group relative bg-[#12141a] rounded-2xl overflow-hidden border border-[#232631] hover:border-[#d4af37]/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10 cursor-pointer flex flex-col"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#08090b]">
                <img
                  src={art.image}
                  alt={art.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d10] via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Floating medium badge */}
                <div className="absolute top-3.5 left-3.5 bg-[#0c0d10]/85 backdrop-blur-md border border-[#232631] px-3 py-1 rounded-full text-[11px] font-medium text-[#d4af37]">
                  {art.categoryName}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0c0d10]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 bg-[#d4af37] text-[#0c0d10] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <Maximize2 className="w-3.5 h-3.5" />
                    Inspect Details
                  </span>
                </div>
              </div>

              {/* Artwork Information */}
              <div className="p-5 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#f8f6f0] group-hover:text-[#d4af37] transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] mt-1 line-clamp-2">
                    {art.medium}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#191b22] flex items-center justify-between text-xs text-[#6b7280]">
                  <span className="flex items-center gap-1.5 text-[#9ca3af]">
                    <Layers className="w-3.5 h-3.5 text-[#d4af37]" />
                    {art.dimensions}
                  </span>
                  <span className="flex items-center gap-1.5 text-[#9ca3af]">
                    <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
                    {art.hoursSpent}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Artwork Details Modal */}
      {activeModalArt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative bg-[#12141a] border border-[#232631] rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalArt(null)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#0c0d10]/80 border border-[#232631] text-[#9ca3af] hover:text-[#f8f6f0] flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left: Artwork View */}
            <div className="lg:w-7/12 bg-[#08090b] relative flex items-center justify-center p-4 sm:p-8 max-h-[50vh] lg:max-h-[92vh] overflow-hidden">
              <img
                src={activeModalArt.image}
                alt={activeModalArt.title}
                className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Right: Detailed Story & Commission Trigger */}
            <div className="lg:w-5/12 p-6 sm:p-8 overflow-y-auto text-left flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold text-[#d4af37]">
                  {activeModalArt.categoryName} • {activeModalArt.year}
                </div>

                <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#f8f6f0]">
                  {activeModalArt.title}
                </h3>

                <p className="text-xs text-[#d4af37] font-medium uppercase tracking-wider">
                  {activeModalArt.commissionType}
                </p>

                <p className="text-sm text-[#9ca3af] leading-relaxed">
                  {activeModalArt.description}
                </p>

                {/* Technical Specifications */}
                <div className="bg-[#191b22]/70 rounded-xl p-4 border border-[#232631] space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#6b7280]">Medium:</span>
                    <span className="text-[#d1d5db] font-medium text-right max-w-[200px]">{activeModalArt.medium}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#232631]/60 pt-2">
                    <span className="text-[#6b7280]">Canvas Size:</span>
                    <span className="text-[#d1d5db] font-medium">{activeModalArt.dimensions}</span>
                  </div>
                  <div className="flex justify-between border-t border-[#232631]/60 pt-2">
                    <span className="text-[#6b7280]">Handcraft Time:</span>
                    <span className="text-[#d1d5db] font-medium">{activeModalArt.hoursSpent}</span>
                  </div>
                </div>
              </div>

              {/* Commission CTAs */}
              <div className="pt-4 border-t border-[#232631] space-y-3">
                <button
                  onClick={() => handleCommissionClick(activeModalArt)}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89326] text-[#0c0d10] font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg shadow-[#d4af37]/20 transition-transform active:scale-95 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Order Similar Custom Piece</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={buildQuickWhatsAppLink(`Hello Chari! I am admiring your artwork "${activeModalArt.title}" (${activeModalArt.categoryName}) and would love to know more about commissioning a similar piece.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp about this Piece</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  )
}
