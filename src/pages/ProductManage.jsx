import { Outlet } from "react-router-dom";
import Header from "../components/ProductManagement/header/Header";
import Nav from "../components/ProductManagement/nav/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function ProductManagement() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="bg-gray-200 h-screen">
        <Header />
        <div className="flex">
          <Nav />
          <Outlet />
        </div>
      </div>
    </QueryClientProvider>
  );
}
