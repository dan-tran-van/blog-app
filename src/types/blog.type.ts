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
  isLiked: true;
};

export type User = {
  id: number;
  displayName: string;
  avatarUrl: string;
};
