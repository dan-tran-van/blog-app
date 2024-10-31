import { Blog, CreateBlogData, CreateBlogResponse } from "@/types/blog.type";
import createFetcher from "@/utils/axios.util";
import { AxiosError } from "axios";
import { Url } from "url";

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
  getBlogsByAdmin: async ([url, sortParam, statusParam]: [
    url: string,
    sortParam: string | null,
    statusParam: string | null,
  ]): Promise<Blog[]> => {
    const axios = createFetcher();
    const res = await axios.get("/api/admin/blogs", {
      params: { sort: sortParam, status: statusParam },
    });
    return res.data;
  },
  createBlogByAdmin: async (
    key: string,
    { arg }: { arg: CreateBlogData },
  ): Promise<CreateBlogResponse> => {
    const axios = createFetcher();
    try {
      const res = await axios.post("/api/admin/blogs/create", arg);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw error;
    }
  },
};
