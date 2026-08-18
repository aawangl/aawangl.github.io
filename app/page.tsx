"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-16 px-6 py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <h1 className="font-serif text-4xl leading-tight tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">
          {siteConfig.tagline}
        </p>
      </motion.div>
    </div>
  );
}
