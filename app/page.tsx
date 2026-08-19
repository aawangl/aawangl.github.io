"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import nyFallTrees from "@/public/photos/ny-fall-trees.jpg";
import profilePhoto from "@/public/photos/profile.jpg";

// Persists across client-side navigation but resets on a hard reload, so the
// typewriter intro only plays the first time the page loads in a session.
let hasPlayedNameIntro = false;

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  const [typedLength, setTypedLength] = useState(() =>
    hasPlayedNameIntro || shouldReduceMotion ? siteConfig.tagline.length : 0,
  );

  useEffect(() => {
    if (hasPlayedNameIntro || shouldReduceMotion) return;

    let cancelled = false;
    let index = 0;

    const typeNext = () => {
      if (cancelled) return;
      // Only mark the intro as played once typing actually starts, so a
      // React Strict Mode dev double-invoke (which cancels before this
      // timer fires) doesn't mark it played without ever running it.
      hasPlayedNameIntro = true;
      index += 1;
      setTypedLength(index);
      if (index < siteConfig.tagline.length) {
        const isSpace = siteConfig.tagline[index - 1] === " ";
        const delay = isSpace ? 180 + Math.random() * 140 : 45 + Math.random() * 110;
        window.setTimeout(typeNext, delay);
      }
    };

    const start = window.setTimeout(typeNext, 400);
    return () => {
      cancelled = true;
      window.clearTimeout(start);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="relative h-[min(80vh,720px)] min-h-[480px] w-full overflow-hidden">
      <Image
        src={nyFallTrees}
        alt="Trees in fall in upstate New York"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(0,0,0,0.2),transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center"
      >
        <div className="relative h-24 w-24 overflow-hidden rounded-full shadow-[0_4px_24px_rgba(0,0,0,0.35)] sm:h-36 sm:w-36">
          <Image
            src={profilePhoto}
            alt={siteConfig.name}
            fill
            priority
            sizes="144px"
            className="object-cover"
          />
        </div>
        <h1
          aria-label={siteConfig.tagline}
          className="font-serif text-5xl leading-tight tracking-tight text-background drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-6xl"
        >
          <span aria-hidden="true">{siteConfig.tagline.slice(0, typedLength)}</span>
        </h1>
      </motion.div>
    </div>
  );
}
