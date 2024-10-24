import { Blog } from "@/types/blog.type";
import LikeBlog from "./LikeBlog/LikeBlog";
import CommentBlog from "./CommentBlog/CommentBlog";

export default function BlogActionBar({ blog }: { blog: Blog }) {
  return (
    <div>
      <LikeBlog blog={blog} />
      <CommentBlog blog={blog} />
    </div>
  );
}
