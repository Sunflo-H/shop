import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill, BsBag } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import User from "./User";
import { useAuthContext } from "../../context/AuthContext";
import useCart from "../../hooks/useCart";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();
  const {
    cartQuery: { data: productsInCart },
  } = useCart();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="border-b border-gray-300 mb-10 ">
      <div className="flex max-w-screen-2xl m-auto  px-10">
        <Link to="/" className="flex items-center text-3xl mr-20">
          <h1>Adonis</h1>
        </Link>
        <nav className="flex gap-10 items-center ">
          <Link
            to="/products"
            className=" border-b border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
          >
            Home
          </Link>
          <Link
            to="/products"
            className=" border-b border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
          >
            Man
          </Link>
          <Link
            to="/products"
            className=" border-b border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
          >
            Woman
          </Link>
          <Link
            to="/products"
            className=" border-b border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
          >
            Accessories
          </Link>
          <Link
            to="/products"
            className=" border-b border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
          >
            Shoes
          </Link>
          <Link
            to="/products"
            className=" border-b border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
          >
            Blog
          </Link>
        </nav>
        <div className="flex items-center gap-4 font-semibold ml-auto">
          {user && (
            <Link
              className="flex border-b border-transparent hover:border-black  h-full pt-5 pb-3"
              to="/carts"
            >
              <BsBag className="text-lg mr-1 " />
              <span className="text-sm font-normal">$67.00</span>
              {/* <p className="absolute -top-1 -right-2 w-6 h-6 rounded-full bg-brand text-center text-white">
              {productsInCart &&
                productsInCart.reduce(
                  (acc, cur) => acc + Number(cur.quantity),
                  0
                )}
            </p> */}
            </Link>
          )}

          {user?.isAdmin && (
            <Link
              to="/products/new"
              className="border-b border-transparent hover:border-black h-full pt-6 pb-3 cursor-pointer"
            >
              <BsFillPencilFill />
            </Link>
          )}
          <div className="flex gap-2 ">
            {user && <User user={user} />}
            {!user && (
              <div
                className="border-b border-transparent hover:border-black h-full pt-5 pb-3 cursor-pointer px-2 text-sm"
                onClick={handleLogin}
              >
                Sign In
              </div>
            )}
            {user && (
              <div
                className="border-b border-transparent hover:border-black h-full pt-5 pb-3 cursor-pointer px-2 text-sm"
                onClick={handleLogout}
              >
                Sign Out
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
