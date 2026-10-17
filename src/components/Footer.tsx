import Link from "next/link";
import { Feather, ArrowUpRight, Instagram, FileText, Heart } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#F4EFE6] border-t border-ink-900/10 text-ink-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Manifesto Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-full bg-ink-900 text-parchment-50 flex items-center justify-center">
                <Feather className="w-3.5 h-3.5" />
              </div>
              <span className="font-editorial-heading text-xl font-semibold tracking-tight text-ink-950">
                {siteConfig.name}
              </span>
            </div>

            <p className="font-editorial-heading italic text-lg text-ink-900">
              “{siteConfig.tagline}”
            </p>

            <p className="text-xs text-ink-600 leading-relaxed font-sans max-w-sm">
              A student-led digital creative-writing community encouraging young people aged 14–18 to
              fill blank pages with poetry, short stories, and personal truth. Part of the IB
              Creativity, Activity, Service (CAS) programme.
            </p>

            {/* Instagram Link */}
            <div className="pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-medium uppercase tracking-wider text-ink-800 hover:text-amberink-700 transition-colors group"
                aria-label={`Follow on Instagram at ${siteConfig.instagramHandle}`}
              >
                <div className="w-7 h-7 rounded-full border border-ink-900/20 flex items-center justify-center group-hover:border-amberink-700">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span>Follow {siteConfig.instagramHandle}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500 font-sans">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm font-sans">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-ink-700 hover:text-ink-950 hover:underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Submission & Editorial Guidelines Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-ink-500 font-sans">
              Submissions & Transparency
            </h4>
            <p className="text-xs text-ink-600 leading-relaxed font-sans">
              Submissions are gathered safely through Google Forms. Zero user accounts, zero database
              storage, zero advertisements. All writing published is reviewed and approved by
              student editors with student consent.
            </p>

            <div className="pt-2 space-y-2">
              <a
                href={siteConfig.googleFormDirectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-medium text-amberink-800 hover:underline"
              >
                <FileText className="w-3.5 h-3.5 mr-1.5" />
                <span>Open Submission Google Form</span>
                <ArrowUpRight className="w-3 h-3 ml-1" />
              </a>
              <div className="text-[11px] text-ink-500 font-sans">
                Sample pieces in the archive use fictional contributor pseudonyms.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Colophon Bar */}
        <div className="mt-12 pt-8 border-t border-ink-900/10 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-500 font-sans gap-4">
          <p>
            © {currentYear} {siteConfig.name} · A Student CAS Project. All rights reserved by the respective student authors.
          </p>
          <div className="flex items-center space-x-1 text-ink-600">
            <span>Crafted for writers with</span>
            <Heart className="w-3 h-3 text-crimson-subtle fill-current" />
            <span>and ink.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
