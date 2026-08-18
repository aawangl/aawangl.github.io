import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatPostDate } from "@/lib/posts";
import { RevealOnScroll } from "@/components/RevealOnScroll";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);
  return { title: post?.title ?? "Post not found" };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug).catch(() => null);

  if (!post) notFound();

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-16 sm:py-24">
      <RevealOnScroll className="flex flex-col gap-3">
        <h1 className="font-serif text-3xl tracking-tight">{post.title}</h1>
        <time className="text-sm text-muted" dateTime={post.date}>
          {formatPostDate(post.date)}
        </time>
      </RevealOnScroll>
      <div
        className="prose-content flex flex-col gap-4 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
      />
    </div>
  );
}
