import React from "react";
import { useNavigate } from "react-router-dom";
import SideListItem from "../ui/SideListItem";
import NavItem from "./NavItem";
import SignAndUser from "./SignAndUser";
import SignAndUser_Side from "./SignAndUser_Side";
import User from "./User";

export default function SideNav({ user, isSideNavOpen }) {
  const navigate = useNavigate();
  const navItemList = [
    { title: "Home", action: () => navigate("/") },
    { title: "Men", action: () => navigate("/products/men") },
    { title: "Women", action: () => navigate("/products/women") },
    { title: "Accessories", action: () => navigate("/products/accessories") },
    { title: "Shoes", action: () => navigate("/products/shoes") },
    { title: "Blog", action: () => navigate("/products/blog") },
  ];

  return (
    <nav
      className={`absolute w-80 h-screen top-14 left-0 z-10 bg-white border border-gray-300 transition-all md:hidden 
      ${!isSideNavOpen && "-translate-x-full"}`}
    >
      <SignAndUser_Side />
      <ul className={`flex flex-col mt-4 font-bold`}>
        {navItemList.map((navItem, i) => (
          <SideListItem
            title={navItem.title}
            onClick={navItem.action}
            key={i}
          />
        ))}
      </ul>
    </nav>
  );
}
