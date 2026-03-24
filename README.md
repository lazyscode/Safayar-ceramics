# Safayar Ceramics — Next.js Website

Modern rebuild of [safayarceramics.com](https://www.safayarceramics.com) using **Next.js 14 App Router**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **React Hook Form + Zod**.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | **Next.js 14** (App Router, SSG/SSR) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS v3** |
| Animations | **Framer Motion** |
| Forms | **React Hook Form + Zod** |
| Icons | **Lucide React** |
| Deployment | **Vercel** (recommended) |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, stats, about preview, featured products, applications, interiors |
| `/about` | Company profile — full content, milestones, stats |
| `/mission` | Mission & Vision — values, promise |
| `/technology` | Technical specs — spec meters, feature grid, comparison table |
| `/gallery` | 97+ product images — filterable by category, searchable, lightbox |
| `/interior` | 16 interior application photos — masonry grid, lightbox |
| `/contact` | Full enquiry form with Zod validation + FAQ + map |
| `404` | Custom not-found page |

---

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production
```bash
npm run build
npm start
```

---

## Deploy to Vercel (Recommended)

### Option A — Vercel CLI
```bash
npm install -g vercel
vercel
```

### Option B — GitHub → Vercel
1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → **New Project**
3. Import the repository
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy**

Vercel handles build, CDN, SSL, and automatic deploys on push.

---

## Deploy to Netlify

```bash
npm run build
# Then drag the .next folder to Netlify drop zone
# Or connect GitHub repo with build command: npm run build
```

---

## SEO Features

- **Next.js Metadata API** — per-page `<title>`, `<meta description>`, `og:*`, `twitter:*`
- **Canonical URLs** — every page has canonical link
- **JSON-LD Structured Data** — Organization schema in root layout
- **XML Sitemap** — auto-generated at `/sitemap.xml`
- **Robots.txt** — at `/robots.txt`
- **OpenGraph** — title, description, image for social sharing
- **Semantic HTML** — proper heading hierarchy, `<nav>`, `<main>`, `<footer>`, `<article>`
- **Alt text** — all images have descriptive alt attributes
- **Aria labels** — navigation and interactive elements

---

## Contact Form Validation (Zod Schema)

| Field | Validation |
|-------|-----------|
| First Name | Required, 2–50 chars, letters only |
| Last Name | Required, 2–50 chars, letters only |
| Company | Optional, max 100 chars |
| Email | Required, valid email format |
| Phone | Optional, valid phone regex |
| Country | Required, 2–60 chars |
| Application | Required, select from list |
| Quantity | Optional free text |
| Message | Required, 10–1000 chars |
| Consent | Must be checked |

---

## Adding a Real Contact Form Backend

Replace the simulated submit in `src/app/contact/ContactForm.tsx`:

```ts
// Replace this:
await new Promise((resolve) => setTimeout(resolve, 1500));

// With a real API call:
const res = await fetch('/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
if (!res.ok) throw new Error('Failed');
```

Then create `src/app/api/contact/route.ts` with your email provider (Resend, SendGrid, Nodemailer, etc.)

---

## Image Sources

All images are loaded directly from `https://www.safayarceramics.com/img/` — no local copies needed. The `next.config.mjs` allows this domain in `remotePatterns`.

If you want to self-host images, download them and place in `/public/img/` and update `src/lib/products.ts`.

---

## Project Structure

```
safayar-next/
├── public/
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout + JSON-LD
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── not-found.tsx
│   │   ├── about/page.tsx
│   │   ├── mission/page.tsx
│   │   ├── technology/page.tsx
│   │   ├── gallery/
│   │   │   ├── page.tsx        # Server wrapper (SEO)
│   │   │   └── GalleryClient.tsx # Client: filter + lightbox
│   │   ├── interior/
│   │   │   ├── page.tsx
│   │   │   └── InteriorClient.tsx
│   │   └── contact/
│   │       ├── page.tsx
│   │       └── ContactForm.tsx # RHF + Zod form
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky nav with dropdowns
│   │   ├── Footer.tsx
│   │   ├── PageHeader.tsx      # Breadcrumb + title
│   │   ├── Lightbox.tsx        # Image lightbox
│   │   └── AnimatedSection.tsx # Framer Motion wrappers
│   └── lib/
│       ├── products.ts         # All 97 products + interior data
│       └── seo.ts              # buildMetadata helper
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```
