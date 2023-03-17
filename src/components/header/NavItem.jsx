import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ navItem }) {
  const link = navItem === "Home" ? "/" : `products/${navItem}`;

  return (
    <Link
      to={link}
      state={navItem}
      className=" border-b-2 border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
    >
      {navItem}
    </Link>
  );
}
