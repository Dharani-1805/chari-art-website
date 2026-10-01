import React from 'react'
import {
  Sparkles,
  Pencil,
  Palette,
  Eye,
  ArrowRight,
  CheckCircle2,
  Tag,
  Flame,
  Layers
} from 'lucide-react'
import { getAssetUrl } from '../../utils/assetHelper'

export default function ServicesSection({ onSelectMediumForCommission }) {
  const services = [
    {
      id: 'pencil',
      title: 'Pencil Portraits',
      subtitle: 'Classic Graphite on Archival Bristol Paper',
      sampleImage: '/artworks/pencil-portrait-youth.jpg',
      icon: Pencil,
      badge: 'Most Popular',
      originalPrice: '₹1,200',
      discountedPrice: '₹1,080',
      features: [
        'Rendered with Staedtler Mars Lumograph & Faber-Castell 9000',
        'Subtle skin pores, hair speculars & depth of emotion',
        'Sealed with protective fixative to prevent smudging',
        'Ideal for solo portraits, parent gifts, and memorials'
      ]
    },
    {
      id: 'charcoal',
      title: 'Charcoal Portraits',
      subtitle: 'Atmospheric Chiaroscuro with Velvet Blacks',
      sampleImage: '/artworks/tirupati-balaji-artwork.jpg',
      icon: Flame,
      badge: 'Velvet Contrast',
      originalPrice: '₹1,350',
      discountedPrice: '₹1,215',
      features: [
        'Willow & vine charcoal layered with deep carbon pencils',
        'Dramatic Italian chiaroscuro contrast & matte blacks',
        'Smooth blending stump gradients with soft aura vignettes',
        'Ideal for emotive expressions, tribute art & fine collectors'
      ]
    },
    {
      id: 'custom',
      title: 'Customized Portraits',
      subtitle: 'Bespoke Compositions Merging Your Memories',
      sampleImage: '/artworks/customized-portrait.jpg',
      icon: Layers,
      badge: 'Personalized',
      originalPrice: '₹1,350',
      discountedPrice: '₹1,215',
      features: [
        'Merge people from different reference photos seamlessly',
        'Custom floral motifs, personalized dates & scenic motifs',
        'Personal composition consultation directly with artist Chari',
        'Ideal for wedding anniversaries, memorials & milestone gifts'
      ]
    },
    {
      id: 'colour-pencil',
      title: 'Colour Pencil Portraits',
      subtitle: 'Vibrant Multi-Layered Oil & Wax Based Artwork',
      sampleImage: '/artworks/virat-kohli-colour-pencil.jpg',
      icon: Palette,
      badge: 'Vibrant & Warm',
      originalPrice: '₹1,500',
      discountedPrice: '₹1,350',
      features: [
        'Faber-Castell Polychromos & Caran d’Ache Luminance',
        '30+ blended layers for glowing, lifelike skin tones',
        'Acid-free 100% cotton heavyweight paper (Stonehenge)',
        'Ideal for weddings, child portraits, and anniversaries'
      ]
    },
    {
      id: 'realistic',
      title: 'Hyper-Realistic Drawings',
      subtitle: 'Ultra-Fine Micro-Detail Capturing Every Subtle Nuance',
      sampleImage: '/artworks/mother-teresa-drawing.jpg',
      icon: Eye,
      badge: 'Exhibition Grade',
      originalPrice: '₹2,000',
      discountedPrice: '₹1,800',
      features: [
        'Intricate micro-textures, reflections, and individual fine hair',
        'Italian chiaroscuro lighting technique with velvet blacks',
        'High-density shading for dramatic depth & photo-likeness',
        'Ideal for statement centerpieces and character portraits'
      ]
    }
  ]

  const handleServiceSelect = (serviceId) => {
    if (onSelectMediumForCommission) {
      onSelectMediumForCommission(serviceId)
    }
    const commissionSection = document.getElementById('commission')
    if (commissionSection) {
      commissionSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-24 bg-[#08090b] border-t border-[#191b22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Custom Art Services &amp; Creations</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
            Tailored Art Services for Every Occasion
          </h2>
          <p className="text-base text-[#9ca3af]">
            Whether you want an intimate graphite portrait, rich charcoal artwork, bespoke customized tribute, vibrant colour drawing, or a hyper-realistic masterpiece, Chari Creations brings dedication and heart to every stroke.
          </p>

          {/* 10% Discount Special Banner */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/30 text-xs sm:text-sm text-[#25D366] font-semibold mt-2">
            <Tag className="w-4 h-4 shrink-0" />
            <span>Special Offer: 10% Instant Discount Applied to All Drawing Categories!</span>
          </div>
        </div>

        {/* Services Grid (5 Categories) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.id}
                className="bg-[#12141a] border border-[#232631] hover:border-[#d4af37]/50 rounded-2xl p-5 sm:p-6 text-left transition-all duration-300 hover:shadow-2xl hover:shadow-[#d4af37]/10 flex flex-col justify-between group"
              >
                <div>
                  {/* Sample Artwork Image Preview */}
                  <div className="relative aspect-[16/10] mb-4 rounded-xl overflow-hidden bg-[#0c0d10] border border-[#232631]">
                    <img
                      src={getAssetUrl(svc.sampleImage)}
                      alt={svc.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-transparent to-transparent opacity-50"></div>
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-[#25D366] text-[#0c0d10] shadow-md font-sans">
                        10% OFF
                      </span>
                    </div>
                  </div>

                  {/* Top Bar: Icon & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#191b22] border border-[#232631] text-[#d4af37] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#d4af37]/10 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-[#191b22] text-[#d4af37] border border-[#232631]">
                      {svc.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="font-serif-heading text-xl font-bold text-[#f8f6f0] group-hover:text-[#d4af37] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#9ca3af] mt-1 mb-4">
                    {svc.subtitle}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2 text-xs text-[#d1d5db]">
                    {svc.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer: Price & CTA */}
                <div className="pt-5 mt-5 border-t border-[#191b22] flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs line-through text-[#6b7280] font-medium">
                        {svc.originalPrice}
                      </span>
                      <span className="text-[10px] text-[#25D366] font-bold">10% OFF</span>
                    </div>
                    <span className="font-serif-heading text-xl font-bold text-[#f8f6f0]">
                      {svc.discountedPrice}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleServiceSelect(svc.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-[#0c0d10] bg-gradient-to-r from-[#d4af37] to-[#b89326] hover:brightness-110 shadow-md shadow-[#d4af37]/20 transition-all group-hover:scale-105 cursor-pointer"
                  >
                    <span>Order Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
