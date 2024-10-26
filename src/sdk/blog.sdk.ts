import { Blog } from "@/types/blog.type";
import createFetcher from "@/utils/axios.util";

export const blogSDK = {
  getLatest: async (): Promise<Blog> => {
    const axios = createFetcher();
    const res = await axios.get("/api/blogs/lasted");
    return res.data;
  },
  getBlogBySlug: async (slug: string): Promise<Blog> => {
    const axios = createFetcher();
    const res = await axios.get(`/api/blogs/slug`, { params: { slug: slug } });
    return res.data;
  },
  getBlogs: async ({
    take,
    skip,
    sort,
  }: {
    take?: number;
    skip?: number;
    sort?: "lasted" | "most-commented" | "most-liked";
  }): Promise<Blog[]> => {
    const axios = createFetcher();
    const res = await axios.get("/api/blogs", {
      params: { take: take, skip: skip, sort: sort },
    });
    return res.data;
  },
};
