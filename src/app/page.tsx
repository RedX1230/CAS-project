import Link from "next/link";
import { ArrowRight, ArrowUpRight, Feather, Sparkles, BookOpen, Instagram, Heart, Compass } from "lucide-react";
import { siteConfig } from "@/config/site";
import { prompts } from "@/data/prompts";
import { pieces } from "@/data/pieces";
import PieceCard from "@/components/PieceCard";
import CopyButton from "@/components/CopyButton";

export default function HomePage() {
  // Select featured prompt and sample pieces
  const featuredPrompt = prompts.find((p) => p.featured) || prompts[0];
  const featuredPieces = pieces.filter((p) => p.featured).slice(0, 3);

  const fullPromptCopy = `${featuredPrompt.title}\n\n${featuredPrompt.text}\n\nOpening Spark: ${featuredPrompt.spark}\n\n— A Page a Day (${siteConfig.instagramHandle})`;

  return (
    <div className="space-y-20 sm:space-y-28 pb-20">
      {/* --------------------------------------------------------------------- */}
      {/* 1. HERO SECTION */}
      {/* --------------------------------------------------------------------- */}
      <section className="relative pt-12 sm:pt-20 lg:pt-28 pb-12 sm:pb-16 border-b border-ink-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Subtle Project Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-ink-900/[0.04] border border-ink-900/10 text-xs font-sans text-ink-700 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-amberink-600 animate-pulse" />
            <span>A CAS Creative Writing Initiative for Students Aged 14–18</span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-editorial-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink-950 leading-[1.1] mb-6">
            Every thought deserves a page.
          </h1>

          {/* Mission Explanation */}
          <p className="font-editorial-heading italic text-lg sm:text-2xl text-ink-700 max-w-2xl mx-auto mb-6 leading-relaxed">
            A quiet, unhurried space for young writers to explore creative expression, discover
            thoughtful prompts, and share their work with an encouraging peer community.
          </p>

          <p className="text-sm sm:text-base text-ink-600 font-sans max-w-xl mx-auto mb-10 leading-relaxed">
            Whether you write in five-minute bursts between classes, fill notebooks late at night,
            or are drafting your very first stanza—your voice has a rightful place here.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 font-sans text-sm font-medium">
            <Link
              href="/archive"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-ink-900 text-parchment-50 hover:bg-amberink-800 transition-all shadow-sm hover:shadow flex items-center justify-center group"
            >
              <span>Explore Writing</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-parchment-100 text-ink-900 border border-ink-900/20 hover:border-ink-900 hover:bg-parchment-200 transition-all flex items-center justify-center"
            >
              <span>Submit Your Work</span>
            </Link>

            <Link
              href="/prompts"
              className="w-full sm:w-auto px-4 py-3 rounded-full text-ink-700 hover:text-ink-950 hover:bg-ink-900/5 transition-colors flex items-center justify-center"
            >
              <span>Browse 20 Prompts</span>
            </Link>
          </div>

          {/* Handwritten-style Epigraph / Note */}
          <div className="mt-14 pt-8 border-t border-ink-900/10 flex items-center justify-center space-x-2 text-xs font-editorial-heading italic text-ink-500">
            <span>“A blank page is not an exam. It is simply an open window.”</span>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 2. THE THREE PILLARS (EDITORIAL PHILOSOPHY) */}
      {/* --------------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-sans uppercase tracking-widest text-ink-500 font-semibold">
            Our Purpose
          </span>
          <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-ink-950 mt-1">
            Writing without algorithms or pressure.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="paper-card rounded-xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-amberink-100 text-amberink-800 flex items-center justify-center mb-5">
                <Compass className="w-4 h-4" />
              </div>
              <h3 className="font-editorial-heading text-xl font-semibold text-ink-950 mb-2">
                Discovery Over Polish
              </h3>
              <p className="text-sm text-ink-600 font-sans leading-relaxed">
                We believe the most exciting writing comes from taking risks. You don&apos;t need an
                edited masterpiece—just an honest observation or a rhythm that felt real to you.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink-900/10 text-xs font-mono text-ink-500">
              01 / No metrics or likes
            </div>
          </div>

          <div className="paper-card rounded-xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-amberink-100 text-amberink-800 flex items-center justify-center mb-5">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-editorial-heading text-xl font-semibold text-ink-950 mb-2">
                Prompts for the Unspoken
              </h3>
              <p className="text-sm text-ink-600 font-sans leading-relaxed">
                Our curated prompt collection skips tired tropes to help you explore memory, ordinary
                objects, personal identity, and the quiet moments between classes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink-900/10 text-xs font-mono text-ink-500">
              02 / 20 Original invitations
            </div>
          </div>

          <div className="paper-card rounded-xl p-7 flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-full bg-amberink-100 text-amberink-800 flex items-center justify-center mb-5">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="font-editorial-heading text-xl font-semibold text-ink-950 mb-2">
                Curated with Respect
              </h3>
              <p className="text-sm text-ink-600 font-sans leading-relaxed">
                Every submission via our simple Google Form is reviewed gently by student editors.
                We celebrate youth voices with dignified, publication-grade presentation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-ink-900/10 text-xs font-mono text-ink-500">
              03 / Student-led CAS project
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 3. FEATURED WRITING PROMPT */}
      {/* --------------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAF6F0] border border-ink-900/15 rounded-2xl p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Decorative faint background watermark */}
          <div className="absolute right-4 -bottom-10 opacity-5 select-none pointer-events-none">
            <Feather className="w-72 h-72 text-ink-900" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center space-x-2 text-xs font-mono font-medium text-amberink-800 mb-3">
              <span className="px-2 py-0.5 rounded bg-amberink-100">PROMPT OF THE WEEK</span>
              <span>·</span>
              <span>№ {String(featuredPrompt.number).padStart(2, "0")}</span>
              <span>·</span>
              <span className="uppercase">{featuredPrompt.suggestedForm}</span>
            </div>

            <h2 className="font-editorial-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-ink-950 mb-4">
              {featuredPrompt.title}
            </h2>

            <p className="text-base text-ink-700 font-sans leading-relaxed mb-6">
              {featuredPrompt.text}
            </p>

            {/* Spark opening quote */}
            <div className="p-4 rounded-lg bg-parchment-50 border-l-2 border-amberink-700 mb-8">
              <span className="text-[11px] font-mono uppercase tracking-wider text-ink-500 block mb-1">
                A line to kickstart your draft:
              </span>
              <p className="font-editorial-heading italic text-base sm:text-lg text-ink-950">
                {featuredPrompt.spark}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <CopyButton
                text={fullPromptCopy}
                label="Copy Prompt to Clipboard"
                copiedLabel="Prompt Copied!"
                variant="solid"
              />

              <Link
                href={`/submit?prompt=${encodeURIComponent(featuredPrompt.title)}`}
                className="px-4 py-1.5 rounded-full text-xs font-sans font-medium text-ink-800 border border-ink-900/20 hover:border-ink-900 hover:bg-parchment-100 transition-colors"
              >
                Write to this prompt
              </Link>

              <Link
                href="/prompts"
                className="text-xs font-sans font-medium text-amberink-800 hover:underline flex items-center ml-2"
              >
                <span>View all 20 prompts</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 4. FEATURED PIECES FROM THE ARCHIVE */}
      {/* --------------------------------------------------------------------- */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-ink-900/10 gap-4">
          <div>
            <span className="text-xs font-sans uppercase tracking-widest text-ink-500 font-semibold">
              From The Literary Archive
            </span>
            <h2 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-ink-950 mt-1">
              Sample writing from our inaugural pages.
            </h2>
          </div>

          <Link
            href="/archive"
            className="inline-flex items-center text-xs font-sans font-medium text-amberink-800 hover:text-ink-950 transition-colors group"
          >
            <span>Browse the complete archive (7 pieces)</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Pieces Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {featuredPieces.map((piece) => (
            <PieceCard key={piece.slug} piece={piece} />
          ))}
        </div>

        {/* Archive Disclaimer Notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-ink-500 font-sans italic">
            Note: All pieces above are original sample works crafted to illustrate the archive layout.
            Author names are fictional for privacy and demonstration.
          </p>
        </div>
      </section>

      {/* --------------------------------------------------------------------- */}
      {/* 5. INSTAGRAM COMMUNITY & CALL TO WRITE */}
      {/* --------------------------------------------------------------------- */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-ink-900/15 rounded-2xl p-8 sm:p-12 bg-[#F4EFE6] text-center">
          <div className="w-12 h-12 rounded-full bg-ink-900 text-parchment-50 flex items-center justify-center mx-auto mb-4">
            <Instagram className="w-6 h-6" />
          </div>

          <h3 className="font-editorial-heading text-2xl sm:text-3xl font-bold text-ink-950 mb-3">
            Join the conversation on Instagram
          </h3>

          <p className="text-sm sm:text-base text-ink-700 font-sans max-w-lg mx-auto mb-6 leading-relaxed">
            Follow <span className="font-semibold text-ink-950">{siteConfig.instagramHandle}</span>{" "}
            for weekly prompt drops, student excerpts, writing tips, and behind-the-scenes updates
            from our student editorial team.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-ink-900 text-parchment-50 hover:bg-amberink-800 transition-colors text-xs font-sans font-medium uppercase tracking-wider inline-flex items-center shadow-sm"
            >
              <span>Follow {siteConfig.instagramHandle}</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5" />
            </a>

            <Link
              href="/submit"
              className="px-6 py-3 rounded-full bg-parchment-50 text-ink-900 border border-ink-900/20 hover:border-ink-900 transition-colors text-xs font-sans font-medium uppercase tracking-wider"
            >
              Submit Your Own Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
