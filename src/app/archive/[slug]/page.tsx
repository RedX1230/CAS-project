import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, Feather, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import { pieces } from "@/data/pieces";
import SharePieceButton from "@/components/SharePieceButton";
import type { Metadata } from "next";

interface PiecePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return pieces.map((piece) => ({
    slug: piece.slug,
  }));
}

export async function generateMetadata({ params }: PiecePageProps): Promise<Metadata> {
  const piece = pieces.find((p) => p.slug === params.slug);

  if (!piece) {
    return {
      title: "Piece Not Found | A Page a Day",
    };
  }

  return {
    title: `${piece.title} by ${piece.author}`,
    description: piece.excerpt,
    openGraph: {
      title: `${piece.title} — ${piece.author} | A Page a Day`,
      description: piece.excerpt,
      type: "article",
    },
  };
}

export default function PiecePage({ params }: PiecePageProps) {
  const currentIndex = pieces.findIndex((p) => p.slug === params.slug);

  if (currentIndex === -1) {
    notFound();
  }

  const piece = pieces[currentIndex];
  const isPoem = piece.type === "poetry";

  const prevPiece = currentIndex > 0 ? pieces[currentIndex - 1] : null;
  const nextPiece = currentIndex < pieces.length - 1 ? pieces[currentIndex + 1] : null;

  // Split content into paragraphs/stanzas
  const contentBlocks = piece.content.split(/\n\s*\n/);

  return (
    <article className="min-h-screen py-10 sm:py-16">
      {/* ------------------------------------------------------------------- */}
      {/* Top Reading Navigation Bar */}
      {/* ------------------------------------------------------------------- */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-10 flex items-center justify-between">
        <Link
          href="/archive"
          className="inline-flex items-center text-xs font-sans font-medium text-ink-600 hover:text-ink-950 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-1.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Archive</span>
        </Link>

        <SharePieceButton title={piece.title} />
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Reading Container: Book-like width and typography */}
      {/* ------------------------------------------------------------------- */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Sample Demonstration Notice */}
        <div className="text-[11px] font-mono text-ink-500 uppercase tracking-widest pb-4 mb-6 border-b border-ink-900/10 flex items-center justify-between">
          <span>Sample Contribution · Fictional Contributor</span>
          <span>{piece.date}</span>
        </div>

        {/* Piece Header */}
        <header className="mb-10 sm:mb-12">
          {/* Category & Reading Time */}
          <div className="flex items-center space-x-3 text-xs font-sans text-ink-600 mb-4">
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium uppercase tracking-wider ${
                isPoem
                  ? "bg-amberink-100 text-amberink-800"
                  : "bg-ink-100 text-ink-800"
              }`}
            >
              {isPoem ? (
                <Feather className="w-3 h-3 mr-1" />
              ) : (
                <BookOpen className="w-3 h-3 mr-1" />
              )}
              {isPoem ? "Poetry" : "Short Prose"}
            </span>

            <span>{piece.category}</span>
            <span>·</span>
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1 opacity-70" />
              {piece.readingTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-editorial-heading text-3xl sm:text-5xl font-bold text-ink-950 tracking-tight leading-[1.15] mb-4">
            {piece.title}
          </h1>

          {/* Author Byline */}
          <div className="text-sm sm:text-base font-sans text-ink-700">
            By <span className="font-semibold text-ink-950">{piece.author}</span>
            <span className="text-ink-400 mx-2">/</span>
            <span className="text-ink-600 italic">{piece.authorAge}</span>
          </div>

          {/* Prompt connection if applicable */}
          {piece.promptSource && (
            <div className="mt-4 pt-3 border-t border-ink-900/10 flex items-center text-xs font-sans text-ink-600">
              <Sparkles className="w-3.5 h-3.5 text-amberink-700 mr-1.5 shrink-0" />
              <span>
                Prompt Inspiration:{" "}
                <Link
                  href="/prompts"
                  className="font-medium text-amberink-800 hover:underline"
                >
                  “{piece.promptSource}”
                </Link>
              </span>
            </div>
          )}
        </header>

        {/* ----------------------------------------------------------------- */}
        {/* The Reading Body */}
        {/* ----------------------------------------------------------------- */}
        <div className="font-reading-serif text-ink-950 border-t border-ink-900/10 pt-8 pb-12 sm:pb-16 selection:bg-[#E5DCD0]">
          {isPoem ? (
            /* Poetry layout: preserved line breaks, generous stanza margin */
            <div className="space-y-7 text-lg sm:text-xl text-ink-900 leading-[1.9] tracking-[0.01em]">
              {contentBlocks.map((stanza, idx) => (
                <div key={idx} className="whitespace-pre-line">
                  {stanza.trim()}
                </div>
              ))}
            </div>
          ) : (
            /* Prose layout: paragraphs with generous whitespace and cadence */
            <div className="space-y-6 text-lg text-ink-900 leading-[1.85]">
              {contentBlocks.map((para, idx) => (
                <p
                  key={idx}
                  className={idx === 0 ? "first-letter:text-4xl first-letter:font-editorial-heading first-letter:font-bold first-letter:mr-1.5 first-letter:float-left first-letter:text-amberink-900" : ""}
                >
                  {para.trim()}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Fictional Editor's Note */}
        {/* ----------------------------------------------------------------- */}
        {piece.editorNote && (
          <aside className="my-10 p-5 sm:p-6 rounded-xl bg-[#FAF6F0] border-l-2 border-amberink-600">
            <span className="text-xs font-mono font-medium uppercase tracking-widest text-amberink-800 block mb-1">
              Editorial Board Note
            </span>
            <p className="font-editorial-heading italic text-sm sm:text-base text-ink-800 leading-relaxed">
              “{piece.editorNote}”
            </p>
            <span className="text-[11px] font-sans text-ink-500 block mt-2">
              — A Page a Day Student Editors
            </span>
          </aside>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* Previous & Next Page Navigator */}
        {/* ----------------------------------------------------------------- */}
        <div className="mt-12 pt-8 border-t border-ink-900/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevPiece ? (
            <Link
              href={`/archive/${prevPiece.slug}`}
              className="p-4 rounded-lg border border-ink-900/10 hover:border-ink-900/30 bg-[#FAF7F2] transition-colors group flex flex-col justify-between"
            >
              <div className="flex items-center text-xs font-sans text-ink-500 mb-1">
                <ArrowLeft className="w-3.5 h-3.5 mr-1 group-hover:-translate-x-1 transition-transform" />
                <span>Previous Piece</span>
              </div>
              <span className="font-editorial-heading text-base font-semibold text-ink-950 group-hover:text-amberink-800">
                {prevPiece.title}
              </span>
              <span className="text-xs text-ink-500 font-sans mt-1">
                by {prevPiece.author}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextPiece ? (
            <Link
              href={`/archive/${nextPiece.slug}`}
              className="p-4 rounded-lg border border-ink-900/10 hover:border-ink-900/30 bg-[#FAF7F2] transition-colors group flex flex-col justify-between sm:text-right"
            >
              <div className="flex items-center sm:justify-end text-xs font-sans text-ink-500 mb-1">
                <span>Next Piece</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="font-editorial-heading text-base font-semibold text-ink-950 group-hover:text-amberink-800">
                {nextPiece.title}
              </span>
              <span className="text-xs text-ink-500 font-sans mt-1">
                by {nextPiece.author}
              </span>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* ----------------------------------------------------------------- */}
        {/* Bottom Call to Action */}
        {/* ----------------------------------------------------------------- */}
        <div className="mt-12 pt-8 text-center border-t border-ink-900/10">
          <p className="font-editorial-heading italic text-base text-ink-700 mb-3">
            Have a page waiting inside your notebook?
          </p>
          <Link
            href="/submit"
            className="inline-flex items-center px-5 py-2.5 rounded-full bg-ink-900 text-parchment-50 hover:bg-amberink-800 text-xs font-sans font-medium uppercase tracking-wider transition-colors"
          >
            Submit your writing to our next issue
          </Link>
        </div>
      </div>
    </article>
  );
}
