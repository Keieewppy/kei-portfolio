"use client";

import { useEffect } from "react";
import { ReactLenis } from "lenis/react";

import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";
import { Journey } from "@/components/sections/journey";
import { Contact } from "@/components/sections/contact";
import { SpringMouseFollow } from "@/components/ui/skiper/skiper61";
import { ScrollProgress } from "@/components/ui/skiper/skiper89";

export default function Home() {
  // Pause CSS animations when the page isn't visible (switching apps, other tabs)
  useEffect(() => {
    const onVis = () => document.documentElement.classList.toggle("page-hidden", document.hidden);
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  return (
    // Lenis smooth scrolling (the same setup Skiper UI's scroll components use)
    <ReactLenis root options={{ syncTouch: false }}>
      <div className="page-bg" aria-hidden />
      <SiteNav />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <Journey />
        <Contact />
      </main>
      {/* Skiper UI 61: spring cursor follower (desktop only) */}
      <SpringMouseFollow />
      {/* Skiper UI 89: draggable scroll progress ring */}
      <ScrollProgress />
    </ReactLenis>
  );
}
