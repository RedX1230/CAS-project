import { SiteConfig } from "@/types";

/**
 * =============================================================================
 * A PAGE A DAY — CENTRAL SITE CONFIGURATION
 * =============================================================================
 *
 * This file contains all primary links, metadata, and social URLs for the site.
 * To update your Instagram link or Google Form submission link, edit the values below.
 *
 * HOW TO UPDATE YOUR GOOGLE FORM:
 * 1. Open your Google Form in Google Drive.
 * 2. Click the purple "Send" button in the top right.
 * 3. For 'googleFormDirectUrl': Click the link icon (chain) and copy the link.
 * 4. For 'googleFormEmbedUrl': Click the embed icon (< >) and copy the URL
 *    from inside src="..." (it usually ends in /viewform?embedded=true).
 * 5. Paste them below in their respective fields!
 */

export const siteConfig: SiteConfig = {
  name: "A Page a Day",
  tagline: "Every thought deserves a page.",
  subheading: "A digital creative-writing community for students aged 14–18.",
  description:
    "A quiet, thoughtful corner for young writers. Discover original creative prompts, explore sample poetry and prose, and submit your own work for student publication.",
  url: "https://apageaday.vercel.app",

  // ---------------------------------------------------------------------------
  // SOCIAL & SUBMISSION LINKS (CHANGE THESE!)
  // ---------------------------------------------------------------------------
  // Replace with your real Instagram profile URL and handle:
  instagramUrl: "https://instagram.com/apageaday.cas",
  instagramHandle: "@apageaday.cas",

  // Replace with your real Google Form embed URL (from Google Forms -> Send -> < > Embed):
  // NOTE: Keep '?embedded=true' at the end of the URL for clean rendering without headers.
  googleFormEmbedUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe_PLACEHOLDER_FORM_ID_REPLACE_ME/viewform?embedded=true",

  // Replace with the direct shareable link for mobile visitors or fallback buttons:
  googleFormDirectUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSe_PLACEHOLDER_FORM_ID_REPLACE_ME/viewform?usp=sf_link",

  // Optional contact email for student editorial inquiries:
  contactEmail: "apageaday.cas@gmail.com",

  // ---------------------------------------------------------------------------
  // CAS & EDITORIAL METADATA
  // ---------------------------------------------------------------------------
  casContext: "IB Diploma Creativity, Activity, Service (CAS) Project",
  targetAudience: "Writers aged 14–18",
  editorInChief: "Student Editorial Board",

  // ---------------------------------------------------------------------------
  // NAVIGATION MENU
  // ---------------------------------------------------------------------------
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Writing Prompts", href: "/prompts" },
    { label: "The Archive", href: "/archive" },
    { label: "Submit Your Work", href: "/submit" },
    { label: "About", href: "/about" },
  ],
};
