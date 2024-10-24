import BlogActionBar from "@/components/BlogActionBar/BlogActionBar";
import BlogList from "@/components/BlogList/BlogList";
import BlogSorter from "@/components/BlogSorter/BlogSorter";
import { Blog } from "@/types/blog.type";
import Markdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import useSWR from "swr";

const blogFetcher = (url: string) => fetch(url).then((res) => res.json());

function useBlog(slug: string | undefined) {
  const { data, error, isLoading } = useSWR<Blog>(
    `https://origami-go.vercel.app/api/blogs/slug?slug=${slug && slug}`,
    blogFetcher,
  );
  return {
    blog: data,
    isLoading,
    isError: error,
  };
}

export default function BlogPage() {
  const { slug } = useParams();
  const { blog, isLoading, isError } = useBlog(slug);
  const location = useLocation();

  if (isError) return <div>Failed to load blog</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex min-h-[100vh] flex-col items-center">
      <div className="w-[728px]">
        <h1 className="text-3xl font-bold">{blog?.title || "No title"}</h1>
        <div></div>
        <BlogActionBar blog={blog!} />
        <p>{blog?.summary || "No subtitle"}</p>
        <Markdown className="prose">
          {blog?.bodyHtml || "##No content"}
        </Markdown>

        <BlogActionBar blog={blog!} />
        <BlogSorter
          path={location.pathname}
          className="flex flex-row items-center justify-between"
        />
        <BlogList take={3} className="w-[728px]"></BlogList>
      </div>
    </div>
  );
}
