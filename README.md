# 🎨 Chari Creations — Custom Artworks & Realistic Portraits

Official portfolio and custom artwork commission platform for artist **Dharani Achari (Chari)** / **Chari Creations**. Handcrafted pencil portraits, deep charcoal studies, customized milestone portraits, vibrant colour pencil drawings, and hyper-realistic artworks.

Live Deployment (GitHub Pages): [https://dharani-1805.github.io/chari-art-website/](https://dharani-1805.github.io/chari-art-website/)  
Live Deployment (Render): [https://chari-art-website.onrender.com](https://chari-art-website.onrender.com)

---

## 🌟 Features

1. **Curated Editorial Gallery**:
   - Filterable art categories:
     - **Pencil Portraits** (Classic graphite on archival Bristol board)
     - **Charcoal Portraits** (Deep chiaroscuro and atmospheric textures)
     - **Customized Portraits** (Bespoke milestone and family compositions)
     - **Colour Pencil Portraits** (Vibrant polychromos / wax-oil pencil layering)
     - **Hyper-Realistic Drawings** (Museum-grade micro-detail)
   - Interactive high-resolution **Lightbox modal** with artwork medium specs, dimensions, hours spent, and direct custom commission trigger.

2. **Dynamic Commission Studio & Live Quote Calculator**:
   - **Interactive Medium Selector**: Real-time preview of medium cards and sample artworks with 10% discount badge.
   - **Canvas Dimensions**: A4 Standard (Recommended), A3 Large, A2 Grand.
   - **Subjects & Faces**: 1 Subject, 2 Subjects (Couple), 3 Subjects, 4+ Subjects (Group/Family).
   - **Delivery Speed**: Standard Crafting (7–10 days) or Priority Rush (3–5 days).
   - **Instant Transparent Pricing**: Automatic calculation with base rates and 10% discount applied live.
   - **Photo Upload**: Multi-image reference photo preview (<15MB) with 1-click removal.

3. **1-Click WhatsApp & Direct Social Connect**:
   - **WhatsApp Commission Order Generator**: Automatically compiles artwork choices, size, subjects, quote, reference count, and client story into a formatted WhatsApp inquiry.
   - **Floating Quick WhatsApp Chat Widget**: Always accessible on mobile & desktop.
   - **Direct Email & Instagram**: Connected to `mdharaniachari@gmail.com` and `@chari_.artz`.

4. **Artist Story & Craftsmanship**:
   - **Founder Profile**: Dharani Achari (Chari) biography, experience, and artistic philosophy.
   - **Archival Grade Materials Showcase**: Staedtler Mars Lumograph, Faber-Castell Polychromos, Strathmore Bristol Board, and UV protective sealant.
   - **Step-by-Step Process**: 4-stage creation roadmap from proportion sketch to safe packaging.
   - **Client Testimonials & FAQ**: Real client reviews and commission FAQs.

---

## 📂 Project Structure

```text
chari-art-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── artworks/               # High-resolution original artwork JPGs & SVGs
│   ├── favicon.svg             # Custom gold brand favicon
│   └── icons.svg               # SVG sprite definitions
├── src/
│   ├── assets/                 # Brand assets
│   ├── components/
│   │   ├── common/             # Navbar, Footer, WhatsAppBubble, BrandIcons
│   │   ├── contact/            # ContactSection, FAQ accordion
│   │   ├── gallery/            # GallerySection, Lightbox modal
│   │   ├── home/               # Hero, ServicesSection, AboutSection, Process, Testimonials
│   │   └── order/              # CustomOrderSection, Live Quote Calculator
│   ├── data/
│   │   ├── artist.json         # Bio, contact, socials, process steps
│   │   ├── artworks.json       # Gallery portfolio items metadata
│   │   ├── pricing.json        # Base prices, size multipliers, discount rules
│   │   └── testimonials.json   # Verified client reviews
│   ├── utils/
│   │   ├── assetHelper.js      # Base URL asset resolution for GitHub Pages
│   │   ├── priceEngine.js      # Dynamic quote calculation engine
│   │   └── whatsappHelper.js   # WhatsApp message link formatters
│   ├── App.css
│   ├── App.jsx
│   ├── index.css               # Tailwind CSS v4 styling & typography
│   └── main.jsx                # Application root entry
├── .env.example                # Safe environment configuration template
├── .gitignore                  # Git ignore rules for node_modules, build, secrets
├── .oxlintrc.json              # Oxlint fast linter configuration
├── index.html                  # HTML entry point with Cormorant Garamond font
├── package.json                # Project dependencies & build scripts
├── package-lock.json           # Locked dependency tree
├── vite.config.js              # Vite configuration (relative base path enabled)
└── README.md                   # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/Dharani-1805/chari-art-website.git

# Enter project directory
cd chari-art-website

# Install dependencies
npm install

# Start local development server
npm run dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your web browser.

---

## 🛠️ Build & Quality Checks

```bash
# Production build (creates optimized bundle in dist/)
npm run build

# Preview production build locally
npm run preview

# Run fast code linter
npm run lint
```

---

## 🌐 Deployment

### Option A: GitHub Pages (Automatic CI/CD)
This project is configured with a GitHub Actions workflow in `.github/workflows/deploy.yml`:
1. Push changes to the `main` branch:
   ```bash
   git push origin main
   ```
2. In your repository on GitHub:
   - Go to **Settings** > **Pages**
   - Under **Build and deployment** > **Source**, choose **GitHub Actions**
3. Live site: `https://dharani-1805.github.io/chari-art-website/`

### Option B: Render.com (Static Site)
Configured with `render.yaml`:
1. In Render Dashboard ([dashboard.render.com](https://dashboard.render.com)):
   - Click **New +** > **Static Site**
   - Connect repository `Dharani-1805/chari-art-website`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
2. Live site: `https://chari-art-website.onrender.com`

---

## 📬 Contact & Inquiries

- **Artist**: Dharani Achari (Chari)
- **Brand**: Chari Creations
- **Email**: [mdharaniachari@gmail.com](mailto:mdharaniachari@gmail.com)
- **WhatsApp**: [+91 95058 69543](https://wa.me/919505869543)
- **Instagram**: [@chari_.artz](https://instagram.com/chari_.artz)
