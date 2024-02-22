import { Outlet } from "react-router-dom";
import Header from "../components/ProductManagement/header/Header";
import Nav from "../components/ProductManagement/nav/Nav";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../store";
import { useState } from "react";
import ProductStatus from "../components/ProductManagement/main/ProductStatus";

import PageNation from "../components/ProductManagement/main/PageNation";
import SelectBox from "../components/ui/SelectBox";
import SearchBar from "../components/ui/SearchBar";

export default function ProductManagement() {
  const queryClient = new QueryClient();
  const [item, setItem] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <div className="flex flex-col h-screen bg-gray-200 ">
          <Header />
          <div className="flex self-center w-screen max-w-screen-2xl ">
            <Nav item={item} />
            <div className="grow">
              <div className="flex border-gray-300 border-b ">
                <ProductStatus />
                <SelectBox />
              </div>
              <SearchBar />
              <Outlet />
              <PageNation />
            </div>
          </div>
        </div>
      </Provider>
    </QueryClientProvider>
  );
}
