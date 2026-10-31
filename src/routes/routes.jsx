import { createBrowserRouter } from "react-router-dom";

// Layouts
import RootLayout from "../layouts/RootLayout";
// Components
import Header from "../components/Header";
// Pages
import Home from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: "cart", element: <Cart /> },
      // { path: "shop", element: <Shop /> },
    ],
  },
]);
