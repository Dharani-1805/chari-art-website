import pricingData from '../data/pricing.json'

/**
 * Calculates dynamic commission price estimate with 10% discount
 * @param {Object} options
 * @param {string} options.mediumId - Medium ID (pencil, charcoal, custom, colour-pencil, realistic)
 * @param {string} options.sizeId - Canvas size ID (A4, A3, A2)
 * @param {number} options.subjectsCount - Number of faces/subjects (1, 2, 3, 4)
 * @param {string} options.deliveryId - Delivery speed ID (standard, express)
 * @returns {Object} Price calculation breakdown
 */
export function calculateArtworkPrice({
  mediumId = 'pencil',
  sizeId = 'A4',
  subjectsCount = 1,
  deliveryId = 'standard'
}) {
  const currency = pricingData.currency
  const discountConfig = pricingData.discount || { enabled: true, percentage: 10 }
  const discountPercentage = discountConfig.enabled ? discountConfig.percentage : 0

  // Find medium (pencil: 1200, charcoal: 1350, custom: 1350, colour-pencil: 1500, realistic: 2000)
  const medium = pricingData.mediums.find(m => m.id === mediumId) || pricingData.mediums[0]
  const baseMediumPrice = medium.basePrice || 1200

  // Find size (A4 standard: 1.0 multiplier)
  const size = pricingData.sizes.find(s => s.id === sizeId) || pricingData.sizes[0]
  const sizeMultiplier = size.sizeMultiplier || 1.0

  // Base artwork cost adjusted by size
  const artworkBaseCost = Math.round(baseMediumPrice * sizeMultiplier)

  // Extra subjects add-on
  const subjectOption = pricingData.subjects.find(s => s.count === Number(subjectsCount)) || pricingData.subjects[0]
  const extraSubjectsCost = subjectOption.priceAdd || 0

  // Delivery speed add-on
  const deliveryOption = pricingData.delivery.find(d => d.id === deliveryId) || pricingData.delivery[0]
  const deliveryCost = deliveryOption.price || 0

  // Subtotal before discount
  const subtotal = artworkBaseCost + extraSubjectsCost + deliveryCost

  // 10% Discount calculation
  const discountAmount = Math.round(subtotal * (discountPercentage / 100))

  // Final total
  const total = subtotal - discountAmount

  // Discounted base price for medium preview
  const discountedMediumBasePrice = Math.round(baseMediumPrice * (1 - discountPercentage / 100))

  return {
    currencySymbol: currency.symbol,
    currencyCode: currency.code,
    medium,
    size,
    subjectOption,
    deliveryOption,
    baseMediumPrice,
    discountedMediumBasePrice,
    artworkBaseCost,
    extraSubjectsCost,
    deliveryCost,
    subtotal,
    formattedSubtotal: `${currency.symbol}${subtotal.toLocaleString('en-IN')}`,
    discountPercentage,
    discountAmount,
    formattedDiscountAmount: `${currency.symbol}${discountAmount.toLocaleString('en-IN')}`,
    total,
    formattedTotal: `${currency.symbol}${total.toLocaleString('en-IN')}`
  }
}
