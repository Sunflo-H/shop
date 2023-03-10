import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "./context/AuthContext";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Header />
          <Outlet />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
