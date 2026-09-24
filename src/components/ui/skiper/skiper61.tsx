"use client";

/**
 * Skiper 61 — Mouse follow with spring (SpringMouseFollow) — React + Framer Motion
 * Source: https://skiper-ui.com/v1/skiper61
 *
 * Adapted for this portfolio: follows the pointer across the whole page
 * (fixed position), grows over links/buttons, and is hidden on touch screens.
 *
 * License & Usage (Skiper UI free):
 * - Free to use and modify in both personal and commercial projects.
 * - Attribution to Skiper UI is required when using the free version.
 * Author: @gurvinder-singh02 · https://gxuri.me
 */

import { motion, useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

const SPRING = {
  mass: 0.1,
  damping: 10,
  stiffness: 131,
};

const SpringMouseFollow = () => {
  const xSpring = useSpring(0, SPRING);
  const ySpring = useSpring(0, SPRING);
  const opacitySpring = useSpring(0, SPRING);
  const scaleSpring = useSpring(0, SPRING);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const move = (e: PointerEvent) => {
      xSpring.set(e.clientX);
      ySpring.set(e.clientY);
      opacitySpring.set(1);
      const interactive = (e.target as HTMLElement | null)?.closest("a, button");
      scaleSpring.set(interactive ? 2.4 : 1);
    };
    const leave = () => {
      opacitySpring.set(0);
      scaleSpring.set(0);
    };

    window.addEventListener("pointermove", move);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [xSpring, ySpring, opacitySpring, scaleSpring]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{
        x: xSpring,
        y: ySpring,
        opacity: opacitySpring,
        scale: scaleSpring,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -ml-3 -mt-3 size-6 rounded-full border border-teal bg-teal/15 mix-blend-difference"
    />
  );
};

export { SpringMouseFollow };
