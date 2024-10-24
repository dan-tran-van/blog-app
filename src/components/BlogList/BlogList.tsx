import { Blog } from "@/types/blog.type";
import { useSearchParams } from "react-router-dom";
import { BlogCard } from "./BlogCard";
import useSWR from "swr";

export default function BlogList({
  className,
  take,
}: {
  className?: string;
  take?: number;
}) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const sortQueryParam = searchParams.get("sort");
  const { data, error, isLoading } = useSWR<Blog[]>(
    `https://origami-go.vercel.app/api/blogs?take=${take || 7}&skip=0&sort=${sortQueryParam ? sortQueryParam : "lasted"}`,
  );

  if (error) return <div>Failed to load blogs</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={className || `py-2`}>
      {data?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
}
