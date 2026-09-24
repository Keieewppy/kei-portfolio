"use client";

/**
 * Skiper 89 — Scroll progress 001 — React + Framer Motion + NumberFlow
 * Source: https://skiper-ui.com/v1/skiper89
 *
 * Adapted for this portfolio: only the draggable progress widget is kept
 * (demo text removed), coloured teal, imported from framer-motion, and hidden on phones.
 *
 * License & Usage (Skiper UI free):
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * Author: @gurvinder-singh02 · https://gxuri.me
 */

import NumberFlow from "@number-flow/react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

import { cn } from "@/lib/utils";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const [progressPercent, setProgressPercent] = useState(0);

  const clampedProgress = useTransform(scrollYProgress, (value) =>
    Math.min(Math.max(value, 0), 1),
  );
  const progressAsPercent = useTransform(clampedProgress, (value) =>
    Math.round(value * 100),
  );

  useMotionValueEvent(progressAsPercent, "change", (value) => {
    setProgressPercent(value);
  });

  const svgRadius = 18;
  const circumference = 2 * Math.PI * svgRadius;

  return (
    <motion.div
      drag
      dragMomentum={false}
      className="group fixed bottom-4 right-4 z-50 hidden cursor-grab items-center md:block gap-1 text-teal active:cursor-grabbing"
    >
      <NumberFlow
        value={progressPercent}
        className="absolute top-1 flex h-8 -translate-y-full items-center justify-center px-2 font-mono text-xs font-medium text-foreground/50 tabular-nums opacity-0 transition-opacity group-hover:opacity-100"
        suffix="%"
      />
      <div className="flex size-12 items-center justify-center rounded-2xl border border-line bg-ink/60 backdrop-blur">
        <svg className={cn("size-10")} viewBox="0 0 48 48" role="presentation">
          <circle
            cx="24"
            cy="24"
            r={svgRadius}
            stroke="currentColor"
            strokeWidth="3"
            className="opacity-20"
            fill="none"
          />
          <motion.circle
            cx="24"
            cy="24"
            r={svgRadius}
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${circumference}`}
            style={{
              pathLength: clampedProgress,
              rotate: -90,
              transformOrigin: "50% 50%",
            }}
          />
        </svg>
      </div>
    </motion.div>
  );
};

export { ScrollProgress };
