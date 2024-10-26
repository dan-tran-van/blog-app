import { Blog } from "@/types/blog.type";
import ActionButton from "../ActionButton/ActionButton";
import { HeartIcon } from "lucide-react";

export default function LikeButton({ blog }: { blog: Blog }) {
  return (
    <ActionButton>
      {blog.isLiked ? (
        <HeartIcon fill="pink" size={14} color="pink" />
      ) : (
        <HeartIcon size={14} color="#868787" />
      )}

      <span className="text-[14px]">{blog.likes}</span>
    </ActionButton>
  );
}
