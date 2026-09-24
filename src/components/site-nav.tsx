"use client";

import { useLenis } from "lenis/react";

import { SpotlightNavbar } from "@/components/ui/vengeance/spotlight-navbar";

const items = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#stack" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

/** Vengeance UI: Spotlight Navbar. A light follows your mouse along the bar and glides to the active link. */
export function SiteNav() {
  const lenis = useLenis();

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center pt-4 sm:pt-5">
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          lenis?.scrollTo(0);
        }}
        className="pointer-events-auto absolute left-4 top-4 hidden size-11 place-items-center rounded-xl bg-teal font-display text-lg font-extrabold text-ink sm:left-8 sm:top-5 md:grid"
        aria-label="Back to top"
      >
        K
      </a>
      <SpotlightNavbar
        items={items}
        className="pointer-events-auto pt-0"
        onItemClick={(item) => {
          if (lenis) lenis.scrollTo(item.href, { offset: -20 });
          else document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </div>
  );
}
