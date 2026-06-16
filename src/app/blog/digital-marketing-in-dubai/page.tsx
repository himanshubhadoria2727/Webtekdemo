import { BlogDetailPage } from "../../components/blog/BlogDetailPage";
import { blogPosts } from "../../data/home";

export default function DigitalMarketingInDubaiPage() {
  return <BlogDetailPage post={blogPosts[0]} />;
}
