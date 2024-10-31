export const path = {
  home: () => "/",
  signIn: () => "/sign-in",
  signUp: () => "/signup",
  blog: (slug: string) => `p/${slug}`,
  admin: {
    __base: "/admin/",
    manage: () => "/admin/manage/",
    users: () => "/admin/users/",
    addUser: () => "/admin/users/add/",
    blogs: () => "/admin/blogs",
    addBlog: () => "/admin/blogs/add",
    editBlog: (id: number) => `/admin/blog/${id}/edit`,
  },
};
