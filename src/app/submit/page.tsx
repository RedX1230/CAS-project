import { siteConfig } from "@/config/site";
import {
  FileText,
  ExternalLink,
  ShieldCheck,
  Clock,
  Sparkles,
  HelpCircle,
  AlertCircle,
  CheckCircle2,
  Copy,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Submit Your Work",
  description:
    "Submit your poetry and short prose to A Page a Day. Open to young writers aged 14–18. Free student publication.",
};

interface SubmitPageProps {
  searchParams?: {
    prompt?: string;
  };
}

export default function SubmitPage({ searchParams }: SubmitPageProps) {
  const referencedPrompt = searchParams?.prompt;
  const isPlaceholderUrl = siteConfig.googleFormEmbedUrl.includes("PLACEHOLDER");

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* ------------------------------------------------------------------- */}
      {/* Header Banner */}
      {/* ------------------------------------------------------------------- */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-amberink-700 bg-amberink-100/60 px-2.5 py-1 rounded mb-4">
          <FileText className="w-3.5 h-3.5" />
          <span>SUBMISSIONS OPEN · AGES 14–18</span>
        </div>

        <h1 className="font-editorial-heading text-4xl sm:text-5xl font-bold text-ink-950 mb-4 tracking-tight">
          Submit Your Work
        </h1>

        <p className="font-editorial-heading italic text-xl text-ink-800 leading-relaxed mb-4">
          We invite poems, flash fiction, and personal vignettes from emerging writers.
        </p>

        <p className="text-sm text-ink-600 font-sans leading-relaxed">
          Every thought deserves a page. You don&apos;t need awards, publications, or polished perfection.
          We are looking for honesty, distinct sensory details, and genuine student perspectives.
        </p>
      </div>

      {/* Referenced prompt notification if coming from a prompt card */}
      {referencedPrompt && (
        <div className="bg-[#F4EFE6] border-l-2 border-amberink-600 rounded-r-xl p-4 mb-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-xs sm:text-sm font-sans text-ink-800">
            <Sparkles className="w-4 h-4 text-amberink-700 shrink-0" />
            <span>
              You are writing in response to:{" "}
              <strong className="text-ink-950 font-semibold">“{referencedPrompt}”</strong>
            </span>
          </div>
          <Link
            href="/prompts"
            className="text-xs font-sans text-amberink-800 hover:underline"
          >
            Change prompt
          </Link>
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* Main Two-Column Layout */}
      {/* ------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Guidelines & Review Process */}
        <div className="lg:col-span-5 space-y-8">
          {/* Submission Guidelines Box */}
          <div className="paper-card rounded-xl p-6 sm:p-7 space-y-6">
            <h2 className="font-editorial-heading text-xl font-bold text-ink-950 border-b border-ink-900/10 pb-3">
              Submission Guidelines
            </h2>

            {/* Eligibility */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amberink-800 block">
                01. Eligibility
              </span>
              <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
                Open to any young person between the ages of <strong>14 and 18</strong> worldwide.
                Whether you attend high school, secondary school, or are homeschooled, your work is welcome.
              </p>
            </div>

            {/* Accepted Categories */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amberink-800 block">
                02. Categories & Word Limits
              </span>
              <ul className="text-xs sm:text-sm text-ink-700 font-sans space-y-2 leading-relaxed">
                <li className="flex items-start space-x-2">
                  <span className="text-ink-400 font-bold">•</span>
                  <span>
                    <strong>Poetry:</strong> Up to 60 lines per poem (you may submit 1 to 3 poems).
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-ink-400 font-bold">•</span>
                  <span>
                    <strong>Short Prose:</strong> Flash fiction, memoirs, or vignettes up to 1,200 words.
                  </span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-ink-400 font-bold">•</span>
                  <span>
                    <strong>Original Work:</strong> All submissions must be your own original creative writing.
                  </span>
                </li>
              </ul>
            </div>

            {/* Review Process */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amberink-800 block">
                03. Editorial Review
              </span>
              <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
                Submissions are reviewed by our student editorial board. We read every piece with
                gentle care and respect. You will receive an email response regarding publication
                status within <strong>7 to 14 days</strong>.
              </p>
            </div>

            {/* Rights & Consent */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amberink-800 block">
                04. Publication Consent & Rights
              </span>
              <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
                <strong>You retain 100% of your copyright.</strong> By submitting, you grant{" "}
                <em>A Page a Day</em> non-exclusive digital rights to publish your piece on this website
                and quote brief excerpts on our student Instagram (
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amberink-800 underline"
                >
                  {siteConfig.instagramHandle}
                </a>
                ). You may use a pseudonym or initials if you prefer privacy.
              </p>
            </div>

            {/* Cost */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-amberink-800 block">
                05. Completely Free
              </span>
              <p className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
                There are no reading fees, application costs, or paid tiers. This is a non-profit
                educational CAS project created for student writers.
              </p>
            </div>
          </div>

          {/* Quick Checklist */}
          <div className="bg-[#FAF7F2] border border-ink-900/10 rounded-xl p-6">
            <h3 className="text-xs font-mono uppercase tracking-widest text-ink-500 font-semibold mb-3">
              Before You Press Submit:
            </h3>
            <ul className="space-y-2.5 text-xs text-ink-700 font-sans">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You are between 14 and 18 years old.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You have selected a title for your piece.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Line breaks and stanzas are arranged the way you want them read.</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>You decided whether to publish under your real name or a pen name.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column: Google Form Embed & Direct Link */}
        <div className="lg:col-span-7 space-y-6">
          {/* Card containing the embedded form */}
          <div className="paper-card rounded-xl p-4 sm:p-6 shadow-xs border border-ink-900/15">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-ink-900/10 flex-wrap gap-2">
              <div>
                <h3 className="font-editorial-heading text-lg font-bold text-ink-950">
                  Student Submission Form
                </h3>
                <p className="text-xs text-ink-500 font-sans">
                  Powered securely by Google Forms · No account required
                </p>
              </div>

              {/* Direct Link button */}
              <a
                href={siteConfig.googleFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-sans font-medium text-amberink-800 hover:text-ink-950 bg-amberink-100/60 hover:bg-amberink-100 px-3 py-1.5 rounded-full transition-colors"
              >
                <span>Open in new window</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>

            {/* Clear Placeholder Alert for Site Creator */}
            {isPlaceholderUrl && (
              <div className="mb-5 p-4 rounded-lg bg-amberink-50 border border-amberink-300 text-amberink-900 text-xs font-sans space-y-2">
                <div className="flex items-center space-x-2 font-semibold">
                  <AlertCircle className="w-4 h-4 text-amberink-700 shrink-0" />
                  <span>Google Form Configuration Notice:</span>
                </div>
                <p>
                  The frame below shows the placeholder embed. To connect your real Google Form, simply open{" "}
                  <code className="bg-amberink-200/60 px-1 py-0.5 rounded font-mono text-[11px]">
                    src/config/site.ts
                  </code>{" "}
                  and update <code className="font-mono text-[11px]">googleFormEmbedUrl</code> with your Google Form URL!
                </p>
              </div>
            )}

            {/* Embedded Iframe */}
            <div className="w-full bg-white rounded-lg overflow-hidden border border-ink-900/10 shadow-inner">
              <iframe
                src={siteConfig.googleFormEmbedUrl}
                width="100%"
                height="820"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="w-full"
                title="A Page a Day Google Form Submission"
              >
                Loading submission form...
              </iframe>
            </div>

            {/* Fallback button below frame */}
            <div className="pt-4 mt-2 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 font-sans gap-2">
              <span>Having trouble seeing the form on your device?</span>
              <a
                href={siteConfig.googleFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amberink-800 hover:underline font-medium inline-flex items-center"
              >
                Open Google Form directly in a new tab
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>

          {/* Quick FAQ Card */}
          <div className="paper-card rounded-xl p-6 sm:p-7 space-y-4">
            <h3 className="font-editorial-heading text-lg font-bold text-ink-950 flex items-center">
              <HelpCircle className="w-4 h-4 mr-2 text-amberink-700" />
              Frequently Asked Questions
            </h3>

            <div className="space-y-3 text-xs sm:text-sm font-sans">
              <div>
                <strong className="text-ink-950 block mb-0.5">
                  Can I submit under a pen name or just my initials?
                </strong>
                <p className="text-ink-600 leading-relaxed">
                  Yes, absolutely. In the Google Form, you can enter whatever name you wish to appear
                  next to your piece (e.g. “A. S.”, “S. Tariq”, or “Anonymous”).
                </p>
              </div>

              <div className="pt-2 border-t border-ink-900/10">
                <strong className="text-ink-950 block mb-0.5">
                  Can I submit work that I already turned in for school or class?
                </strong>
                <p className="text-ink-600 leading-relaxed">
                  Yes, as long as it is your original writing and has not been published in a commercial,
                  copyright-holding publication.
                </p>
              </div>

              <div className="pt-2 border-t border-ink-900/10">
                <strong className="text-ink-950 block mb-0.5">
                  What happens after I hit submit?
                </strong>
                <p className="text-ink-600 leading-relaxed">
                  Your submission is received in our private Google Sheet. Our student editors read it,
                  format it according to our literary stylesheet, and contact you via email before
                  posting it to The Archive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
