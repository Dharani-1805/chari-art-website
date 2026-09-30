import React, { useState } from 'react'
import { Sparkles, MessageCircle, Mail, ChevronDown, ChevronUp } from 'lucide-react'
import { InstagramIcon } from '../common/BrandIcons'
import artistData from '../../data/artist.json'
import { buildQuickWhatsAppLink } from '../../utils/whatsappHelper'

export default function ContactSection() {
  const [openFaq, setOpenFaq] = useState(0)

  const faqs = [
    {
      q: 'How do I choose the best reference photo?',
      a: 'Choose a clear, well-lit photo where facial details (eyes, nose, smile, hair texture) are clearly visible. Natural daylight portraits work best. Avoid heavily filtered or blurry photos. If unsure, you can upload multiple photos and Chari will advise you on the most suitable one!'
    },
    {
      q: 'Can you combine people from different photos into one portrait?',
      a: 'Yes, absolutely! Many of our most treasured commissions are composite portraits—combining family members, couple photos, or adding a late grandparent with a newborn child. Chari adjusts the lighting and proportions so they appear naturally together.'
    },
    {
      q: 'How long does a custom portrait take to complete?',
      a: 'Standard crafting takes approximately 7 to 10 business days depending on size and number of faces. If you need it sooner for a birthday or anniversary, our Priority Rush option delivers within 3 to 5 business days.'
    },
    {
      q: 'How is the artwork packaged for shipping?',
      a: 'Artworks are first coated with professional UV archival fixative to prevent smudging. They are protected with acid-free glassine paper, sandwiched between rigid heavy-duty wooden/cardboard protective layers, and wrapped in waterproof bubble wrap. Every domestic and international shipment comes with a live tracking number.'
    },
    {
      q: 'What is your payment process?',
      a: 'No full advance is needed. After you share your photo and we finalize the composition and size, a 50% initial booking deposit is made. The remaining 50% balance is paid only after you inspect and 100% approve the finished artwork preview photos/videos before dispatch.'
    }
  ]

  const whatsappUrl = buildQuickWhatsAppLink()

  return (
    <section id="contact" className="py-24 bg-[#08090b] border-t border-[#191b22] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Artist Connect</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
            Have Questions? Let's Talk Art.
          </h2>
          <p className="text-base text-[#9ca3af]">
            Whether you want a tailored consultation for a large project, advice on selecting a photo, or general inquiries, Chari is just a message away.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* WhatsApp Card */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#12141a] border border-[#232631] hover:border-[#25D366]/50 rounded-2xl p-6 text-left group transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#25D366]/10"
          >
            <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#f8f6f0] group-hover:text-[#25D366] transition-colors">
              Chat on WhatsApp
            </h3>
            <p className="text-xs text-[#9ca3af] mt-1.5 leading-relaxed">
              Fastest response! Send your photos, get instant feedback, and discuss your commission live.
            </p>
            <div className="mt-4 pt-3 border-t border-[#191b22] text-xs font-semibold text-[#25D366] flex items-center gap-1.5">
              <span>{artistData.socials.whatsappDisplay}</span>
              <span>→</span>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href={artistData.socials.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#12141a] border border-[#232631] hover:border-[#E1306C]/50 rounded-2xl p-6 text-left group transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#E1306C]/10"
          >
            <div className="w-12 h-12 rounded-xl bg-[#E1306C]/10 text-[#E1306C] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#f8f6f0] group-hover:text-[#E1306C] transition-colors">
              Follow on Instagram
            </h3>
            <p className="text-xs text-[#9ca3af] mt-1.5 leading-relaxed">
              Watch timelapse drawing reels, pencil shading techniques, and live studio stories.
            </p>
            <div className="mt-4 pt-3 border-t border-[#191b22] text-xs font-semibold text-[#E1306C] flex items-center gap-1.5">
              <span>@{artistData.socials.instagram}</span>
              <span>→</span>
            </div>
          </a>

          {/* Email Card */}
          <a
            href={`mailto:${artistData.socials.email}?subject=Chari%20Art%20Studio%20Inquiry`}
            className="bg-[#12141a] border border-[#232631] hover:border-[#d4af37]/50 rounded-2xl p-6 text-left group transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#d4af37]/10"
          >
            <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-serif-heading text-xl font-bold text-[#f8f6f0] group-hover:text-[#d4af37] transition-colors">
              Direct Email
            </h3>
            <p className="text-xs text-[#9ca3af] mt-1.5 leading-relaxed">
              Ideal for corporate inquiries, gallery exhibitions, or formal commission briefs.
            </p>
            <div className="mt-4 pt-3 border-t border-[#191b22] text-xs font-semibold text-[#d4af37] flex items-center gap-1.5">
              <span>{artistData.socials.email}</span>
              <span>→</span>
            </div>
          </a>

        </div>

        {/* Studio FAQ Accordion */}
        <div className="max-w-3xl mx-auto text-left">
          <div className="text-center mb-8">
            <h3 className="font-serif-heading text-2xl font-bold text-[#f8f6f0]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-[#9ca3af] mt-1">
              Everything you need to know about commissioning an artwork.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className="bg-[#12141a] border border-[#232631] rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-[#f8f6f0] hover:text-[#d4af37] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#d4af37] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#6b7280] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm text-[#9ca3af] leading-relaxed border-t border-[#191b22] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
