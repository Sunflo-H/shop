import React from "react";
import NavItem from "./NavItem";
import SignAndUser from "./SignAndUser";
import SignAndUser_Side from "./SignAndUser_Side";
import User from "./User";

export default function SideNav({ user, isSideNavOpen }) {
  const navItemList = ["Home", "Men", "Women", "Accessories", "Shoes", "Blog"];

  return (
    <nav
      className={`absolute w-80 h-screen top-14 left-0 z-10 bg-white border border-gray-300 transition-all md:hidden 
      ${!isSideNavOpen && "-translate-x-full"}`}
    >
      {/* {user && <User user={user} isSide />} */}
      <SignAndUser_Side />
      <div className={`flex flex-col`}>
        {navItemList.map((navItem, i) => (
          <NavItem navItem={navItem} key={i} />
        ))}
      </div>
    </nav>
  );
}
