import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Feather, Heart, BookOpen, Sparkles, ArrowRight, Instagram, Mail, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the Project",
  description:
    "The story behind A Page a Day, a student-led CAS creative writing project for young writers aged 14–18.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* ------------------------------------------------------------------- */}
      {/* Header */}
      {/* ------------------------------------------------------------------- */}
      <header className="mb-12 border-b border-ink-900/10 pb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-amberink-700 bg-amberink-100/60 px-2.5 py-1 rounded mb-4">
          <Feather className="w-3.5 h-3.5" />
          <span>ABOUT A PAGE A DAY</span>
        </div>

        <h1 className="font-editorial-heading text-4xl sm:text-5xl font-bold text-ink-950 mb-4 tracking-tight">
          A quiet corner for young pens.
        </h1>

        <p className="font-editorial-heading italic text-xl sm:text-2xl text-ink-800 leading-relaxed">
          Encouraging students to put down the phone, pick up the pen, and trust that whatever
          they observe has value.
        </p>
      </header>

      {/* ------------------------------------------------------------------- */}
      {/* Narrative Essay / About Body */}
      {/* ------------------------------------------------------------------- */}
      <div className="space-y-10 text-ink-900 font-sans leading-relaxed text-base">
        {/* Section 1: The Why */}
        <section className="space-y-4">
          <h2 className="font-editorial-heading text-2xl font-bold text-ink-950">
            Why “A Page a Day”?
          </h2>
          <p className="text-ink-700">
            Between five classes, homework deadlines, university applications, and the constant hum of
            social media notifications, teenagers rarely get an unmeasured hour to write just for the
            pleasure of finding out what they think. Most high-school writing is transactional: essays
            written to satisfy an assessment rubric or bullet points jotted for tomorrow’s quiz.
          </p>
          <p className="text-ink-700">
            <strong>A Page a Day</strong> began from a very simple premise: a single page is manageable.
            It does not demand a novel or a polished collection. It only asks for five or ten minutes of
            attention. In those minutes, you might record the hum of a bus engine, describe the way rain
            settles in the wool of a winter coat, or turn a memory into two stanzas of verse.
          </p>
        </section>

        {/* Section 2: CAS Project Context */}
        <section className="bg-[#FAF7F2] border border-ink-900/10 rounded-2xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-wider text-amberink-800">
            <Heart className="w-4 h-4 text-crimson-subtle fill-current" />
            <span>The CAS Initiative (Creativity, Activity, Service)</span>
          </div>
          <h3 className="font-editorial-heading text-xl font-bold text-ink-950">
            A project created by a student, for students.
          </h3>
          <p className="text-sm text-ink-700 leading-relaxed">
            This website is developed as part of an IB Diploma <strong>Creativity, Activity, Service (CAS)</strong> project.
            The goal of this initiative is two-fold:
          </p>
          <ul className="text-sm text-ink-700 space-y-2.5 list-disc pl-5">
            <li>
              <strong>Creativity:</strong> Curating thought-provoking, non-cliché writing prompts and
              fostering original adolescent creative writing across multiple forms (poetry, flash fiction,
              lyric essays).
            </li>
            <li>
              <strong>Service:</strong> Building an accessible, supportive publication platform where
              peers aged 14–18 can see their work honored in an elegant editorial format, free of charge,
              without algorithms or commercial advertisements.
            </li>
          </ul>
        </section>

        {/* Section 3: Our Core Values */}
        <section className="space-y-6 pt-4">
          <h2 className="font-editorial-heading text-2xl font-bold text-ink-950">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="p-5 rounded-xl border border-ink-900/10 bg-[#FAF7F2]">
              <h4 className="font-editorial-heading text-lg font-bold text-ink-950 mb-1.5">
                No Likes, No Algorithms
              </h4>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                We do not track engagement metrics, follower counts, or upvotes. Writing shouldn&apos;t be a
                popularity contest.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-ink-900/10 bg-[#FAF7F2]">
              <h4 className="font-editorial-heading text-lg font-bold text-ink-950 mb-1.5">
                Gentle Peer Editorial
              </h4>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                Submissions are read by fellow students with encouragement. We look for honest voice
                and sensory honesty rather than mechanical perfection.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-ink-900/10 bg-[#FAF7F2]">
              <h4 className="font-editorial-heading text-lg font-bold text-ink-950 mb-1.5">
                Privacy First
              </h4>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                Students can publish under their real name, initials, or a chosen pseudonym. We do not
                collect passwords or sell data.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-ink-900/10 bg-[#FAF7F2]">
              <h4 className="font-editorial-heading text-lg font-bold text-ink-950 mb-1.5">
                Typography Matters
              </h4>
              <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                Young writers deserve the dignity of book-grade layouts, generous margins, and
                classical literary fonts.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: How It&apos;s Built */}
        <section className="space-y-4 pt-4">
          <h2 className="font-editorial-heading text-2xl font-bold text-ink-950">
            How This Platform is Maintained
          </h2>
          <p className="text-ink-700">
            In keeping with our philosophy of quiet simplicity, <em>A Page a Day</em> is built with
            zero bloat: no external databases, no third-party trackers, and no user accounts. Submissions
            flow through a simple, safe Google Form, and approved writing is placed into local,
            version-controlled TypeScript archives.
          </p>
          <p className="text-ink-700">
            This means the website costs zero dollars to maintain, loads instantly on any phone or
            laptop, and will continue running reliably without maintenance overhead.
          </p>
        </section>

        {/* Section 5: Get Involved */}
        <section className="pt-6 border-t border-ink-900/10 space-y-4">
          <h2 className="font-editorial-heading text-2xl font-bold text-ink-950">
            Get in Touch & Follow the Journey
          </h2>
          <p className="text-ink-700">
            Have a question about submissions, want to propose a prompt, or collaborate with our
            student team? Reach out via our social channels:
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-ink-900 text-parchment-50 hover:bg-amberink-800 transition-colors text-xs font-sans font-medium uppercase tracking-wider"
            >
              <Instagram className="w-4 h-4" />
              <span>Instagram: {siteConfig.instagramHandle}</span>
            </a>

            <Link
              href="/submit"
              className="inline-flex items-center justify-center space-x-2 px-5 py-3 rounded-full bg-parchment-100 text-ink-900 border border-ink-900/20 hover:border-ink-900 transition-colors text-xs font-sans font-medium uppercase tracking-wider"
            >
              <span>Submit Your Work</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
