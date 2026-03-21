"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/rentals", label: "Rentals" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-sand/60">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-0 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <Image src="/Logo.png" alt="CampKada" width={96} height={96} className="rounded-md" />
          <span className="text-lg font-bold text-forest tracking-tight">CampKada</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "text-sm font-medium transition-colors",
                pathname === href || pathname.startsWith(href + "/")
                  ? "text-forest"
                  : "text-bark/70 hover:text-bark"
              )}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 rounded-lg bg-forest px-4 py-2 text-sm font-semibold text-white hover:bg-forest-light transition-colors"
          >
            Get in Touch
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-bark"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-sand/60 bg-cream px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                "text-sm font-medium py-1",
                pathname === href || pathname.startsWith(href + "/") ? "text-forest" : "text-bark"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
