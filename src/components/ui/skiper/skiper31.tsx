"use client";

/**
 * Skiper 31 — Text scroll animation (CharacterV1) — React + Framer Motion
 * Source: https://skiper-ui.com/v1/skiper31
 *
 * Adapted for this portfolio: accent colour changed to the site's teal and
 * the word-level wrapper (ScrollAssembleText) added for easy reuse.
 *
 * License & Usage (Skiper UI free):
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * Author: @gurvinder-singh02 · https://gxuri.me
 */

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import React, { useRef } from "react";

import { cn } from "@/lib/utils";

type CharacterProps = {
  char: string;
  index: number;
  centerIndex: number;
  scrollYProgress: MotionValue<number>;
  className?: string;
};

const CharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
  className,
}: CharacterProps) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [distanceFromCenter * 50, 0]);

  return (
    <motion.span
      className={cn("inline-block", isSpace && "w-[0.3em]", className)}
      style={{ x, rotateX }}
    >
      {isSpace ? " " : char}
    </motion.span>
  );
};

/** Scroll-driven headline: letters start scattered and assemble as you scroll. */
const ScrollAssembleText = ({
  text,
  className,
  charClassName,
}: {
  text: string;
  className?: string;
  charClassName?: string;
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const characters = text.split("");
  const centerIndex = Math.floor(characters.length / 2);

  return (
    <div
      ref={targetRef}
      className="relative flex h-[170vh] items-center justify-center overflow-hidden px-4"
    >
      <div className={cn("w-full text-center", className)} style={{ perspective: "500px" }}>
        {characters.map((char, index) => (
          <CharacterV1
            key={index}
            char={char}
            index={index}
            centerIndex={centerIndex}
            scrollYProgress={scrollYProgress}
            className={charClassName}
          />
        ))}
      </div>
    </div>
  );
};

export { CharacterV1, ScrollAssembleText };
