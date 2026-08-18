import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/posts";
import { EmptyState } from "@/components/EmptyState";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-10 px-6 py-16 sm:py-24">
      <h1 className="font-serif text-3xl tracking-tight">Blog</h1>
      <RevealOnScroll>
        {posts.length > 0 ? (
          <ul className="flex flex-col">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="border-b border-border py-5 first:pt-0 last:border-b-0"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1"
                >
                  <span className="font-serif text-lg transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <time className="text-sm text-muted" dateTime={post.date}>
                    {formatPostDate(post.date)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState
            title="Under Construction"
          />
        )}
      </RevealOnScroll>
    </div>
  );
}
