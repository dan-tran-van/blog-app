import { StrictMode } from "react";
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
import axios from "axios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "p/:slug",
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
  {
    path: "/admin/",
    element: <AdminLayout />,
    children: [],
  },
  {
    path: "/sign-in",
  },
  {
    path: "signup",
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <SWRConfig
        value={{
          fetcher: (url) => axios.get(url).then((res) => res.data),
        }}
      >
        <RouterProvider router={router} />
      </SWRConfig>
    </NextUIProvider>
  </StrictMode>,
);
