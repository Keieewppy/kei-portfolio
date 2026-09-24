"use client";

/**
 * Skiper 16 — Card stack scroll (StickyCard_001) — React + Framer Motion
 * Source: https://skiper-ui.com/v1/skiper16
 *
 * Adapted for this portfolio: the card renders any children (project content)
 * instead of a single image, and sizes itself to the viewport.
 *
 * License & Usage (Skiper UI free):
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * Author: @gurvinder-singh02 · https://gxuri.me
 */

import { motion, useTransform, type MotionValue } from "framer-motion";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

type StickyCardProps = {
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  className?: string;
  children: React.ReactNode;
};

const StickyCard_001 = ({
  i,
  progress,
  range,
  targetScale,
  className,
  children,
}: StickyCardProps) => {
  const container = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-4vh + ${i * 26}px)`,
        }}
        className={cn(
          "relative flex w-full max-w-[1040px] origin-top flex-col overflow-hidden rounded-[2rem]",
          className,
        )}
      >
        {children}
      </motion.div>
    </div>
  );
};

export { StickyCard_001 };
