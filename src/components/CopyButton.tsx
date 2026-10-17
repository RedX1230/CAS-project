"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  text: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  variant?: "ghost" | "solid" | "outline";
}

export default function CopyButton({
  text,
  label = "Copy Prompt",
  copiedLabel = "Copied!",
  className = "",
  variant = "outline",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        textArea.remove();
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  const variantStyles = {
    ghost: "text-ink-700 hover:text-ink-950 hover:bg-ink-900/5",
    solid: "bg-ink-900 text-parchment-50 hover:bg-amberink-800 shadow-sm",
    outline:
      "border border-ink-900/15 text-ink-800 bg-[#FAF7F2] hover:bg-ink-900 hover:text-parchment-50 hover:border-ink-900",
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center justify-center px-3 py-1.5 rounded-full text-xs font-sans font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 active:scale-95 ${variantStyles[variant]} ${className}`}
      aria-label={copied ? "Text copied to clipboard" : `Copy prompt: ${text.slice(0, 30)}...`}
    >
      {copied ? (
        <>
          <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600 stroke-[2.5]" />
          <span className="text-emerald-700 font-semibold">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="w-3.5 h-3.5 mr-1.5 opacity-70" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
