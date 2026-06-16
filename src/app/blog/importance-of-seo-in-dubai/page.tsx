import { BlogDetailPage } from "../../components/blog/BlogDetailPage";
import { blogPosts } from "../../data/home";

export default function ImportanceOfSeoInDubaiPage() {
  return <BlogDetailPage post={blogPosts[2]} />;
}
