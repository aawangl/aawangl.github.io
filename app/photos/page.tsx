import { photos } from "@/content/photos";
import { PhotoGrid } from "@/components/PhotoGrid";
import { EmptyState } from "@/components/EmptyState";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata = {
  title: "Photos",
};

export default function PhotosPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 sm:py-24">
      <h1 className="font-serif text-3xl tracking-tight">Photos</h1>
      <RevealOnScroll>
        {photos.length > 0 ? (
          <PhotoGrid photos={photos} />
        ) : (
          <EmptyState
            title="Photos coming soon"
            description="Add images to /public/photos and list them in content/photos.ts."
          />
        )}
      </RevealOnScroll>
    </div>
  );
}
