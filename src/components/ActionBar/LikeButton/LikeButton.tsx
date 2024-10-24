import { Blog } from "@/types/blog.type";
import ActionButton from "../ActionButton/ActionButton";
import { HeartIcon } from "@heroicons/react/24/outline";

export default function LikeButton({ blog }: { blog: Blog }) {
  return (
    <ActionButton>
      <HeartIcon className="size-[14px] stroke-[2px] text-[#868787]" />
      <span className="text-[14px]">{blog.likes}</span>
    </ActionButton>
  );
}
