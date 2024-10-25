import { Blog } from "@/types/blog.type";
import createFetcher from "@/utils/axios.util";

export const blogSDK = {
  getLatest: async (): Promise<Blog> => {
    const axios = createFetcher();
    const res = await axios.get("/api/blogs/lasted");
    return res.data;
  },
};
