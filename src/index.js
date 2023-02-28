import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import AllProduct from "./pages/AllProduct";
import NewProduct from "./pages/NewProduct";
import { UserContext } from "./context/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/carts",
        element: <MyCart />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />,
      },
      {
        path: "/products",
        element: <AllProduct />,
      },
      {
        path: "/products/new",
        element: <NewProduct />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
