import Link from "next/link";
import { ArrowUpRight, Sparkles, Feather } from "lucide-react";
import { Prompt } from "@/types";
import CopyButton from "./CopyButton";

interface PromptCardProps {
  prompt: Prompt;
}

export default function PromptCard({ prompt }: PromptCardProps) {
  const formattedNumber = String(prompt.number).padStart(2, "0");
  const fullCopyText = `${prompt.title}\n\n${prompt.text}\n\nOpening Spark: ${prompt.spark}\n\n— A Page a Day (CAS Youth Creative Writing)`;

  return (
    <article className="paper-card rounded-xl p-6 sm:p-7 flex flex-col justify-between relative group">
      <div>
        {/* Header metadata */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-mono text-xs font-semibold text-amberink-700 bg-amberink-100/70 px-2 py-0.5 rounded">
              № {formattedNumber}
            </span>
            <span className="text-[11px] font-sans uppercase tracking-wider text-ink-500 font-medium">
              {prompt.categoryLabel}
            </span>
          </div>

          <span className="text-xs font-sans text-ink-600 italic bg-ink-900/[0.04] px-2.5 py-0.5 rounded-full border border-ink-900/[0.06]">
            {prompt.suggestedForm}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-editorial-heading text-xl sm:text-2xl font-semibold text-ink-950 mb-3 group-hover:text-amberink-800 transition-colors">
          {prompt.title}
        </h3>

        {/* Main prompt body */}
        <p className="text-sm text-ink-700 leading-relaxed font-sans mb-5">
          {prompt.text}
        </p>

        {/* Spark quote callout */}
        <div className="p-3.5 rounded-lg bg-[#F4EFE6]/70 border-l-2 border-amberink-600 mb-6">
          <div className="flex items-start space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-amberink-700 mt-0.5 shrink-0" />
            <p className="font-editorial-heading italic text-sm text-ink-900 leading-snug">
              {prompt.spark}
            </p>
          </div>
        </div>
      </div>

      {/* Card actions */}
      <div className="pt-4 border-t border-ink-900/10 flex items-center justify-between gap-2 flex-wrap">
        <CopyButton
          text={fullCopyText}
          label="Copy Prompt"
          copiedLabel="Copied!"
          variant="outline"
        />

        <Link
          href={`/submit?prompt=${encodeURIComponent(prompt.title)}`}
          className="inline-flex items-center text-xs font-sans font-medium text-ink-700 hover:text-amberink-800 transition-colors group/link"
        >
          <span>Write to this prompt</span>
          <ArrowUpRight className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
