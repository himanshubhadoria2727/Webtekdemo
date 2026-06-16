import { notFound } from "next/navigation";
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

export default async function BlogSlugPage({ params }: BlogSlugPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.href === `/blog/${slug}`);

  if (!post) {
    notFound();
  }

  return <BlogDetailPage post={post} />;
}
