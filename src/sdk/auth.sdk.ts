import { User } from "@/types/blog.type";
import createFetcher from "@/utils/axios.util";
import { AxiosError } from "axios";

type RegisterData = {
  email: string;
  password: string;
  displayName: string;
  bio?: string;
  avatarUrl?: string;
};

type LoginData = {
  email: string;
  password: string;
};

export const authSDK = {
  register: async (
    key: string,
    {
      arg,
    }: {
      arg: RegisterData;
    },
  ): Promise<{ user: User; token: string }> => {
    const axios = createFetcher();
    const res = await axios.post("/api/auth/register", arg);
    return res.data;
  },
  login: async (
    key: string,
    {
      arg,
    }: {
      arg: LoginData;
    },
  ): Promise<{ user: User; token: string }> => {
    const axios = createFetcher();
    try {
      const res = await axios.post("/api/auth/login", arg);
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw error;
    }
  },
  currentUser: async (key: string): Promise<{ user: User }> => {
    const axios = createFetcher();
    try {
      const res = await axios.get("/api/auth/me");
      return res.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message);
      }
      throw error;
    }
  },
};
