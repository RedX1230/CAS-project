# A Page a Day — Customization & Deployment Guide

Welcome to **A Page a Day**, your digital creative-writing community website built for students aged 14–18 as an IB CAS project.

This guide explains how to:
1. Run and preview the website locally.
2. Update your **Instagram link** and **Google Form submission link**.
3. Add a new **poem or prose piece** to The Archive.
4. Add or edit a **writing prompt**.
5. Push to **GitHub** and deploy to **Vercel** (100% free, zero database).

---

## 1. Quick Local Development Commands

Open a terminal (PowerShell or Bash) in this project folder:

```bash
# 1. Install dependencies (already completed)
npm install

# 2. Run the local development server
npm run dev

# 3. View the website in your browser
# Open: http://localhost:3000

# 4. Create a production build to test
npm run build
```

---

## 2. Changing the Instagram & Google Form URLs

All primary external links and site metadata are located in **one single configuration file**:
📁 `src/config/site.ts`

### To update your Instagram link:
Change `instagramUrl` and `instagramHandle`:
```typescript
instagramUrl: "https://instagram.com/your_handle",
instagramHandle: "@your_handle",
```

### To update your Google Form for submissions:
1. Open Google Forms ([forms.google.com](https://forms.google.com)) and create your submission form.
   *Recommended fields:*
   - Author Name or Pen Name (Short answer)
   - Age / Grade (Short answer, e.g. "16, Grade 11")
   - Contact Email (Short answer)
   - Title of Piece (Short answer)
   - Type (Multiple choice: Poetry / Short Prose)
   - Text of Piece (Paragraph)
   - Confirmation: "I agree to publish this work on A Page a Day" (Checkbox)
2. In Google Forms, click the purple **Send** button in the top-right corner.
3. **For the embed URL**: Click the `< >` (HTML Embed) tab. Copy the URL inside `src="..."` (it ends with `/viewform?embedded=true`).
4. **For the direct link**: Click the chain/link icon tab and copy the shortened link.
5. In `src/config/site.ts`, replace:
```typescript
googleFormEmbedUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true",
googleFormDirectUrl: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?usp=sf_link",
```

---

## 3. How to Add a New Poem or Prose Piece to The Archive

All published writings live in:
📁 `src/data/pieces.ts`

To add a new piece, simply append a new object to the `pieces` array:

```typescript
{
  slug: "my-poem-title",                     // URL identifier (lowercase, hyphens only)
  title: "My Poem Title",                    // Title displayed in headings
  author: "Student Name or Pen Name",        // Author name
  authorAge: "Age 16, Grade 11",             // Student age / grade
  type: "poetry",                            // "poetry" or "prose"
  category: "Free Verse",                    // e.g., "Free Verse", "Lyric Poetry", "Flash Fiction"
  date: "November 2026",                     // Date published
  readingTime: "2 min read",                 // Estimated reading time
  promptSource: "The Weather Inside the House", // (Optional) Title of prompt that inspired it
  featured: true,                            // Set to true to display on home page
  isSample: false,                           // Set to false for real student contributions
  excerpt: "The first two lines or a striking quote for preview cards...",
  editorNote: "A brief note from the student editorial board on why this piece stood out.",
  content: `Line one of your poem
Line two of your poem

Stanza two line one
Stanza two line two`,
},
```

> **Poetry vs. Prose Formatting:**
> - For **poetry**: Keep regular line breaks. Leave a blank line between stanzas.
> - For **prose**: Separate paragraphs with a blank line.

The website will automatically create a dedicated reading page at `/archive/my-poem-title`, add it to the filterable archive at `/archive`, and calculate previous/next navigation buttons without any code changes!

---

## 4. How to Add or Edit a Writing Prompt

All 20 writing prompts are stored in:
📁 `src/data/prompts.ts`

Each prompt has this structure:

```typescript
{
  id: "prompt-21",
  number: 21,
  title: "Title of the Prompt",
  category: "poetry", // Options: "poetry" | "short-stories" | "memory-and-time" | "identity" | "relationships" | "the-ordinary" | "experimental"
  categoryLabel: "Poetry",
  suggestedForm: "Sestina / Free Verse",
  featured: false, // Set to true to highlight on the home page
  text: "The detailed prompt instruction or creative scenario...",
  spark: "“A provocative opening sentence or question...”",
},
```

---

## 5. Deploying to GitHub and Vercel

### Step A: Commit changes locally in Git
```bash
git add .
git commit -m "Build complete A Page a Day website for CAS project"
```

### Step B: Push to your GitHub repository
1. Go to [github.com/new](https://github.com/new) and create a repository called `a-page-a-day` (or your preferred name).
2. Follow the commands provided by GitHub:
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/a-page-a-day.git
git push -u origin main
```

### Step C: Deploy on Vercel (100% Free)
1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Import your `a-page-a-day` GitHub repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**.
6. Within 60 seconds, your site is live with an SSL certificate and free domain (e.g. `a-page-a-day.vercel.app`)!

---

## 6. Architecture & Privacy Guarantees

- **No Database**: All content is stored in version-controlled TypeScript files.
- **No Backend Server**: Submissions go directly to your secure Google Sheet via Google Forms.
- **Zero Running Costs**: Next.js on Vercel's Hobby tier is 100% free forever for personal & educational projects.
- **No Third-Party Cookies / Trackers**: Fully privacy compliant for teenage students.
