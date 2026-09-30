# 🎨 Chari Creations — Custom Artworks & Portrait Website

A modern, high-performance, responsive portfolio and custom artwork ordering platform built for artist brand **Chari Creations**.

---

## 🌟 Key Features Built-In

1. **Editorial Gallery Experience**:
   - Filterable categories: **Pencil Portraits**, **Colour Pencil Portraits**, **Realistic Drawings**, **Custom Artworks**, and **Digital Artwork**.
   - Interactive high-resolution **Lightbox modal** with deep zoom, medium specs, hours spent, and a direct *"Order Similar Custom Piece"* action.

2. **Interactive Custom Commission Studio & Live Quote Calculator**:
   - **Medium Selector**: Graphite, Colour Pencil, Hyper-Realistic, Bespoke Concept, Digital Painting.
   - **Canvas Dimensions**: A5 Compact, A4 Standard (Popular), A3 Large, A2 Grand, and Digital Master File.
   - **Custom Specs**: Number of subjects/faces (1 to 4+), background complexity (minimal vs scenic), framing options, and standard vs priority rush delivery.
   - **Real-Time Dynamic Pricing**: Transparent live breakdown calculated on the fly.
   - **Drag-and-Drop Reference Photo Upload**: Multi-image preview, file size check (<15MB), thumbnail gallery with 1-click removal.

3. **1-Click WhatsApp & Social Bridge**:
   - **Direct WhatsApp Order Generator**: Formats the selected medium, size, subjects, framing, calculated quote, customer name, and reference photos into a pre-filled WhatsApp message URL.
   - **Floating Quick WhatsApp Chat Widget**: Always accessible on mobile & desktop.
   - **Instagram Integration**: Direct links to Chari's profile and media reels.

4. **Brand Trust & Artist Story**:
   - "Behind The Easel" 4-step creation roadmap (Reference Photo → Proportion Sketch → Rendering & Layering → UV Fixative & Safe Delivery).
   - "Meet The Artist" section highlighting archival tools (Faber-Castell Polychromos, Strathmore Bristol Board, iPad Pro).
   - Real collector testimonials with 5-star ratings.
   - Studio FAQ accordion answering client questions.

---

## 🚀 How to Run Locally

In your project directory:

```bash
# Start development server
npm run dev

# Or on Windows PowerShell if execution policies apply:
npm.cmd run dev
```

Visit `http://localhost:5173/` in your browser.

---

## 🛠️ How to Update Artworks & Pricing (Zero Code Needed!)

All website content is cleanly separated into JSON files inside `src/data/`:

### 1. Adding or Editing Artworks (`src/data/artworks.json`)
To add a new artwork to your portfolio, simply add a new object to the list:
```json
{
  "id": "art-10",
  "title": "Your Artwork Title",
  "category": "pencil", // "pencil", "colour-pencil", "realistic", "custom", or "digital"
  "categoryName": "Pencil Portraits",
  "medium": "Graphite 8B & Carbon Pencil on Strathmore Bristol",
  "dimensions": "A3 (11.7 × 16.5 inches)",
  "year": "2026",
  "hoursSpent": "30 Hours",
  "image": "https://your-image-url.jpg or /artworks/filename.jpg",
  "description": "Details about how you drew this piece...",
  "featured": true,
  "commissionType": "Portrait Commission"
}
```

### 2. Updating Prices & Options (`src/data/pricing.json`)
You can freely change base prices, face add-ons, framing rates, or currency:
- **`currency.symbol`**: Change `"₹"` to `"$"` or any currency.
- **`sizes[].basePrice`**: Adjust standard rates for A5, A4, A3, A2.
- **`mediums[].baseMultiplier`**: Fine-tune the price multiplier for colour pencil or hyper-realism.
- **`framing` & `delivery`**: Change frame costs and rush shipping fees.

### 3. Updating Artist Details & Socials (`src/data/artist.json`)
Update your WhatsApp number, Instagram handle, and bio:
- `socials.whatsapp`: `"919876543210"` (country code + phone number without symbols).
- `socials.instagram`: `"chari_art"`
- `socials.email`: `"your.email@gmail.com"`

---

## 🌐 Deploying to the Web for Free

You can deploy this website for free to **Vercel** or **Netlify**:

### Option A: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Sign in to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **"Deploy"**. Vercel will automatically build and publish your site with a free SSL certificate.

### Option B: Netlify
1. Run `npm run build` (generates the `dist/` folder).
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag the `dist` folder into the browser window.
3. Your site will be live instantly!
