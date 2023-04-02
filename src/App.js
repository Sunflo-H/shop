import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";

import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/footer/Footer";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Header />
          <Outlet />
        </AuthProvider>
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
