import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../ui/Button";

import User from "./User";
import { useAuthContext } from "../../context/AuthContext";
import { useQuery } from "react-query";
import { downloadCart } from "../../api/firebase";
import useCart from "../../hooks/useCart";

export default function Navbar() {
  const { user, uid, login, logout } = useAuthContext();
  const {
    cartQuery: { data: productsInCart },
  } = useCart();
  // const { data: productsInCart } = useQuery(["carts"], () => downloadCart(uid));

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="flex justify-between border-b border-gary-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag className="" />
        <h1>Shoppy</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link className="relative" to="/carts">
            <AiOutlineShoppingCart className="text-4xl" />
            <p className="absolute -top-1 -right-2 w-6 h-6 rounded-full bg-brand text-center text-white">
              {productsInCart &&
                productsInCart.reduce(
                  (acc, cur) => acc + Number(cur.quantity),
                  0
                )}
            </p>
          </Link>
        )}
        {user?.isAdmin && (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text="login" onClick={handleLogin} />}
        {user && <Button text="logout" onClick={handleLogout} />}
      </nav>
    </header>
  );
}
