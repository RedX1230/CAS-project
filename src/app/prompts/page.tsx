"use client";

import { useState, useMemo } from "react";
import { prompts, promptCategories } from "@/data/prompts";
import { PromptCategory } from "@/types";
import PromptCard from "@/components/PromptCard";
import { Sparkles, Search, Dices, RotateCcw } from "lucide-react";

export default function PromptsPage() {
  const [selectedCategory, setSelectedCategory] = useState<PromptCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  // Filtered prompt list
  const filteredPrompts = useMemo(() => {
    return prompts.filter((p) => {
      const matchesCategory =
        selectedCategory === "all" || p.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.text.toLowerCase().includes(q) ||
        p.spark.toLowerCase().includes(q) ||
        p.suggestedForm.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q);

      return matchesCategory && matchesQuery;
    });
  }, [selectedCategory, searchQuery]);

  // Serendipity: Pick a random prompt
  const handleRandomPrompt = () => {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    const chosen = prompts[randomIndex];
    setSelectedCategory("all");
    setSearchQuery("");
    setHighlightedId(chosen.id);

    // Scroll to the card
    setTimeout(() => {
      const el = document.getElementById(chosen.id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 100);

    // Clear highlight after 3 seconds
    setTimeout(() => setHighlightedId(null), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* ------------------------------------------------------------------- */}
      {/* Editorial Header */}
      {/* ------------------------------------------------------------------- */}
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center space-x-2 text-xs font-mono font-medium text-amberink-700 bg-amberink-100/60 px-2.5 py-1 rounded mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>20 ORIGINAL WRITING INVITATIONS</span>
        </div>

        <h1 className="font-editorial-heading text-4xl sm:text-5xl font-bold text-ink-950 mb-4 tracking-tight">
          The Prompt Desk
        </h1>

        <p className="font-editorial-heading italic text-xl text-ink-800 leading-relaxed mb-4">
          Invitations to bypass cliché, unlock stubborn afternoons, and put pen to paper.
        </p>

        <p className="text-sm text-ink-600 font-sans leading-relaxed">
          These prompts are keys, not cages. Treat them as springboards: borrow a single phrase,
          misinterpret the premise on purpose, or turn the mood inside out. Copy any prompt
          with one click and draft your page.
        </p>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Controls: Search, Category Filters, Random Shuffle */}
      {/* ------------------------------------------------------------------- */}
      <div className="space-y-4 mb-10 pb-8 border-b border-ink-900/10">
        {/* Top search & shuffle row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Bar */}
          <div className="relative flex-grow max-w-md">
            <Search className="w-4 h-4 text-ink-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by keyword, form, or theme (e.g., 'bus', 'rain', 'poem')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#FAF7F2] border border-ink-900/15 text-sm text-ink-900 placeholder-ink-400 focus:outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900 transition-colors font-sans"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-ink-400 hover:text-ink-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Random prompt button */}
          <button
            type="button"
            onClick={handleRandomPrompt}
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#FAF7F2] border border-ink-900/20 text-xs font-sans font-medium text-ink-800 hover:bg-ink-900 hover:text-parchment-50 hover:border-ink-900 transition-all shadow-2xs"
          >
            <Dices className="w-4 h-4 mr-1.5" />
            <span>Surprise Me / Random Prompt</span>
          </button>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none pt-2">
          {promptCategories.map((category) => {
            const count =
              category.id === "all"
                ? prompts.length
                : prompts.filter((p) => p.category === category.id).length;
            const isSelected = selectedCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-sans font-medium transition-all flex items-center space-x-1.5 ${
                  isSelected
                    ? "bg-ink-900 text-parchment-50 shadow-xs"
                    : "bg-[#FAF7F2] text-ink-700 border border-ink-900/10 hover:border-ink-900/30 hover:text-ink-950"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-parchment-50/20 text-parchment-50" : "bg-ink-900/10 text-ink-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Prompts Count Status */}
      {/* ------------------------------------------------------------------- */}
      <div className="flex items-center justify-between text-xs text-ink-500 font-sans mb-6">
        <span>
          Showing {filteredPrompts.length} of {prompts.length} prompts
          {selectedCategory !== "all" && ` in ${promptCategories.find((c) => c.id === selectedCategory)?.label}`}
          {searchQuery && ` matching "${searchQuery}"`}
        </span>

        {(selectedCategory !== "all" || searchQuery) && (
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="text-amberink-800 hover:underline flex items-center"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset filters
          </button>
        )}
      </div>

      {/* ------------------------------------------------------------------- */}
      {/* Prompts Editorial Grid */}
      {/* ------------------------------------------------------------------- */}
      {filteredPrompts.length === 0 ? (
        <div className="paper-card rounded-xl p-12 text-center max-w-lg mx-auto">
          <p className="font-editorial-heading italic text-lg text-ink-800 mb-2">
            No prompts found matching your search.
          </p>
          <p className="text-xs text-ink-500 font-sans mb-5">
            Try adjusting your search terms or view all categories.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 rounded-full bg-ink-900 text-parchment-50 text-xs font-sans font-medium hover:bg-amberink-800"
          >
            Show All 20 Prompts
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {filteredPrompts.map((prompt) => (
            <div
              key={prompt.id}
              id={prompt.id}
              className={`transition-all duration-300 rounded-xl ${
                highlightedId === prompt.id
                  ? "ring-2 ring-amberink-600 ring-offset-4 ring-offset-parchment-50 scale-[1.01]"
                  : ""
              }`}
            >
              <PromptCard prompt={prompt} />
            </div>
          ))}
        </div>
      )}

      {/* ------------------------------------------------------------------- */}
      {/* Bottom Callout: Ready to Submit */}
      {/* ------------------------------------------------------------------- */}
      <div className="mt-16 pt-10 border-t border-ink-900/10 text-center">
        <h3 className="font-editorial-heading text-xl sm:text-2xl font-bold text-ink-950 mb-2">
          Finished your draft?
        </h3>
        <p className="text-xs sm:text-sm text-ink-600 font-sans max-w-md mx-auto mb-5">
          Submit your poem or short prose via our Google Form. It only takes a couple of minutes
          and will be reviewed by our student editorial board.
        </p>
        <a
          href="/submit"
          className="inline-flex items-center px-6 py-2.5 rounded-full bg-ink-900 text-parchment-50 hover:bg-amberink-800 text-xs font-sans font-medium uppercase tracking-wider transition-colors"
        >
          Submit to the Archive
        </a>
      </div>
    </div>
  );
}
