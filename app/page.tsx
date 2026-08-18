"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import nyFallTrees from "@/public/photos/ny-fall-trees.jpg";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

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
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(0,0,0,0.35),transparent_70%)]" />
      <motion.div
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center"
      >
        <h1 className="font-serif text-5xl leading-tight tracking-tight text-background drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] sm:text-6xl">
          {siteConfig.name}
        </h1>
      </motion.div>
    </div>
  );
}
