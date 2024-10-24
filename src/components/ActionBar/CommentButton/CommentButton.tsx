import { Blog } from "@/types/blog.type";
import ActionButton from "../ActionButton/ActionButton";
import { ChatBubbleOvalLeftIcon } from "@heroicons/react/24/outline";

export default function CommentButton({ blog }: { blog: Blog }) {
  return (
    <ActionButton>
      <ChatBubbleOvalLeftIcon className="size-[14px] stroke-[2px] text-[#868787]" />

      {blog.comments === 0 ? (
        ""
      ) : (
        <span className="text-[14px]">{blog.comments}</span>
      )}
    </ActionButton>
  );
}
