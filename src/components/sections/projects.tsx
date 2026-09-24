"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import { projects } from "@/data/profile";
import { StickyCard_001 } from "@/components/ui/skiper/skiper16";
import StatsCounter from "@/components/ui/vengeance/stats-counter";
import TextAnimation from "@/components/ui/vengeance/stagger-text";
import { ProjectVisual } from "./project-visuals";

export function Projects() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section id="work" className="relative">
      <div className="mx-auto max-w-[1120px] px-4 pt-24 sm:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-teal">Selected work</p>
        <h2 className="font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]">
          <TextAnimation>Apps I&apos;ve designed and built</TextAnimation>
        </h2>
        <p className="mt-4 max-w-[48ch] text-muted">
          Each one started as a blank screen and a real problem: booking a doctor, running a hospital counter, getting paid.
        </p>
      </div>

      {/* Skiper UI 16: Card stack scroll. Each project pins, then shrinks under the next one. */}
      <div ref={container} className="relative px-4 pb-[20vh] sm:px-8">
        {projects.map((project, i) => {
          const targetScale = Math.max(0.8, 1 - (projects.length - i - 1) * 0.05);
          return (
            <StickyCard_001
              key={project.id}
              i={i}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              className="border border-line bg-gradient-to-br from-panel to-ink-2 shadow-[0_40px_80px_-40px_rgba(0,0,0,.8)]"
            >
              <article className="grid items-center gap-8 p-6 sm:p-10 md:grid-cols-[1fr_260px] md:gap-12">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-[clamp(30px,3.6vw,44px)] font-bold leading-none tracking-[-0.03em]">
                      {project.name}
                    </h3>
                    {project.status && (
                      <span
                        className={`rounded-full px-3 py-1 font-mono text-[11.5px] ${
                          project.id === "beclazo" ? "bg-sand/15 text-sand" : "bg-teal/15 text-teal"
                        }`}
                      >
                        {project.status}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 font-mono text-[13px] text-muted">{project.kind}</p>
                  <p className="mt-5 max-w-[58ch] text-[15px] leading-relaxed text-muted sm:text-base">
                    {project.description}
                  </p>

                  {/* Vengeance UI: Stats Counter, numbers count up when the card comes into view */}
                  <div className="mt-6 flex flex-wrap gap-8">
                    {project.stats.map((s) => (
                      <div key={s.label}>
                        <StatsCounter
                          value={s.value}
                          prefix={s.prefix}
                          suffix={s.suffix}
                          className="block font-display text-3xl font-bold text-text"
                        />
                        <span className="font-mono text-[11px] uppercase tracking-wider text-muted">{s.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((t) => (
                      <span key={t} className="rounded-full border border-line bg-white/[.02] px-3 py-1.5 font-mono text-[12.5px]">
                        {t}
                      </span>
                    ))}
                  </div>

                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex font-mono text-sm text-teal underline-offset-4 hover:underline"
                    >
                      {project.repo.replace("https://", "")} ↗
                    </a>
                  )}
                </div>

                <div className="hidden justify-center md:flex">
                  <ProjectVisual id={project.id} />
                </div>
              </article>
            </StickyCard_001>
          );
        })}
      </div>
    </section>
  );
}
