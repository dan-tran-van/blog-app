import { api } from "@/sdk";
import { formatFullDate } from "@/utils/date.util";
import {
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { PinIcon } from "lucide-react";
import { Link } from "react-router-dom";
import useSWR from "swr";

export default function Banner() {
  const lastedBlogQuery = useSWR("ab", api.blog.getLatest);
  const blog = lastedBlogQuery.data;

  return (
    <div className="group flex flex-col items-center py-4">
      <div id="featured-post" className="py-2">
        {lastedBlogQuery.isLoading ? (
          <div>Loading...</div>
        ) : lastedBlogQuery.error ? (
          <div>{lastedBlogQuery.error}</div>
        ) : (
          blog && (
            <div>
              <Link to={`/p/${blog.slug}`}>
                <div className="grid aspect-[6/2] max-w-[932px] grid-cols-2">
                  <div className="aspect-[1.5/1]">
                    <img
                      src={blog.thumbnailUrl}
                      alt=""
                      className="aspect-[1.5/1] w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-[32px] pt-[24px]">
                    <div className="text-center text-2xl text-[30px] font-bold">
                      {blog.title}
                    </div>
                    <div className="text-[17px] text-[#363737]">
                      {blog?.summary}
                    </div>
                    <div className="flex flex-row gap-1">
                      <div className="flex aspect-square w-[20px] items-center justify-center rounded-sm bg-[#f0f0f0]">
                        <PinIcon size={12} color="#868787" />
                      </div>
                      <div className="flex flex-row gap-1 text-[12px] text-[#929292]">
                        <span>
                          {blog?.publishedAt &&
                            `${formatFullDate(blog.publishedAt)}`}
                        </span>

                        <span>•</span>
                        <a className="hover:underline">
                          {blog.user.displayName.toUpperCase()}
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-[12px] opacity-0 duration-150 group-hover:opacity-100">
                      <div className="p flex h-[24px] flex-row items-center gap-2 rounded-sm p-[4px] text-[#929292] hover:bg-[#f0f0f0]">
                        <HeartIcon className="size-[14px] stroke-[2px] text-[#868787]" />
                        <span>{blog.likes}</span>
                      </div>
                      <div className="p flex h-[24px] flex-row items-center gap-2 rounded-sm p-[4px] text-[#929292] hover:bg-[#f0f0f0]">
                        <ChatBubbleOvalLeftIcon className="size-[14px] stroke-[2px] text-[#868787]" />
                        <span>{blog.comments}</span>
                      </div>
                      <div className="p flex h-[24px] flex-row items-center gap-2 rounded-sm p-[4px] text-[#929292] hover:bg-[#f0f0f0]">
                        <ArrowUpTrayIcon className="size-[14px] stroke-[2px] text-[#868787]" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
