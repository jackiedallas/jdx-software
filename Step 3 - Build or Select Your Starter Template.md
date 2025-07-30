# Step 3 – Build or Select Your Starter Template

The goal is to have a **reusable starting point** that helps you move fast, stay consistent, and avoid rebuilding from scratch for every client.

---

## 🔹 1. Choose a Template Strategy per Tier

### **Tier 1: LaunchPad Sites (Wix or Framer)**

Use the built-in templates and make your own clones.

**Option 1:** Start from a Wix or Framer template, remove filler sections, and customize for your brand.
**Option 2:** Create your own "base layout" with:

* Hero section
* About section
* Services block
* Contact form
* Footer with socials, legal, and contact

> ✅ Save this as a duplicateable template inside your Wix or Framer account

---

### **Tier 2: Growth Sites (Next.js + Tailwind CSS + CMS)**

Use or customize a **Next.js starter template** built with Tailwind and CMS support.

#### Recommended Starter Options

| Name                 | Stack                         | Notes                                    |
| -------------------- | ----------------------------- | ---------------------------------------- |
| **Tailwind UI**      | HTML + Tailwind               | Commercial, polished design blocks       |
| **shadcn/ui**        | React + Tailwind + Radix      | Great for form-heavy sites or dashboards |
| **Vercel Templates** | Next.js + CMS + Auth          | Free, scalable, and fast                 |
| **SaaS UI**          | React + Tailwind + CMS-ready  | Paid, but saves hours                    |
| **Notion + Super**   | Static site powered by Notion | Good for minimalist CMS sites            |

> ✅ Clone one of these, then customize global styles, typography, layout spacing, and content sections.

---

## 🔹 2. Customize It to Match JDX Standards

Whether it's Wix or code-based:

**Essentials to Set:**

* Header/nav with logo + call-to-action button
* Footer with links and contact
* Responsive layout (mobile-first)
* Default SEO tags (title, meta, OG image)
* Placeholder content with dummy text and imagery
* Light/dark mode support (optional)
* CMS fields pre-mapped for Sanity or Notion

> ✅ Save as a GitHub repo or project you can `npx create-jdx-site` from later

---

## 🔹 3. Set Up a Content Placeholder System

For Growth Sites, define your dummy structure for easy client previewing:

```txt
/pages
  index.tsx      // Home
  about.tsx      // About
  services.tsx   // Services
  blog.tsx       // Blog index
  contact.tsx    // Contact
```

And use CMS fields like:

* `hero.title`
* `about.bio`
* `services[].title`
* `testimonials[].quote`
* `blog[].slug`, `blog[].body`

This keeps content organized and **easy to plug into CMS** during build.

---

## 🔹 4. Optional: Create a Starter Kit Repo

For Tier 2 builds, you can package your customizations into a private GitHub repo:

**Example:**

```txt
jdx-growth-starter/
    🔼️ components/
    🔼️ pages/
    🔼️ public/
    🔼️ tailwind.config.js
    🔼️ sanity.config.ts (optional)
```

Now you just clone this and update as needed for each project.

---

## ✅ Output of Step 3

* A ready-to-clone starter layout for Wix or Framer (Tier 1)
* A reusable Next.js + Tailwind base template for Growth Sites (Tier 2)
* Optional CMS mappings and component structure
* A workflow that eliminates guesswork and layout paralysis

---

## 🛠 Recommended Tools

| Purpose                 | Tool                       |
| ----------------------- | -------------------------- |
| Design system           | Tailwind UI / shadcn/ui    |
| Starter templates       | Vercel + GitHub            |
| Page layout scaffolding | Notion or Figma            |
| CMS hookup              | Sanity / Notion / Supabase |
| Hosting                 | Vercel / Netlify           |
