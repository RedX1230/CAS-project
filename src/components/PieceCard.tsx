import Link from "next/link";
import { ArrowRight, BookOpen, Feather, Clock } from "lucide-react";
import { Piece } from "@/types";

interface PieceCardProps {
  piece: Piece;
  compact?: boolean;
}

export default function PieceCard({ piece, compact = false }: PieceCardProps) {
  const isPoem = piece.type === "poetry";

  return (
    <article className="paper-card rounded-xl p-6 sm:p-7 flex flex-col justify-between relative group">
      <div>
        {/* Top meta tags */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span
              className={`inline-flex items-center text-[11px] font-sans font-medium uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
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
            <span className="text-xs text-ink-500 font-sans">
              {piece.category}
            </span>
          </div>

          <div className="flex items-center space-x-1 text-xs text-ink-500 font-sans">
            <Clock className="w-3 h-3" />
            <span>{piece.readingTime}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-editorial-heading text-xl sm:text-2xl font-semibold text-ink-950 mb-1.5 group-hover:text-amberink-800 transition-colors">
          <Link href={`/archive/${piece.slug}`} className="hover:underline">
            {piece.title}
          </Link>
        </h3>

        {/* Byline */}
        <div className="flex items-center space-x-2 text-xs text-ink-600 font-sans mb-4">
          <span className="font-medium text-ink-900">{piece.author}</span>
          <span>·</span>
          <span>{piece.authorAge}</span>
          <span>·</span>
          <span className="text-ink-400">{piece.date}</span>
        </div>

        {/* Excerpt */}
        <p className="font-editorial-heading italic text-ink-800 text-base leading-relaxed mb-6 border-l-2 border-ink-900/15 pl-4">
          “{piece.excerpt}”
        </p>
      </div>

      {/* Footer link & Sample disclaimer */}
      <div className="pt-4 border-t border-ink-900/10 flex items-center justify-between">
        <span className="text-[10px] font-sans uppercase tracking-widest text-ink-400 font-medium">
          Sample Contribution
        </span>

        <Link
          href={`/archive/${piece.slug}`}
          className="inline-flex items-center text-xs font-sans font-medium text-ink-900 group-hover:text-amberink-800 transition-colors"
        >
          <span>Read piece</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
