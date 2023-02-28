import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "./context/CartContext";
import { UserProvider } from "./context/UserContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <CartProvider>
            <Header />
            <Outlet />
          </CartProvider>
        </UserProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
