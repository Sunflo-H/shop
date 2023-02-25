import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "./context/CartContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <Header />
          <Outlet />
        </CartProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
