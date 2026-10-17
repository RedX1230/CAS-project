import Link from "next/link";
import { ArrowLeft, Feather } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 py-16">
      <div className="max-w-md text-center">
        <div className="w-12 h-12 rounded-full bg-ink-900 text-parchment-50 flex items-center justify-center mx-auto mb-6">
          <Feather className="w-6 h-6" />
        </div>

        <span className="text-xs font-mono text-amberink-700 uppercase tracking-widest font-semibold block mb-2">
          Page 404 · Unwritten Sheet
        </span>

        <h1 className="font-editorial-heading text-3xl sm:text-4xl font-bold text-ink-950 mb-4">
          This page is still blank.
        </h1>

        <p className="font-editorial-heading italic text-base text-ink-700 leading-relaxed mb-8">
          The piece or chapter you were searching for does not seem to exist in our archive.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-ink-900 text-parchment-50 text-xs font-sans font-medium uppercase tracking-wider hover:bg-amberink-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-1.5" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/archive"
            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#FAF7F2] text-ink-900 border border-ink-900/15 text-xs font-sans font-medium uppercase tracking-wider hover:border-ink-900 transition-colors"
          >
            Explore the Archive
          </Link>
        </div>
      </div>
    </div>
  );
}
