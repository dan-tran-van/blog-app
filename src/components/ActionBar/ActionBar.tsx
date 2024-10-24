import { Blog } from "@/types/blog.type";
import LikeButton from "./LikeButton/LikeButton";
import CommentButton from "./CommentButton/CommentButton";
import ShareButton from "./ShareButton/ShareButton";

export default function ActionBar({
  blog,
  className,
}: {
  blog: Blog;
  className: string;
}) {
  return (
    <div className={className}>
      <LikeButton blog={blog} />
      <CommentButton blog={blog} />
      <ShareButton blog={blog} />
    </div>
  );
}
