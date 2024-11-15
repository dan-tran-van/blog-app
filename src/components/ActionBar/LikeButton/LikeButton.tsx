import { Blog } from "@/types/blog.type";
import ActionButton from "../ActionButton/ActionButton";
import { HeartIcon } from "lucide-react";
import { useAuth } from "@/contexts/auth-context";
import useSWRMutation from "swr/mutation";
import { api } from "@/sdk";
import { useLocation, useNavigate } from "react-router-dom";
import { useSWRConfig } from "swr";
import { path } from "@/utils/path.util";

export default function LikeButton({ blog }: { blog: Blog }) {
  const { user } = useAuth();
  const {
    error,
    trigger: likeTrigger,
    isMutating: likeMutating,
  } = useSWRMutation("/api/likes/like", api.blog.likeBlog, {
    onSuccess: (data) => {
      mutate("latest_blog");
      mutate((key) => Array.isArray(key) && key[0] === "blogs");
    },
  });
  const { trigger: unlikeTrigger, isMutating: unlikeMutating } = useSWRMutation(
    "api/likes/unlike",
    api.blog.unlikeBlog,
    {
      onSuccess: (data) => {
        mutate("latest_blog");
        mutate((key) => Array.isArray(key) && key[0] === "blogs");
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
    <ActionButton onClick={blog.isLiked ? handleUnlike : handleLike}>
      {blog.isLiked ? (
        <HeartIcon fill="pink" size={14} color="pink" />
      ) : (
        <HeartIcon size={14} color="#868787" />
      )}

      <span className="text-[14px]">{blog.likes}</span>
    </ActionButton>
  );
}
