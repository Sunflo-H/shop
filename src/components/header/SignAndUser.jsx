import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";

import { useAuthContext } from "../../context/AuthContext";
import SideListItem from "../ui/SideListItem";

export default function SignAndUser({ isSide }) {
  const { user, login, logout } = useAuthContext();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <>
      {!user && (
        <div
          className="hidden md:block border-b border-transparent hover:border-black h-full pt-5 pb-3 cursor-pointer px-2 text-sm"
          onClick={handleLogin}
        >
          Sign In
        </div>
      )}
      {user && (
        <div
          className="hidden md:block border-b border-transparent hover:border-black shrink-0 h-full pt-5 pb-3 cursor-pointer px-2 text-sm"
          onClick={handleLogout}
        >
          Sign Out
        </div>
      )}
    </>
  );
}
