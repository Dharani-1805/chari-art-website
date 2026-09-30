import React, { useState, useEffect } from 'react'
import { MessageCircle, Menu, X, Sparkles, ArrowRight } from 'lucide-react'
import { buildQuickWhatsAppLink } from '../../utils/whatsappHelper'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Artworks', href: '#gallery' },
    { label: 'Services', href: '#services' },
    { label: 'Custom Commission', href: '#commission' },
    { label: 'Process', href: '#process' },
    { label: 'The Artist', href: '#about' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ]

  const quickWhatsAppUrl = buildQuickWhatsAppLink()

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0c0d10]/90 backdrop-blur-md border-b border-[#232631]/80 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#d4af37] via-[#f3e5ab] to-[#b89326] p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-[#d4af37]/20">
              <div className="w-full h-full bg-[#0c0d10] rounded-full flex items-center justify-center">
                <span className="font-serif-heading text-sm font-bold text-[#f3e5ab] tracking-wider">CC</span>
              </div>
            </div>
            <div>
              <span className="font-serif-heading text-xl sm:text-2xl font-bold tracking-widest text-[#f8f6f0] block leading-none group-hover:text-[#d4af37] transition-colors">
                CHARI CREATIONS
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] font-medium">
                Custom Art &amp; Portraits
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] text-[#9ca3af] hover:text-[#d4af37] transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={quickWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200"
              title="Chat with Chari on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#commission"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-[#0c0d10] bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89326] hover:brightness-110 shadow-lg shadow-[#d4af37]/25 transition-all duration-200 hover:scale-105"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Custom Order</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#commission"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-semibold text-[#0c0d10] bg-[#d4af37]"
            >
              Order
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#9ca3af] hover:text-[#f8f6f0] hover:bg-[#191b22] focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 pb-6 border-t border-[#232631] bg-[#0c0d10]/95 backdrop-blur-xl rounded-2xl px-4 animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-wider text-[#d1d5db] hover:text-[#d4af37] py-2 border-b border-[#191b22]/80 flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6b7280]" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={quickWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366]/40 text-[#25D366] text-sm font-semibold bg-[#25D366]/5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href="#commission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89326] text-[#0c0d10] text-sm font-bold tracking-wider uppercase shadow-lg shadow-[#d4af37]/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Custom Artwork</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
