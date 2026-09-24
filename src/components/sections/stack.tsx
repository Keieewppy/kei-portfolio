"use client";

import { motion } from "framer-motion";

import { marquee, stack } from "@/data/profile";
import { ScrollAssembleText } from "@/components/ui/skiper/skiper31";
import TextAnimation from "@/components/ui/vengeance/stagger-text";

export function Stack() {
  return (
    <section id="stack" className="relative">
      {/* Skiper UI 31: Text scroll animation. The letters fly in and lock together as you scroll. */}
      <ScrollAssembleText
        text="BUILT TO SHIP"
        className="font-display text-[clamp(48px,11vw,150px)] font-extrabold uppercase leading-none tracking-[-0.04em]"
        charClassName="text-teal"
      />

      <div className="-mt-[40vh] mx-auto max-w-[1120px] px-4 sm:px-8">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.15em] text-teal">Toolkit</p>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-[clamp(32px,4.4vw,52px)] font-bold leading-[1.05] tracking-[-0.03em]">
            <TextAnimation>What I build with</TextAnimation>
          </h2>
          <p className="max-w-[44ch] text-muted">
            I pick the stack for the job. Flutter or React Native for apps, Node or Firebase behind them.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-3xl border border-line bg-line [gap:1px] sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((col, ci) => (
            <motion.div
              key={col.group}
              initial={{ opacity: 0.3, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.08 }}
              className="bg-ink-2 p-6"
            >
              <h4 className="mb-4 font-mono text-xs uppercase tracking-wider text-muted">{col.group}</h4>
              <ul className="grid gap-2 font-medium">
                {col.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5">
                    <span className="size-1.5 rounded-[2px] bg-teal" />
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-16 overflow-hidden border-y border-line py-4" aria-hidden>
        <div className="marquee-track flex w-max gap-11 font-mono text-[15px] text-muted">
          {[...marquee, ...marquee].map((t, i) => (
            <span key={i} className="flex items-center gap-11 whitespace-nowrap">
              {t}
              <span className="text-[11px] text-teal">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
