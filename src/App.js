import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthProvider } from "./context/AuthContext";
import Footer from "./components/footer/Footer";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Header />
            <Outlet />
          </AuthProvider>
          <Footer />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

export default App;
