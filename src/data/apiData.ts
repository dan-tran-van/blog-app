import { Blog, Status } from "@/types/blog.type";

export async function getLatestBlog() {
  const response = await fetch(
    "https://origami-go.vercel.app/api/blogs/lasted",
  );
  return response;
}

export async function getLatestPublishedBlog() {
  const response = await fetch(
    "https://origami-go.vercel.app/api/blogs?take=1&status=PUBLISHED",
  );
  return response;
}

export async function getBlogs(
  take: number,
  skip: number,
  status: Status,
  sort: "lasted" | "most-viewed" | "most-liked" | string,
) {
  const response = await fetch(
    `https://origami-go.vercel.app/api/blogs?take=${take}&skip=${skip}&status=${status}&sort=${sort}`,
  );
  return response;
}

export async function getBlogById(id: number) {
  const response = await fetch(
    `https://origami-go.vercel.app/api/blogs/id?id=${id}`,
  );

  return response;
}

export async function getBlogBySlug(slug: string) {
  const response = await fetch(
    `https://origami-go.vercel.app/api/blogs/slug?slug=${slug}`,
  );

  const data: Blog = await response.json();

  return data;
}
