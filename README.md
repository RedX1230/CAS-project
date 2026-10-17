# A Page a Day 📖🖋️

> *"Every thought deserves a page."*

A digital creative-writing community for students aged 14–18, created as an IB Diploma **Creativity, Activity, Service (CAS)** project.

---

## Features

- **The Prompt Desk:** 20 original writing prompts covering poetry, short stories, memory & time, identity, relationships, the ordinary, and experimental writing with one-click clipboard copying.
- **The Literary Archive:** A readable, distraction-free reading room containing 5 sample poems and 2 short prose pieces with dedicated reading pages, book-grade typography, and editorial notes.
- **Submit Your Work:** Clear submission guidelines, publication consent, and an embedded Google Form with direct fallback links.
- **Local-First & Zero Cost:** No database, no backend server, no accounts, and no paid services. All content is stored in local TypeScript data files.
- **Literary Editorial Aesthetic:** Warm cream backgrounds, dark brown/ink typography, elegant serif headings, subtle paper cards, and unhurried layouts.

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, static site generation)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Form Handling:** Google Forms (free, zero backend)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Getting Started

### 1. Run Locally
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Build for Production
```bash
npm run build
npm run start
```

---

## Customization

- **Instagram & Google Form URLs:** Edit `src/config/site.ts`.
- **Writing Prompts:** Edit `src/data/prompts.ts`.
- **Archive Poems & Prose:** Edit `src/data/pieces.ts`.

See [HOW_TO_CUSTOMIZE.md](./HOW_TO_CUSTOMIZE.md) for full instructions.

---

## License & Attribution

Created as a student-led CAS project. All sample works are original demonstration writings. All rights reserved by respective student authors.
