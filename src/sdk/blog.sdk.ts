import { Blog } from "@/types/blog.type";
import createFetcher from "@/utils/axios.util";

export const blogSDK = {
  getLatest: async (): Promise<Blog> => {
    const axios = createFetcher();
    const res = await axios.get("/api/blogs/lasted");
    return res.data;
  },
  getBlogBySlug: async ([url, slug]: string[]): Promise<Blog> => {
    const axios = createFetcher();
    const res = await axios.get(`/api/blogs/slug`, {
      params: { slug: slug },
    });
    return res.data;
  },
  getBlogs: async ([url, take, skip, sort]: (
    | string
    | number
    | undefined
  )[]): Promise<Blog[]> => {
    const axios = createFetcher();
    const res = await axios.get("/api/blogs", {
      params: { take: take, skip: skip, sort: sort },
    });
    return res.data;
  },
};
