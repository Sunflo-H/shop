import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import UploadProduct from "./pages/UploadProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import Products from "./pages/Products";
import Recommend from "./pages/Recommend";
import MyFavorites from "./pages/MyFavorites";

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
        path: "/products/recommend",
        element: <Recommend />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },

      {
        path: "/products/new",
        element: (
          <ProtectedRoute requireAdmin>
            <UploadProduct />
          </ProtectedRoute>
        ),
      },
      {
        path: "/products/:category/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute>
            <MyCart />
          </ProtectedRoute>
        ),
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute>
            <MyFavorites />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();
