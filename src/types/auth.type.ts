export type User = {
  id: number;
  email: string;
  displayName: string;
  avatarUrl?: string;
  bio?: string;
  role: "ADMIN" | "USER";
  updatedAt: string;
  createdAt: string;
};
