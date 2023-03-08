import React from "react";
import { BsPlus, BsPlusLg } from "react-icons/bs";
import { useAuthContext } from "../../context/AuthContext";

export default function SignAndUser({ isSide }) {
  const { user, login, logout } = useAuthContext();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  if (isSide) {
    return (
      <>
        {!user && (
          <div
            className=" px-2 py-3 text-center border-b border-gray-300"
            onClick={handleLogin}
          >
            <p className="w-full bg-black text-white text-sm font-bold py-2 cursor-pointer ">
              SIGN IN
            </p>
          </div>
        )}
        {user && (
          <>
            <div className="flex items-center justify-between px-6 py-5 bg-gray-100 font-bold border-b border-gray-300">
              <p>My Account</p>
              <BsPlusLg />
            </div>
            <ul className="px-6 py-4 bg-gray-100 border-b border-gray-300">
              <li>My Favorites</li>
              <li>History</li>
              <li>Sign Out</li>
            </ul>
          </>
          // <div
          //   className="border-b border-transparent hover:border-black shrink-0 h-full pt-5 pb-3 cursor-pointer px-2 text-sm"
          //   onClick={handleLogout}
          // >
          //   Sign Out
          // </div>
        )}
      </>
    );
  }

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
