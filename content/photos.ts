import type { StaticImageData } from "next/image";

import beachSand from "@/public/photos/beach-sand.jpg";
import californiaCoast from "@/public/photos/california-coast.jpg";
import comoMountains from "@/public/photos/como-mountains.jpg";
import italianCoast from "@/public/photos/italian-coast.jpg";
import nyFallTrees from "@/public/photos/ny-fall-trees.jpg";
import nyTallTrees from "@/public/photos/ny-tall-trees.jpg";
import osakaBridge from "@/public/photos/osaka-bridge.jpg";
import tokyoSkytree from "@/public/photos/tokyo-skytree.jpg";

export type Photo = {
  src: StaticImageData;
  alt: string;
  caption?: string;
};

// Add image files to /public/photos, import them above, then list them here.
export const photos: Photo[] = [
  { src: californiaCoast, alt: "California coast", caption: "Big Sur, 2024" },
  { src: nyFallTrees, alt: "Trees in Fall in Upstate NY", caption: "Upstate NY, 2025" },
  { src: nyTallTrees, alt: "Trees in Fall in Upstate NY", caption: "Upstate NY, 2025" },
  { src: comoMountains, alt: "Mountains in Como, Italy", caption: "Como, 2025" },
  { src: italianCoast, alt: "Manarola at Sunset", caption: "Manarola, 2025" },
  { src: osakaBridge, alt: "Man playing guitar on bridge in Osaka, Japan", caption: "Osaka, 2024" },
  { src: tokyoSkytree, alt: "Tokyo Skytree", caption: "Tokyo, 2024" },
  { src: beachSand, alt: "Waves in the sand", caption: "PNW, 2025" },
];
