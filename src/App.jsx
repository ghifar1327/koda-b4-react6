import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/article/:author/:slug",
    element: <ArticlePage />,
  },
  {
    path: '*',
    element: <Error/>
  }
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
