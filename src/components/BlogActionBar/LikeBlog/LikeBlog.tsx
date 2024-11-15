import { Blog } from "@/types/blog.type";
import { HeartIcon } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useAuth } from "@/contexts/auth-context";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import { path } from "@/utils/path.util";
import useSWRMutation from "swr/mutation";
import { api } from "@/sdk";
import { useSWRConfig } from "swr";

export default function LikeBlog({ blog }: { blog: Blog }) {
  const { user } = useAuth();
  const {
    error,
    trigger: likeTrigger,
    isMutating: likeMutating,
  } = useSWRMutation("/api/likes/like", api.blog.likeBlog, {
    onSuccess: (data) => {
      mutate(["blog", blog.slug]);
    },
  });
  const { trigger: unlikeTrigger, isMutating: unlikeMutating } = useSWRMutation(
    "api/likes/unlike",
    api.blog.unlikeBlog,
    {
      onSuccess: (data) => {
        mutate(["blog", blog.slug]);
      },
    },
  );

  const navigate = useNavigate();
  const location = useLocation();
  const { mutate } = useSWRConfig();

  async function handleLike() {
    if (user) {
      likeTrigger(blog.id);
    } else {
      navigate(`${path.signIn()}?redirect=${location.pathname}`);
    }
  }

  function handleUnlike() {
    if (user) {
      unlikeTrigger(blog.id);
    } else {
      navigate(`${path.signIn()}?redirect=${location.pathname}`);
    }
  }
  return (
    <Button
      variant="bordered"
      radius="full"
      className="border-[1px] border-[#e6e6e6] text-[#868787] hover:bg-[#f0f0f0]"
      isLoading={likeMutating || unlikeMutating}
      isDisabled={likeMutating || unlikeMutating}
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
