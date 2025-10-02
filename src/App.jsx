import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ArticlePage } from "./pages/ArticlePage";

  
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/article/:id",
    element: <ArticlePage />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
