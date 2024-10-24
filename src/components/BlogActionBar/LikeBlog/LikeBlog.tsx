import { Blog } from "@/types/blog.type";
import { HeartIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";

export default function LikeBlog({ blog }: { blog: Blog }) {
  return (
    <Button
      variant="bordered"
      radius="full"
      className="border-[1px] border-[#e6e6e6] text-[#868787] hover:bg-[#f0f0f0]"
      startContent={<HeartIcon className="size-[20px] text-[#868787]" />}
    >
      {blog.likes}
    </Button>
  );
}
