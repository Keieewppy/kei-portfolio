"use client";

import { useState } from "react";

import { profile } from "@/data/profile";
import { GlowBorderCard } from "@/components/ui/vengeance/glow-border-card";
import TextAnimation from "@/components/ui/vengeance/stagger-text";
import { TextRoll } from "@/components/ui/skiper/skiper58";

const brandGlow = [
  "#2ec4b6", "#3fd4c6", "#5fe0d2", "#4d7cff", "#6a92ff",
  "#2ec4b6", "#e9b872", "#2ec4b6", "#4d7cff", "#2ec4b6",
];

export function Contact() {
  const [copied, setCopied] = useState("");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied("Copied to clipboard.");
    } catch {
      setCopied("Couldn't copy. Select the address and press Ctrl+C.");
    }
    setTimeout(() => setCopied(""), 2500);
  };

  const links = [
    { label: "GitHub", href: profile.github },
    { label: "LinkedIn", href: profile.linkedin },
    { label: "Email", href: `mailto:${profile.email}` },
  ];

  return (
    <section id="contact" className="mx-auto max-w-[1120px] px-4 pb-10 pt-32 sm:px-8">
      {/* Vengeance UI: Glow Border Card, a rotating teal/blue glow around the contact card */}
      <GlowBorderCard
        width="100%"
        aspectRatio="auto"
        borderRadius="1.75rem"
        animationDuration={6}
        gradientColors={brandGlow}
        blurAmount="1em"
        className="place-content-stretch !bg-panel/80"
      >
        <div className="w-full p-4 sm:p-10">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-teal">Contact</p>
          <h2 className="max-w-[16ch] font-display text-[clamp(36px,5.6vw,64px)] font-bold leading-[1.02] tracking-[-0.03em]">
            <TextAnimation>Have a role or a product that needs building?</TextAnimation>
          </h2>
          <p className="mt-5 max-w-[52ch] text-muted">
            I&apos;m looking for a full-time developer role where I can ship real products. The fastest way to reach me is email.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <code className="select-all break-all rounded-xl border border-line bg-ink px-4 py-3 font-mono text-[clamp(15px,2.2vw,20px)]">
              {profile.email}
            </code>
            <button
              type="button"
              onClick={copy}
              className="rounded-xl bg-teal px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-[#45d6c8]"
            >
              Copy email
            </button>
          </div>
          <p className="mt-2 min-h-[1.4em] font-mono text-[13px] text-teal" aria-live="polite">
            {copied}
          </p>

          {/* Skiper UI 58: Text roll. Letters roll over on hover. */}
          <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="inline-flex items-end gap-2 text-text hover:text-teal"
                >
                  <TextRoll className="font-display text-[clamp(28px,4vw,44px)] font-extrabold uppercase tracking-[-0.03em]">
                    {l.label}
                  </TextRoll>
                  <span className="font-mono text-sm">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </GlowBorderCard>

      <footer className="mt-16 flex flex-wrap justify-between gap-3 border-t border-line pb-10 pt-6 font-mono text-[13px] text-muted">
        <span>© 2026 {profile.name}</span>
        <span>
          Components from{" "}
          <a href="https://skiper-ui.com" target="_blank" rel="noopener noreferrer" className="text-text underline underline-offset-4">
            Skiper UI
          </a>{" "}
          and{" "}
          <a href="https://www.vengenceui.com" target="_blank" rel="noopener noreferrer" className="text-text underline underline-offset-4">
            Vengeance UI
          </a>
        </span>
      </footer>
    </section>
  );
}
