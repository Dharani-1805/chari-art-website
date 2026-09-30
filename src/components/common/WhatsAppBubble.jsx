import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { buildQuickWhatsAppLink } from '../../utils/whatsappHelper'

export default function WhatsAppBubble() {
  const [showTooltip, setShowTooltip] = useState(true)
  const whatsappUrl = buildQuickWhatsAppLink('Hello Chari! I am interested in commissioning a custom artwork.')

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Tooltip Prompt */}
      {showTooltip && (
        <div className="relative bg-[#191b22] border border-[#232631] text-[#f8f6f0] text-xs py-2 px-3.5 rounded-2xl shadow-2xl flex items-center gap-2 max-w-[240px] animate-in fade-in slide-in-from-bottom-2">
          <span>Need custom art advice? Chat with Chari directly!</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#9ca3af] hover:text-white p-0.5 rounded-full"
            aria-label="Dismiss chat tip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-[#191b22] border-b border-r border-[#232631] rotate-45"></div>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Chari on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/40 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
        <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  )
}
