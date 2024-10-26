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
