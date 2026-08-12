import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogDetailPage } from "../../components/blog/BlogDetailPage";
import { blogPosts } from "../../data/home";

type BlogSlugPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.href.split("/").filter(Boolean).at(-1),
  }));
}

export async function generateMetadata({ params }: BlogSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href === `/blog/${slug}`);

  if (!post) return {};

  return {
    title: `${post.title} | Webtek Digital`,
    description: post.excerpt,
    alternates: { canonical: `https://www.webtekdigital.com${post.href}/` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.webtekdigital.com${post.href}/`,
      type: "article",
      images: [{ url: post.image, alt: post.imageAlt }],
    },
  };
}

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return <BlogDetailPage post={post} />;
}
