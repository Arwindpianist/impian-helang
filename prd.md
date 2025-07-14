Here is a **Product Requirements Document (PRD)** and a corresponding **Minimum Viable Product (MVP) Scope** you can feed into **Cursor** or any other development assistant to streamline the website project for **Impian Helang Sdn Bhd**.

---

## 🧾 Product Requirements Document (PRD)

**Project Title**: Impian Helang Sdn Bhd Corporate Website
**Prepared for**: Impian Helang Sdn Bhd
**Prepared by**: \[Your Name]

---

### 1. Objective

To design and develop a professional, responsive, and HRD Corp-compliant website that:

* Establishes credibility for Impian Helang Sdn Bhd.
* Promotes its two key training programs.
* Improves client inquiries and conversions.
* Reflects its branding standards in color and typography.

---

### 2. Target Audience

* HR executives and training managers from Malaysian corporations.
* Professionals looking for soft skills or certification-based training.
* Returning or potential clients familiar with Rita Krishnan’s programs.

---

### 3. Key Features

| Feature                       | Description                                                 |
| ----------------------------- | ----------------------------------------------------------- |
| **Home Page**                 | Overview of company, featured courses, CTA buttons          |
| **Courses Page**              | Grid layout with Emotional Intelligence & Train The Trainer |
| **Trainer Profile**           | Dedicated profile page for Rita Krishnan                    |
| **HRD Corp Compliance**       | Visual badge and compliance info                            |
| **Contact Page**              | Google Map, business hours, contact form                    |
| **FAQ Section**               | Common client questions answered                            |
| **Course Calendar**           | Timeline of upcoming training sessions                      |
| **Downloadable PDFs**         | Brochure downloads for each course                          |
| **SEO & Meta Tags**           | Basic on-page SEO for Google indexing                       |
| **Mobile Responsive**         | Fully functional across devices                             |
| **Custom Font**               | Uses “Footlight MT Light” (fallback: Roboto Light)          |
| **Color Scheme**              | Blue primary, white/grey secondary                          |
| **Live Chat/WhatsApp Button** | (optional in MVP, configurable later)                       |

---

### 4. Design & Branding Guidelines

* **Color palette**:

  * Primary: #005BAC (Blue)
  * Secondary: #FFFFFF (White), #F5F5F5 (Light Gray)
* **Typography**:

  * Primary font: Footlight MT Light (or closest web-safe fallback)
* **Tone**: Professional, minimalist, corporate

---

### 5. Technical Requirements

* **Framework**: Next.js 14+ with App Router
* **Styling**: Tailwind CSS
* **Form Handling**: Client-side form with optional email API (e.g. Formspree, Supabase Edge Function, or Nodemailer)
* **Deployment**: Vercel
* **CMS**: Optional (Not required in MVP, but consider headless CMS for future scalability)
* **Font Loading**: Use custom font loader or link from a CDN

---

### 6. Performance

* Lighthouse Score: 90+ on mobile and desktop
* Responsive on all major viewports (mobile/tablet/desktop)
* Optimized images, lazy loading

---

### 7. SEO

* Title tags, meta descriptions per page
* Social preview cards (Open Graph)
* Sitemap.xml and robots.txt for indexing

---

## 🧪 MVP (Minimum Viable Product) Scope

### ✅ Included in MVP:

* Home Page (Company intro, Featured Courses, CTA)
* Courses Page with:

  * Emotional Intelligence (RM700)
  * Train The Trainer (RM2788)
  * Brochure Download (PDF placeholder)
* Trainer Page (Bio for Rita Krishnan)
* Contact Page (Google Map + Form)
* HRD Corp Certification Section (Logo + Explanation)
* FAQ Section (static)
* Fully Responsive Layout
* Footlight MT Light font (or fallback)
* Static navigation bar and footer
* SEO Meta Tags
* Deployment to Vercel

---

### ❌ Excluded from MVP (Post-launch Potential):

* Admin CMS for content updates
* Blog/News section
* Live Chat or WhatsApp integration
* Dynamic course calendar (MVP uses static layout)
* Form automation with CRM/email marketing
* Payment gateway

---

### 📂 Suggested Folder Structure (Next.js App Router)

```
/app
  /about
  /courses
  /trainer
  /contact
  /faq
  /components
  /public
    /assets
    /fonts
  layout.tsx
  globals.css
tailwind.config.ts
```

---

### 📌 Notes for Development

* Use `next/font/local` or link `<link>` in `layout.tsx` to load **Footlight MT Light**
* Use Tailwind’s `bg-[#005BAC]` for consistent blue branding
* Deploy to Vercel with environment setup ready for adding email API in phase 2
* Contact form can use simple API route handler or connect to Supabase Edge Function

---