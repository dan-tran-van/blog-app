import { User } from "./auth.type";

export type Status = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export type Blog = {
  id: number;
  title: string;
  summary: string;
  thumbnailUrl: string;
  bodyHtml: string;
  slug: string;
  status: Status;
  publishedAt: string;
  userId: number;
  user: User;
  likes: number;
  comments: number;
  isLiked: boolean;
};

export type CreateBlogData = {
  title: string;
  summary: string;
  thumbnailUrl: string;
  bodyHtml: string;
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED" | undefined;
};

export type CreateBlogResponse = {
  id: number;
  title: string;
  summary: string;
  thumbnailUrl: string;
  bodyHtml: string;
  slug: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  publishedAt?: string;
  userId: number;
  user: {
    id: number;
    displayName: string;
    avatarUrl?: string;
  };
  likes: number;
  comments: number;
  isLiked: boolean;
};
