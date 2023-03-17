import React from "react";
import { Link } from "react-router-dom";

export default function NavItem({ navItem }) {
  const link = getLink(navItem);
  // Blog 는 나중에 생각하자

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

function getLink(navItem) {
  let result = "";

  if (navItem === "Home") result = "/";
  else if (navItem === "Blog") result = "/blog";
  else result = `/products/${navItem}`;

  return result;
}
