import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MyCart from "./pages/MyCart";
import ProductDetail from "./pages/ProductDetail";
import UploadProduct from "./pages/UploadProduct";
import Products from "./pages/Products";
import ProductsRecommend from "./pages/ProductsRecommend";
import MyFavorites from "./pages/MyFavorites";
import ProtectedRoute_isUser from "./components/protectedRoute/ProtectedRoute_isUser";
import ProductManagement from "./pages/ProductManagement";
import ProductList from "./components/ProductManagement/main/ProductList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
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
        element: <ProductsRecommend />,
      },
      {
        path: "/products/:category",
        element: <Products />,
      },
      {
        path: "/products/new",
        element: (
          <ProtectedRoute_isUser requireAdmin>
            <UploadProduct />
          </ProtectedRoute_isUser>
        ),
      },
      {
        path: "/products/:category/:id",
        element: <ProductDetail />,
      },
      {
        path: "/carts",
        element: (
          <ProtectedRoute_isUser>
            <MyCart />
          </ProtectedRoute_isUser>
        ),
      },
      {
        path: "/favorites",
        element: (
          <ProtectedRoute_isUser>
            <MyFavorites />
          </ProtectedRoute_isUser>
        ),
      },
    ],
  },
  {
    path: "/manage",
    element: (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ProductManagement />
        </Provider>
      </QueryClientProvider>
    ),
    children: [
      {
        index: true,
        element: <ProductList />,
      },
    ],
  },
]);

root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // {/* </React.StrictMode> */}
);

reportWebVitals();
