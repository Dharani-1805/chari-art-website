import artistData from '../data/artist.json'

/**
 * Builds formatted WhatsApp link and copy text for an artwork commission
 */
export function buildWhatsAppCommissionLink({
  clientName,
  clientPhone,
  calculatedPrice,
  customNotes,
  referenceCount = 0
}) {
  const phone = artistData.socials.whatsapp.replace(/[^0-9]/g, '')
  
  const textLines = [
    `🎨 *NEW CUSTOM ARTWORK COMMISSION INQUIRY*`,
    `----------------------------------------`,
    `👤 *Client Name:* ${clientName || 'Valued Art Collector'}`,
    clientPhone ? `📞 *Client Phone:* ${clientPhone}` : null,
    `🖌️ *Medium:* ${calculatedPrice.medium.name}`,
    `📐 *Size:* ${calculatedPrice.size.label} (${calculatedPrice.size.dimensions})`,
    `👥 *Subjects:* ${calculatedPrice.subjectOption.label}`,
    `⏱️ *Timeline:* ${calculatedPrice.deliveryOption.label} (${calculatedPrice.deliveryOption.timeline})`,
    calculatedPrice.discountAmount > 0
      ? `💰 *Estimated Total:* ${calculatedPrice.formattedTotal} (Includes 10% Special Discount! Saved ${calculatedPrice.formattedDiscountAmount})`
      : `💰 *Estimated Total:* ${calculatedPrice.formattedTotal}`,
    referenceCount > 0 ? `📷 *Reference Photos:* ${referenceCount} photo(s) ready to send in this chat` : null,
    customNotes ? `📝 *Special Requests/Story:* ${customNotes}` : null,
    `----------------------------------------`,
    `Hello Chari! I customized this artwork on the Chari Creations website and would love to confirm availability and discuss next steps!`
  ].filter(Boolean)

  const fullMessage = textLines.join('\n')
  const encodedMessage = encodeURIComponent(fullMessage)

  return {
    url: `https://wa.me/${phone}?text=${encodedMessage}`,
    plainText: fullMessage
  }
}

/**
 * Builds quick inquiry WhatsApp link
 */
export function buildQuickWhatsAppLink(customQuery = '') {
  const phone = artistData.socials.whatsapp.replace(/[^0-9]/g, '')
  const message = customQuery || `Hello Chari! I am visiting your Chari Creations art website and would like to ask a question regarding your custom artworks.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
}
