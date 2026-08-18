"use client";

import { useState } from "react";
import Image from "next/image";
import type { Photo } from "@/content/photos";
import { Lightbox } from "@/components/Lightbox";

export function PhotoGrid({ photos }: { photos: Photo[] }) {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <>
      <div className="columns-2 gap-3 sm:columns-3">
        {photos.map((photo) => (
          <button
            key={photo.src.src}
            onClick={() => setSelected(photo)}
            className="group mb-3 block w-full break-inside-avoid overflow-hidden rounded-md bg-border"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
              sizes="(min-width: 640px) 33vw, 50vw"
            />
          </button>
        ))}
      </div>
      <Lightbox photo={selected} onClose={() => setSelected(null)} />
    </>
  );
}
