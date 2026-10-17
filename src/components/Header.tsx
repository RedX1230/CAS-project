"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Feather, Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FCFBF7]/90 backdrop-blur-md border-b border-ink-900/10 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Name */}
          <Link
            href="/"
            className="group flex items-center space-x-3 text-ink-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900 rounded-sm"
          >
            <div className="w-9 h-9 rounded-full bg-ink-900 text-parchment-50 flex items-center justify-center transition-transform group-hover:rotate-[-6deg]">
              <Feather className="w-4 h-4 stroke-[2]" />
            </div>
            <div className="flex flex-col">
              <span className="font-editorial-heading text-xl sm:text-2xl font-semibold tracking-tight text-ink-900 group-hover:text-amberink-700 transition-colors">
                {siteConfig.name}
              </span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-ink-500 font-medium -mt-0.5">
                Youth Writing Collective
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              const isSubmit = link.href === "/submit";

              if (isSubmit) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="ml-3 inline-flex items-center px-4 py-2 rounded-full text-xs font-medium uppercase tracking-wider bg-ink-900 text-parchment-50 hover:bg-amberink-800 transition-all shadow-sm hover:shadow"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
                  </Link>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    active
                      ? "text-ink-950 font-semibold bg-ink-900/5"
                      : "text-ink-700 hover:text-ink-950 hover:bg-ink-900/[0.03]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <Link
              href="/submit"
              className="px-3 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider bg-ink-900 text-parchment-50"
            >
              Submit
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-ink-800 hover:text-ink-950 hover:bg-ink-900/5 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-ink-900/10 bg-[#FAF7F2] px-4 pt-3 pb-6 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3.5 py-2.5 rounded-md text-base font-serif transition-colors ${
                    active
                      ? "bg-ink-900/10 text-ink-950 font-semibold"
                      : "text-ink-800 hover:bg-ink-900/5 hover:text-ink-950"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-ink-900/10 flex items-center justify-between text-xs text-ink-500 font-sans">
            <span>Ages 14–18 CAS Initiative</span>
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amberink-700 hover:underline flex items-center"
            >
              {siteConfig.instagramHandle}
              <ArrowUpRight className="w-3 h-3 ml-0.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
