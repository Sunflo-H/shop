import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ navItem, isSide }) {
  if (isSide) {
    return;
  }
  return (
    <Link
      to="/products"
      className=" border-b border-transparent hover:border-black  h-full pt-5 pb-3 px-2"
    >
      {navItem}
    </Link>
  );
}
