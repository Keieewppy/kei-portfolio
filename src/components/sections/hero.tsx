"use client";

import { motion } from "framer-motion";

import { profile } from "@/data/profile";
import { AnimatedRays } from "@/components/ui/vengeance/animated-rays";
import { BorderBeam } from "@/components/ui/vengeance/border-beam";
import TextAnimation from "@/components/ui/vengeance/stagger-text";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const terminal: { delay: number; content: React.ReactNode }[] = [
  { delay: 0.6, content: <><span className="text-teal">❯</span> <span className="text-text">kei --whoami</span></> },
  { delay: 1.1, content: <>  software developer · co-founder @ <span className="text-sand">beclazo</span></> },
  { delay: 1.5, content: <>  BCA @ DITM, Delhi</> },
  { delay: 2.0, content: <><span className="text-teal">❯</span> <span className="text-text">kei ship --list</span></> },
  { delay: 2.5, content: <>  <span className="text-[#7ee0a1]">✓</span> vezora      <span className="text-sand">react-native</span>  31 screens</> },
  { delay: 2.9, content: <>  <span className="text-[#7ee0a1]">✓</span> healthhub   <span className="text-sand">flutter</span>       realtime sync</> },
  { delay: 3.3, content: <>  <span className="text-teal">◐</span> gokei       <span className="text-sand">flutter+node</span>  in progress</> },
  { delay: 3.8, content: <><span className="text-teal">❯</span> <span className="term-cursor" /></> },
];

export function Hero() {
  return (
    <header id="top" className="relative overflow-hidden">
      {/* Vengeance UI: Animated Rays, the aurora light in the top-right corner */}
      {/* Desktop only: it's a full-screen animated blur, too heavy for phone GPUs */}
      <div className="pointer-events-none absolute inset-0 hidden opacity-70 md:block">
        <AnimatedRays />
      </div>
      {/* Phones get a static glow instead */}
      <div
        className="pointer-events-none absolute inset-0 md:hidden"
        style={{ background: "radial-gradient(120% 60% at 100% 0%, rgba(46,196,182,.22), transparent 60%)" }}
      />

      <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-4 pb-16 pt-32 sm:px-8 md:pt-40 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div {...fadeUp(0)} className="flex items-center gap-2.5 font-mono text-[13px] text-teal">
            <span className="pulse-dot size-2 rounded-full bg-teal" />
            Open to full-time developer roles · {profile.location}
          </motion.div>

          {/* Vengeance UI: Stagger Text, the headline rises in word by word */}
          <h1 className="mt-5 font-display text-[clamp(44px,7.2vw,88px)] font-extrabold leading-[0.98] tracking-[-0.03em] text-balance">
            <span className="block">
              <TextAnimation>I build apps</TextAnimation>
            </span>
            <span className="block">
              <TextAnimation delay={0.15}>people can</TextAnimation>
            </span>
            <span className="block text-teal">
              <TextAnimation delay={0.3}>actually use.</TextAnimation>
            </span>
          </h1>

          <motion.p {...fadeUp(0.45)} className="mt-6 max-w-[54ch] text-lg text-muted">
            I&apos;m <b className="font-medium text-text">{profile.name} ({profile.alias})</b>. {profile.intro}
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-teal px-5 py-3 font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-[#45d6c8]"
            >
              See my work →
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-teal"
            >
              GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line bg-panel px-5 py-3 font-semibold transition hover:-translate-y-0.5 hover:border-teal"
            >
              LinkedIn
            </a>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp(0.3)}
          className="relative overflow-hidden rounded-2xl border border-line bg-gradient-to-b from-[#0f1d2e] to-[#0b1624] shadow-[0_30px_80px_-30px_rgba(0,0,0,.7)]"
          aria-label="Terminal summary"
        >
          <div className="flex items-center gap-2 border-b border-line px-3.5 py-3">
            <b className="inline-block size-[11px] rounded-full bg-[#2a3b52]" />
            <b className="inline-block size-[11px] rounded-full bg-[#2a3b52]" />
            <b className="inline-block size-[11px] rounded-full bg-[#2a3b52]" />
            <span className="ml-2 font-mono text-xs text-muted">~/kei — zsh</span>
          </div>
          <pre className="overflow-x-auto whitespace-pre-wrap px-5 pb-6 pt-4 font-mono text-[13.5px] leading-[1.9] text-muted">
            {terminal.map((line, i) => (
              <span key={i} className="term-line" style={{ animationDelay: `${line.delay}s` }}>
                {line.content}
              </span>
            ))}
          </pre>
          {/* Vengeance UI: Border Beam, a light that travels around the terminal edge */}
          <BorderBeam size={180} duration={9} colorFrom="#2ec4b6" colorTo="#4d7cff" />
        </motion.div>
      </div>
    </header>
  );
}
