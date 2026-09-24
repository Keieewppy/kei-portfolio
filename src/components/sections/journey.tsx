"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import { journey } from "@/data/profile";
import TextAnimation from "@/components/ui/vengeance/stagger-text";

export function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="journey" className="mx-auto max-w-[1120px] px-4 pt-28 sm:px-8">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-teal">Journey</p>
      <h2 className="font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]">
        <TextAnimation>Where I&apos;ve been</TextAnimation>
      </h2>

      <div ref={ref} className="relative mt-10 grid gap-5 pl-8">
        {/* the line draws itself as you scroll */}
        <div className="absolute bottom-2 left-[7px] top-2 w-0.5 bg-line" />
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top bg-gradient-to-b from-teal to-blue"
        />
        {journey.map((j, i) => (
          <motion.div
            key={j.title}
            initial={{ opacity: 0.3, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative grid gap-1.5 rounded-2xl border border-line bg-ink-2 p-6 sm:grid-cols-[170px_1fr] sm:gap-6"
          >
            <span className="absolute -left-8 top-7 size-3.5 rounded-full border-[3px] border-teal bg-ink" />
            <span className="pt-1 font-mono text-[13px] text-muted">{j.when}</span>
            <div>
              <h3 className="font-display text-xl font-bold tracking-[-0.02em]">
                {j.title}
                {j.org && <span className="text-teal"> · {j.org}</span>}
              </h3>
              <p className="mt-2 text-muted">{j.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
