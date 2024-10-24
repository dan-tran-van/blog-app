import { Blog } from "@/types/blog.type";
import { formatFullDate } from "@/utils/date.util";
import {
  ArrowUpTrayIcon,
  ChatBubbleOvalLeftIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import { PinIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSWR from "swr";

function useLatestBlog() {
  const { data, error, isLoading } = useSWR<Blog>(
    "https://origami-go.vercel.app/api/blogs/lasted",
  );
  return {
    latestBlog: data,
    isError: error,
    isLoading: isLoading,
  };
}

export default function Banner() {
  const [status, setStatus] = useState("pending");
  const [errorMessage, setErrorMessage] = useState("");
  const [latestBlog, setLatestBlog] = useState<Blog | null>(null);
  useEffect(() => {
    async function fetchLatestBlog() {
      const options = {
        method: "GET",
        url: "https://origami-go.vercel.app/api/blogs/lasted",
      };

      try {
        const { data } = await axios.request(options);
        console.log(data);
        setLatestBlog(data);
        setStatus("success");
      } catch (error) {
        console.error(error);
        setStatus("error");
        setErrorMessage("Error");
      }
    }

    fetchLatestBlog();
  }, []);
  return (
    <div className="group flex flex-col items-center py-4">
      <div id="featured-post" className="py-2">
        {status === "pending" ? (
          <div>Loading...</div>
        ) : status === "error" ? (
          <div>{errorMessage}</div>
        ) : (
          status === "success" && (
            <div>
              <Link to={`/p/${latestBlog?.slug}`}>
                <div className="grid aspect-[6/2] max-w-[932px] grid-cols-2">
                  <div className="aspect-[1.5/1]">
                    <img
                      src={latestBlog?.thumbnailUrl}
                      alt=""
                      className="aspect-[1.5/1] w-full rounded-md object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 px-[32px] pt-[24px]">
                    <div className="text-center text-2xl text-[30px] font-bold">
                      {latestBlog?.title}
                    </div>
                    <div className="text-[17px] text-[#363737]">
                      {latestBlog?.summary}
                    </div>
                    <div className="flex flex-row gap-1">
                      <div className="flex aspect-square w-[20px] items-center justify-center rounded-sm bg-[#f0f0f0]">
                        <PinIcon size={12} color="#868787" />
                      </div>
                      <div className="flex flex-row gap-1 text-[12px] text-[#929292]">
                        <span>
                          {latestBlog?.publishedAt &&
                            `${formatFullDate(latestBlog.publishedAt)}`}
                        </span>

                        <span>•</span>
                        <a className="hover:underline">
                          {latestBlog?.user.displayName.toUpperCase()}
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-2 text-[12px] opacity-0 duration-150 group-hover:opacity-100">
                      <div className="p flex h-[24px] flex-row items-center gap-2 rounded-sm p-[4px] text-[#929292] hover:bg-[#f0f0f0]">
                        <HeartIcon className="size-[14px] stroke-[2px] text-[#868787]" />
                        <span>{latestBlog?.likes}</span>
                      </div>
                      <div className="p flex h-[24px] flex-row items-center gap-2 rounded-sm p-[4px] text-[#929292] hover:bg-[#f0f0f0]">
                        <ChatBubbleOvalLeftIcon className="size-[14px] stroke-[2px] text-[#868787]" />
                        <span>{latestBlog?.comments}</span>
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
