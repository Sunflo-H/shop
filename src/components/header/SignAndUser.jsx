import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import { MdArrowDropDown } from "react-icons/md";

import { useAuthContext } from "../../context/AuthContext";
import SideListItem from "../ui/SideListItem";

export default function SignAndUser() {
  const { user, login, logout } = useAuthContext();
  const [isOpen, setIsOpen] = useState(false);
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
          className="hidden md:block border-b-2 border-transparent hover:border-black h-full px-2 pt-5 pb-3 cursor-pointer "
          onClick={handleLogin}
        >
          Sign In
        </div>
      )}
      {user && (
        <>
          <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
          >
            <div
              className={`hidden md:flex items-center border-b-2  pl-2 pt-5 pb-3 cursor-pointer 
            ${isOpen ? "border-black" : "border-transparent"}`}
            >
              My Account <MdArrowDropDown className="text-2xl" />
            </div>
            {isOpen && (
              <ul className="absolute top-15 -left-0 w-full px-4 pt-4 border border-black bg-white z-10 text-sm">
                <li className="mb-4 ">
                  <span className="border-b-2 border-transparent hover:border-black pb-1 cursor-pointer">
                    My Favorites
                  </span>
                </li>
                <li className="mb-4">
                  <span className="border-b-2 border-transparent hover:border-black pb-1 cursor-pointer">
                    History
                  </span>
                </li>
                <li className="mb-4">
                  <span className="border-b-2 border-transparent hover:border-black pb-1 cursor-pointer">
                    Sign Out
                  </span>
                </li>
              </ul>
            )}
          </div>
        </>
      )}
    </>
  );
}
