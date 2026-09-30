import React from 'react'
import { MessageCircle, Mail, Heart } from 'lucide-react'
import { InstagramIcon } from './BrandIcons'
import artistData from '../../data/artist.json'
import { buildQuickWhatsAppLink } from '../../utils/whatsappHelper'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  const whatsappUrl = buildQuickWhatsAppLink()

  return (
    <footer className="bg-[#08090b] border-t border-[#191b22] text-[#9ca3af] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#191b22] text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#b89326] p-[1.5px]">
                <div className="w-full h-full bg-[#0c0d10] rounded-full flex items-center justify-center">
                  <span className="font-serif-heading text-sm font-bold text-[#f3e5ab]">CC</span>
                </div>
              </div>
              <div>
                <span className="font-serif-heading text-2xl font-bold tracking-widest text-[#f8f6f0] block leading-none">
                  CHARI CREATIONS
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#d4af37] font-medium">
                  Custom Art &amp; Portraits
                </span>
              </div>
            </div>

            <p className="text-xs text-[#9ca3af] max-w-md leading-relaxed">
              Handcrafted portraiture celebrating human connection and memory. Custom pencil portraits, rich charcoal drawings, customized portraits, vibrant colour pencils, and hyper-realistic drawings crafted with genuine care and archival detail.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#12141a] border border-[#232631] text-[#25D366] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>

              <a
                href={artistData.socials.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#12141a] border border-[#232631] text-[#E1306C] hover:bg-[#E1306C] hover:text-white flex items-center justify-center transition-all duration-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${artistData.socials.email}`}
                className="w-9 h-9 rounded-full bg-[#12141a] border border-[#232631] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0c0d10] flex items-center justify-center transition-all duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f8f6f0]">
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Curated Artworks
                </a>
              </li>
              <li>
                <a href="#commission" className="hover:text-[#d4af37] transition-colors">
                  Custom Order & Pricing
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#d4af37] transition-colors">
                  Artistic Process
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#d4af37] transition-colors">
                  About Artist Chari
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#d4af37] transition-colors">
                  Client Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Art Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#f8f6f0]">
              Art Specialties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Pencil Portraits
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Charcoal Portraits
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Customized Portraits
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Colour Pencil Portraits
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#d4af37] transition-colors">
                  Hyper-Realistic Drawings
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6b7280] gap-4">
          <div>
            © {CURRENT_YEAR} Chari Creations. All rights reserved. Handcrafted custom artworks.
          </div>
          <div className="flex items-center gap-1.5 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#d4af37] fill-current" />
            <span>for art lovers & collectors worldwide</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
