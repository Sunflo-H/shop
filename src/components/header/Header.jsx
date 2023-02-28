import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { login, logout, onUserStateChange } from "../../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

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
        <Link to="/carts">cart</Link>
        <Link to="/products/new" className="text-2xl">
          <BsFillPencilFill />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={handleLogin}>login</button>}
        {user && <button onClick={handleLogout}>logout</button>}
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
