import { Blog } from "@/types/blog.type";
import { useSearchParams } from "react-router-dom";
import { BlogCard } from "./BlogCard";
import useSWR from "swr";
import { api } from "@/sdk";

export default function BlogList({
  className,
  take,
  skip,
}: {
  className?: string;
  take?: number;
  skip?: number;
}) {
  const [searchParams] = useSearchParams();
  const sortQueryParam = searchParams.get("sort");
  const {
    data: blogs,
    error,
    isLoading,
  } = useSWR<Blog[]>(["blogs", take, skip, sortQueryParam], api.blog.getBlogs);

  if (error) return <div>Failed to load blogs</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={className || `py-2`}>
      {blogs?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
}
