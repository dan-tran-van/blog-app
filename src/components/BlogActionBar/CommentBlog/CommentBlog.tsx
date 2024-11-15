import { Blog } from "@/types/blog.type";
import { Button } from "@nextui-org/react";
import { MessageCircleIcon } from "lucide-react";

export default function CommentBlog({ blog }: { blog: Blog }) {
  return (
    <>
      {blog.comments === 0 ? (
        <Button
          variant="bordered"
          radius="full"
          className="border-[1px] border-[#e6e6e6] text-[#868787] hover:bg-[#f0f0f0]"
          isIconOnly
        >
          <MessageCircleIcon size={20} color="#868787" />
        </Button>
      ) : (
        <Button
          variant="bordered"
          radius="full"
          className="border-[1px] border-[#e6e6e6] text-[#868787] hover:bg-[#f0f0f0]"
          startContent={<MessageCircleIcon size={20} color="#868787" />}
        >
          {blog.comments}
        </Button>
      )}
    </>
  );
}
