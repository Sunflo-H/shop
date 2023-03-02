import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from "../ui/Button";

import User from "./User";
import { AuthContext, useAuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuthContext();

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
        {user && <Link to="/carts">cart</Link>}
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
/**
 * 1. 권한이 있는 사용자일때 연필이 보여야 해
 *    권한이 있는 사용자?
 *      데이터베이스에 admin과 user로 회원을 관리하면 될것같다.
 *
 * 2. 권한이 없는 상태에서 새 상품을 등록하는 페이지로 접근하려하는것 방지
 *    권한이 없는 사용자?
 *      user등급이거나, 비로그인상태일때
 */
