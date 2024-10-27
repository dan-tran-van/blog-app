import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error-page.tsx";
import Home from "./pages/home/home.page.tsx";
import Layout from "./pages/layout.tsx";
import BlogPage from "./pages/blog/blog.page.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { SWRConfig } from "swr";
import AdminLayout from "./pages/admin/admin.layout.tsx";
import SignIn from "./pages/sign-in/sign-in.page.tsx";
import SignUp from "./pages/signup/signup.page.tsx";
import { path } from "./utils/path.util.ts";
import AuthProvider from "./contexts/auth-context.tsx";
import AdminOverview from "./pages/admin/admin.page.tsx";
import AdminManage from "./pages/admin/manage/manage.page.tsx";

const router = createBrowserRouter([
  {
    path: path.home(),
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Home /> },
          {
            path: path.blog(":slug"),
            element: <BlogPage />,
            children: [
              {
                path: "comments",
              },
            ],
          },
          {
            path: "archive",
          },
          {
            path: "about",
          },
        ],
      },
    ],
  },
  {
    path: path.admin.__base,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <AdminOverview />,
      },
      {
        path: path.admin.manage(),
        element: <AdminManage />,
      },
      {
        path: path.admin.users(),
      },
      {
        path: path.admin.blogs(),
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <NextUIProvider>
      <SWRConfig>
        <RouterProvider router={router} />
      </SWRConfig>
    </NextUIProvider>
  </AuthProvider>,
);
