"use client";

import { useState } from "react";
import { pieces } from "@/data/pieces";
import PieceCard from "@/components/PieceCard";
import { BookOpen, Feather, Info, Sparkles } from "lucide-react";
import Link from "next/link";

export default function ArchivePage() {
  const [filterType, setFilterType] = useState<"all" | "poetry" | "prose">("all");

  const filteredPieces = pieces.filter((p) => {
    if (filterType === "all") return true;
    return p.type === filterType;
  });

  const poetryCount = pieces.filter((p) => p.type === "poetry").length;
  const proseCount = pieces.filter((p) => p.type === "prose").length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* ------------------------------------------------------------------- */}
      {/* Editorial Header */}
      {/* ------------------------------------------------------------------- */}
      <div className="max-w-3xl mb-8">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-amberink-700 bg-amberink-100/60 px-2.5 py-1 rounded mb-4">
          <BookOpen className="w-3.5 h-3.5" />
          <span>ISSUE NO. 01 · SAMPLE ARCHIVE</span>
        </div>

        <h1 className="font-editorial-heading text-4xl sm:text-5xl font-bold text-ink-950 mb-4 tracking-tight">
          The Literary Archive
        </h1>

        <p className="font-editorial-heading italic text-xl text-ink-800 leading-relaxed mb-4">
          A quiet repository of student verse, flash fiction, and reflective prose.
        </p>

        <p className="text-sm text-ink-600 font-sans leading-relaxed">
          The archive gathers work written by students aged 14–18. Each piece is given its own
          unhurried reading space, prioritizing cadence, typography, and voice over social feeds.
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Sample Content Disclosure Banner (Required by user) */}
      {/* ------------------------------------------------------------------- */}
      <div className="bg-[#FAF6F0] border border-amberink-300/40 rounded-xl p-4 sm:p-5 mb-10 flex items-start space-x-3.5">
        <Info className="w-5 h-5 text-amberink-700 mt-0.5 shrink-0" />
        <div className="text-xs sm:text-sm text-ink-700 font-sans leading-relaxed">
          <strong className="text-ink-900 font-semibold block mb-0.5">
            Demonstration Note for CAS Portfolio Review:
          </strong>
          All 5 poems and 2 prose pieces featured below are original sample writings created to
          demonstrate the reading layout, typography, and editorial structure of this platform. All
          contributor names are fictional. When real students submit their work via the Google Form,
          approved pieces will be added directly into this archive.
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Filter Tabs */}
      {/* ------------------------------------------------------------------- */}
      <div className="flex items-center justify-between border-b border-ink-900/10 pb-4 mb-8">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setFilterType("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all ${
              filterType === "all"
                ? "bg-ink-900 text-parchment-50 shadow-xs"
                : "bg-[#FAF7F2] text-ink-700 hover:text-ink-950 border border-ink-900/10"
            }`}
          >
            All Works ({pieces.length})
          </button>

          <button
            type="button"
            onClick={() => setFilterType("poetry")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all flex items-center space-x-1.5 ${
              filterType === "poetry"
                ? "bg-ink-900 text-parchment-50 shadow-xs"
                : "bg-[#FAF7F2] text-ink-700 hover:text-ink-950 border border-ink-900/10"
            }`}
          >
            <Feather className="w-3 h-3" />
            <span>Poetry ({poetryCount})</span>
          </button>

          <button
            type="button"
            onClick={() => setFilterType("prose")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all flex items-center space-x-1.5 ${
              filterType === "prose"
                ? "bg-ink-900 text-parchment-50 shadow-xs"
                : "bg-[#FAF7F2] text-ink-700 hover:text-ink-950 border border-ink-900/10"
            }`}
          >
            <BookOpen className="w-3 h-3" />
            <span>Prose ({proseCount})</span>
          </button>
        </div>

        <span className="text-xs text-ink-500 font-sans hidden sm:inline">
          Showing {filteredPieces.length} {filteredPieces.length === 1 ? "piece" : "pieces"}
        </span>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Archive Grid */}
      {/* ------------------------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredPieces.map((piece) => (
          <PieceCard key={piece.slug} piece={piece} />
        ))}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Submission Invitation Callout */}
      {/* ------------------------------------------------------------------- */}
      <div className="mt-16 pt-12 border-t border-ink-900/10 bg-[#FAF7F2] border border-ink-900/10 rounded-2xl p-8 sm:p-10 text-center">
        <h3 className="font-editorial-heading text-2xl font-bold text-ink-950 mb-2">
          Want your writing published in Issue No. 02?
        </h3>
        <p className="text-sm text-ink-600 font-sans max-w-lg mx-auto mb-6">
          Submissions are open year-round for students aged 14–18. Poetry up to 60 lines, prose up
          to 1,200 words. No fee, no prior publication experience needed.
        </p>
        <Link
          href="/submit"
          className="inline-flex items-center px-6 py-3 rounded-full bg-ink-900 text-parchment-50 hover:bg-amberink-800 text-xs font-sans font-medium uppercase tracking-wider transition-colors shadow-sm"
        >
          Submit Your Work to the Archive
        </Link>
      </div>
    </div>
  );
}
