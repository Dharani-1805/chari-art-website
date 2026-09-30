import React, { useState, useRef } from 'react'
import {
  Sparkles,
  Upload,
  X,
  Check,
  MessageCircle,
  ShieldCheck,
  Send,
  Copy,
  Image as ImageIcon
} from 'lucide-react'
import confetti from 'canvas-confetti'
import pricingData from '../../data/pricing.json'
import artistData from '../../data/artist.json'
import { calculateArtworkPrice } from '../../utils/priceEngine'
import { buildWhatsAppCommissionLink } from '../../utils/whatsappHelper'

export default function CustomOrderSection({ preselectedMedium }) {
  // Commission state
  const [selectedMedium, setSelectedMedium] = useState(preselectedMedium || 'pencil')
  const [prevPropMedium, setPrevPropMedium] = useState(preselectedMedium)
  const [selectedSize, setSelectedSize] = useState('A4')
  const [subjectsCount, setSubjectsCount] = useState(1)
  const [selectedDelivery, setSelectedDelivery] = useState('standard')

  // Adjust state upon prop change without useEffect cascade
  if (preselectedMedium && preselectedMedium !== prevPropMedium) {
    setPrevPropMedium(preselectedMedium)
    setSelectedMedium(preselectedMedium)
  }

  // Reference photos state
  const [uploadedPhotos, setUploadedPhotos] = useState([])
  const [uploadError, setUploadError] = useState('')
  const fileInputRef = useRef(null)

  // Client info state
  const [clientName, setClientName] = useState('')
  const [clientPhone, setClientPhone] = useState('')
  const [clientNotes, setClientNotes] = useState('')
  const [copySuccess, setCopySuccess] = useState(false)

  // Calculate live dynamic price
  const priceBreakdown = calculateArtworkPrice({
    mediumId: selectedMedium,
    sizeId: selectedSize,
    subjectsCount,
    deliveryId: selectedDelivery
  })

  // Handle image upload & preview
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || [])
    setUploadError('')

    if (files.length + uploadedPhotos.length > 5) {
      setUploadError('You can upload up to 5 reference photos.')
      return
    }

    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        setUploadError('Please select valid image files (JPG, PNG, WEBP).')
        return
      }
      if (file.size > 15 * 1024 * 1024) {
        setUploadError(`File ${file.name} exceeds 15MB size limit.`)
        return
      }

      const reader = new FileReader()
      reader.onload = (event) => {
        setUploadedPhotos((prev) => [
          ...prev,
          {
            id: Math.random().toString(36).substring(7),
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
            dataUrl: event.target.result
          }
        ])
      }
      reader.readAsDataURL(file)
    }
  }

  const removePhoto = (id) => {
    setUploadedPhotos((prev) => prev.filter((p) => p.id !== id))
  }

  // Handle WhatsApp launch
  const handleWhatsAppOrder = () => {
    const { url } = buildWhatsAppCommissionLink({
      clientName,
      clientPhone,
      calculatedPrice: priceBreakdown,
      customNotes: clientNotes,
      referenceCount: uploadedPhotos.length
    })

    // Confetti celebration
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    })

    window.open(url, '_blank')
  }

  // Handle copy summary
  const handleCopySummary = () => {
    const { plainText } = buildWhatsAppCommissionLink({
      clientName,
      clientPhone,
      calculatedPrice: priceBreakdown,
      customNotes: clientNotes,
      referenceCount: uploadedPhotos.length
    })

    navigator.clipboard.writeText(plainText).then(() => {
      setCopySuccess(true)
      setTimeout(() => setCopySuccess(false), 3000)
    })
  }

  return (
    <section id="commission" className="py-24 bg-[#08090b] relative">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#191b22] border border-[#232631] text-xs font-semibold uppercase tracking-widest text-[#d4af37]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Custom Commission Studio</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-bold text-[#f8f6f0] tracking-tight">
            Design Your Custom Artwork & Instant Quote
          </h2>
          <p className="text-base text-[#9ca3af]">
            Select your preferred medium and canvas size. Upload your reference photos for an immediate price estimate and direct consultation with Chari.
          </p>
        </div>

        {/* Builder Layout: Two Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Options (7 Cols) */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* Step 1: Medium Selection */}
            <div className="space-y-4">
              <label className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center text-xs font-bold">1</span>
                <span>Select Art Medium</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {pricingData.mediums.map((med) => {
                  const isSelected = selectedMedium === med.id
                  const discountedBase = Math.round(med.basePrice * 0.9)
                  return (
                    <button
                      key={med.id}
                      type="button"
                      onClick={() => setSelectedMedium(med.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 relative cursor-pointer ${
                        isSelected
                          ? 'bg-[#191b22] border-[#d4af37] shadow-lg shadow-[#d4af37]/15 ring-1 ring-[#d4af37]'
                          : 'bg-[#12141a] border-[#232631] hover:border-[#343846]'
                      }`}
                    >
                      <div className="flex gap-3 items-center">
                        {med.sampleImage && (
                          <img
                            src={med.sampleImage}
                            alt={med.name}
                            className="w-13 h-13 rounded-lg object-cover object-top border border-[#232631] shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <span className="font-serif-heading text-sm sm:text-base font-bold text-[#f8f6f0] truncate">
                              {med.name}
                            </span>
                            {med.tag && (
                              <span className="text-[9px] uppercase font-semibold px-1.5 py-0.5 rounded-full bg-[#0c0d10] text-[#d4af37] border border-[#232631] shrink-0 ml-1">
                                {med.tag}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-[#9ca3af] leading-tight line-clamp-2">
                            {med.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-[#232631]/70 flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs text-[#6b7280] line-through">
                            {pricingData.currency.symbol}{med.basePrice.toLocaleString('en-IN')}
                          </span>
                          <span className="font-serif-heading text-sm font-bold text-[#f8f6f0]">
                            {pricingData.currency.symbol}{discountedBase.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-[10px] font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-0.5 rounded-full border border-[#25D366]/30">
                          10% OFF
                        </span>
                      </div>

                      {isSelected && (
                        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-[#d4af37] text-[#0c0d10] flex items-center justify-center">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 2: Size & Canvas */}
            <div className="space-y-4">
              <label className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center text-xs font-bold">2</span>
                <span>Canvas Size & Dimensions</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {pricingData.sizes.map((s) => {
                  const isSelected = selectedSize === s.id
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSize(s.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all duration-200 relative cursor-pointer ${
                        isSelected
                          ? 'bg-[#191b22] border-[#d4af37] ring-1 ring-[#d4af37] shadow-md'
                          : 'bg-[#12141a] border-[#232631] hover:border-[#343846]'
                      }`}
                    >
                      {s.recommended && (
                        <span className="absolute -top-2.5 right-3 text-[10px] bg-[#d4af37] text-[#0c0d10] font-bold px-2 py-0.5 rounded-full shadow">
                          Popular Choice
                        </span>
                      )}
                      <div className="font-bold text-sm text-[#f8f6f0]">
                        {s.label}
                      </div>
                      <div className="text-[11px] text-[#d4af37] mt-0.5">
                        {s.dimensions}
                      </div>
                      <p className="text-[11px] text-[#9ca3af] mt-2 line-clamp-2">
                        {s.description}
                      </p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 3: Subjects / Faces */}
            <div className="space-y-3">
              <label className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center text-xs font-bold">3</span>
                <span>Number of Subjects (Faces)</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {pricingData.subjects.map((sub) => (
                  <button
                    key={sub.count}
                    type="button"
                    onClick={() => setSubjectsCount(sub.count)}
                    className={`py-3 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                      subjectsCount === sub.count
                        ? 'bg-[#191b22] border-[#d4af37] text-[#f8f6f0] font-bold ring-1 ring-[#d4af37]'
                        : 'bg-[#12141a] border-[#232631] text-[#9ca3af] hover:text-[#f8f6f0]'
                    }`}
                  >
                    <div>{sub.label.split(' ')[0]} {sub.label.split(' ')[1]}</div>
                    {sub.priceAdd > 0 ? (
                      <span className="text-[10px] text-[#d4af37]">+{pricingData.currency.symbol}{sub.priceAdd}</span>
                    ) : (
                      <span className="text-[10px] text-[#6b7280]">Included</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Delivery & Safe Packaging */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center text-xs font-bold">4</span>
                  <span>Timeline &amp; Delivery</span>
                </label>
                <span className="text-[11px] text-[#25D366] font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Rigid damage-proof packaging included
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pricingData.delivery.map((del) => {
                  const isSelected = selectedDelivery === del.id
                  return (
                    <button
                      key={del.id}
                      type="button"
                      onClick={() => setSelectedDelivery(del.id)}
                      className={`w-full p-3 rounded-xl text-left text-xs border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#191b22] border-[#d4af37] text-[#f8f6f0] ring-1 ring-[#d4af37]'
                          : 'bg-[#12141a] border-[#232631] text-[#9ca3af] hover:text-[#f8f6f0]'
                      }`}
                    >
                      <div className="font-semibold text-[#f8f6f0] flex justify-between">
                        <span>{del.label}</span>
                        {del.price > 0 ? (
                          <span className="text-[#d4af37]">+{pricingData.currency.symbol}{del.price}</span>
                        ) : (
                          <span className="text-[#6b7280]">Free Standard</span>
                        )}
                      </div>
                      <p className="text-[11px] text-[#6b7280] mt-1">{del.timeline}</p>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Step 5: Reference Photo Upload */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center text-xs font-bold">5</span>
                  <span>Upload Reference Photos ({uploadedPhotos.length}/5)</span>
                </label>
                <span className="text-[11px] text-[#9ca3af]">High-res closeups work best</span>
              </div>

              {/* Upload Dropzone */}
              <div
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-[#232631] hover:border-[#d4af37]/60 bg-[#12141a]/60 hover:bg-[#191b22]/80 rounded-2xl p-6 text-center transition-all cursor-pointer group"
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  multiple
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-full bg-[#191b22] group-hover:bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center mx-auto mb-3 transition-colors">
                  <Upload className="w-6 h-6" />
                </div>
                <div className="text-sm font-medium text-[#f8f6f0]">
                  Click or drag reference photos here
                </div>
                <p className="text-xs text-[#6b7280] mt-1">
                  Supports JPG, PNG, WEBP (Up to 15MB each). You can also send them directly via WhatsApp!
                </p>
              </div>

              {uploadError && (
                <div className="text-xs text-red-400 bg-red-950/30 p-2.5 rounded-lg border border-red-800/50">
                  {uploadError}
                </div>
              )}

              {/* Uploaded Thumbnails Preview */}
              {uploadedPhotos.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {uploadedPhotos.map((photo) => (
                    <div
                      key={photo.id}
                      className="relative rounded-xl overflow-hidden border border-[#232631] bg-[#12141a] group"
                    >
                      <img
                        src={photo.dataUrl}
                        alt="Reference"
                        className="w-full h-24 object-cover"
                      />
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation()
                          removePhoto(photo.id)
                        }}
                        className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600/90 text-white flex items-center justify-center hover:bg-red-500 transition-colors shadow"
                        aria-label="Remove photo"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                      <div className="p-1.5 text-[10px] text-[#9ca3af] truncate bg-[#0c0d10]/80">
                        {photo.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Step 6: Client Contact Details & Notes */}
            <div className="space-y-4 pt-2">
              <label className="text-sm font-semibold uppercase tracking-wider text-[#d4af37] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center text-xs font-bold">6</span>
                <span>Your Contact Details &amp; Special Notes</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#9ca3af] block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    placeholder="e.g. Priya Sharma"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-[#12141a] border border-[#232631] focus:border-[#d4af37] rounded-xl px-4 py-3 text-sm text-[#f8f6f0] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#9ca3af] block mb-1">WhatsApp / Phone Number</label>
                  <input
                    type="tel"
                    placeholder="e.g. +91 95058 69543"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-[#12141a] border border-[#232631] focus:border-[#d4af37] rounded-xl px-4 py-3 text-sm text-[#f8f6f0] outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#9ca3af] block mb-1">
                  Story, Occasion, or Custom Details (Optional)
                </label>
                <textarea
                  rows="3"
                  placeholder="e.g. This is for my parents' anniversary on May 15th. Please combine two separate photos into one portrait, focusing on my mother's smile..."
                  value={clientNotes}
                  onChange={(e) => setClientNotes(e.target.value)}
                  className="w-full bg-[#12141a] border border-[#232631] focus:border-[#d4af37] rounded-xl px-4 py-3 text-sm text-[#f8f6f0] outline-none transition-colors"
                ></textarea>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Live Price Calculator Summary (5 Cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="bg-[#12141a] border border-[#232631] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left relative overflow-hidden">
              
              {/* Gold gradient top border accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89326]"></div>

              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#d4af37] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Commission Estimate</span>
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#f8f6f0] mt-1">
                  Order Summary
                </h3>
              </div>

              {/* Breakdown List */}
              <div className="space-y-3.5 text-xs text-[#9ca3af] border-y border-[#232631] py-5">
                
                <div className="flex justify-between items-center">
                  <span>Selected Medium:</span>
                  <span className="text-[#f8f6f0] font-semibold">{priceBreakdown.medium.name}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Canvas Size:</span>
                  <span className="text-[#f8f6f0] font-semibold">{priceBreakdown.size.label}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Base Artwork Crafting:</span>
                  <span className="text-[#f8f6f0] font-medium">
                    {priceBreakdown.currencySymbol}{priceBreakdown.artworkBaseCost.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Subjects / Faces:</span>
                  <span className="text-[#f8f6f0] font-medium">
                    {priceBreakdown.extraSubjectsCost > 0
                      ? `+${priceBreakdown.currencySymbol}${priceBreakdown.extraSubjectsCost.toLocaleString('en-IN')}`
                      : 'Included (1 Person)'}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span>Delivery Speed:</span>
                  <span className="text-[#f8f6f0] font-medium">
                    {priceBreakdown.deliveryCost > 0
                      ? `+${priceBreakdown.currencySymbol}${priceBreakdown.deliveryCost.toLocaleString('en-IN')}`
                      : 'Standard Included'}
                  </span>
                </div>

                {/* Subtotal & Discount Rows */}
                <div className="pt-2 border-t border-[#232631]/60 flex justify-between items-center font-medium">
                  <span>Subtotal:</span>
                  <span className="text-[#f8f6f0]">{priceBreakdown.formattedSubtotal}</span>
                </div>

                <div className="flex justify-between items-center text-[#25D366] font-semibold">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    Special Discount (10% OFF):
                  </span>
                  <span>-{priceBreakdown.formattedDiscountAmount}</span>
                </div>

                {uploadedPhotos.length > 0 && (
                  <div className="flex justify-between items-center text-[#25D366] pt-1">
                    <span className="flex items-center gap-1">
                      <ImageIcon className="w-3.5 h-3.5" />
                      Reference Photos:
                    </span>
                    <span className="font-semibold">{uploadedPhotos.length} ready to attach</span>
                  </div>
                )}

              </div>

              {/* Total Price Display */}
              <div className="pt-1 space-y-1">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#9ca3af]">Estimated Quote</div>
                    <div className="text-[11px] text-[#6b7280]">All taxes & archival fixative included</div>
                  </div>
                  <div className="text-right">
                    <div className="font-serif-heading text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#d4af37] via-[#f3e5ab] to-[#b89326] bg-clip-text text-transparent">
                      {priceBreakdown.formattedTotal}
                    </div>
                  </div>
                </div>

                {priceBreakdown.discountAmount > 0 && (
                  <div className="text-right text-[11px] font-semibold text-[#25D366]">
                    🎉 You save {priceBreakdown.formattedDiscountAmount} with 10% discount!
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppOrder}
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-bold tracking-wide shadow-xl shadow-[#25D366]/25 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Send Request on WhatsApp</span>
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#232631] bg-[#191b22] hover:bg-[#232631] text-[#9ca3af] hover:text-[#f8f6f0] text-xs font-medium transition-colors cursor-pointer"
                  >
                    {copySuccess ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#25D366]" />
                        <span className="text-[#25D366]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${artistData.socials.email}?subject=Custom%20Artwork%20Commission%20Inquiry%20from%20${encodeURIComponent(clientName || 'Collector')}&body=${encodeURIComponent(priceBreakdown.formattedTotal + ' Commission')}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-[#232631] bg-[#191b22] hover:bg-[#232631] text-[#9ca3af] hover:text-[#f8f6f0] text-xs font-medium transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Inquire via Email</span>
                  </a>
                </div>
              </div>

              {/* Guarantee footer */}
              <div className="pt-2 border-t border-[#191b22] flex items-center gap-2.5 text-[11px] text-[#9ca3af]">
                <ShieldCheck className="w-4 h-4 text-[#d4af37] shrink-0" />
                <span>No advance payment required until reference photo & layout sketch are approved.</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
