export const path = {
  home: () => "/",
  signIn: () => "/sign-in",
  signUp: () => "/signup",
  blog: (slug: string) => `p/${slug}`,
  admin: {
    __base: "/admin/",
    manage: () => "/admin/manage",
    users: () => "/admin/users",
    blogs: () => "/admin/blogs",
    addBlog: () => "/admin/blog/add",
    editBlog: (id: number) => `/admin/blog/${id}/edit`,
  },
};
