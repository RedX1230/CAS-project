"use client";

import { useState } from "react";
import { Share2, Check } from "lucide-react";

interface SharePieceButtonProps {
  title: string;
}

export default function SharePieceButton({ title }: SharePieceButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      const url = window.location.href;
      if (navigator.share) {
        await navigator.share({
          title: `${title} | A Page a Day`,
          text: `Read "${title}" in A Page a Day youth literary archive:`,
          url,
        });
      } else if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch (err) {
      // User cancelled share or error
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full text-xs font-sans font-medium text-ink-700 bg-[#FAF7F2] border border-ink-900/10 hover:border-ink-900/30 hover:text-ink-950 transition-colors"
      aria-label="Share this piece"
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-emerald-700 font-medium">Link Copied!</span>
        </>
      ) : (
        <>
          <Share2 className="w-3.5 h-3.5 opacity-70" />
          <span>Share Piece</span>
        </>
      )}
    </button>
  );
}
