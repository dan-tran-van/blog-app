import ActionBar from "@/components/ActionBar/ActionBar";
import { Blog } from "@/types/blog.type";
import { formatDateMonth } from "@/utils/date.util";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="group py-4">
      <Link
        to={`/p/${blog.slug}`}
        className="grid grid-cols-[minmax(0,_1fr)_160px] gap-6"
      >
        <div className="">
          <div className="text-xl font-bold">{blog.title}</div>
          <div className="text-lg">{blog.summary}</div>
          <div className="flex gap-1 text-sm text-gray-500">
            <span>{formatDateMonth(blog.publishedAt)}</span>
            <span>•</span>
            <span className="hover:underline">
              {blog.user.displayName.toUpperCase()}
            </span>
          </div>
          <ActionBar
            blog={blog}
            className="flex flex-row items-center justify-between py-2 opacity-0 duration-150 group-hover:opacity-100"
          />
        </div>
        <div className="sm:aspect-square md:aspect-[3/2]">
          <img
            src={blog.thumbnailUrl}
            alt=""
            className="h-full w-full rounded-md object-cover sm:aspect-square md:aspect-[3/2]"
          />
        </div>
      </Link>
    </div>
  );
}
