import React from "react";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import Cart from "./Cart";
import NavItem from "./NavItem";
import User from "./User";

export default function Nav({ isNavOpen }) {
  const navItemList = ["Home", "Men", "Women", "Accessories", "Shoes", "Blog"];

  return (
    <nav className="hidden md:flex grow">
      <div className={`flex gap-1 lg:gap-5 xl:gap-10`}>
        {navItemList.map((navItem, i) => (
          <NavItem navItem={navItem} key={i} />
        ))}
      </div>
    </nav>
  );
}
