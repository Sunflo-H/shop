import { Outlet } from "react-router-dom";
import Header from "../components/ProductManagement/header/Header";
import Nav from "../components/ProductManagement/nav/Nav";

export default function ProductManagement() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}
