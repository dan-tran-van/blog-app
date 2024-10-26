import { Blog } from "@/types/blog.type";
import { HeartIcon } from "lucide-react";
import { Button } from "@nextui-org/react";

export default function LikeBlog({ blog }: { blog: Blog }) {
  function handleLike() {}

  function handleUnlike() {}
  return (
    <Button
      variant="bordered"
      radius="full"
      className="border-[1px] border-[#e6e6e6] text-[#868787] hover:bg-[#f0f0f0]"
      startContent={
        blog.isLiked ? (
          <HeartIcon fill="pink" size={20} color="pink" />
        ) : (
          <HeartIcon color="#868787" size={20} />
        )
      }
      onClick={blog.isLiked ? handleUnlike : handleLike}
    >
      {blog.likes}
    </Button>
  );
}
