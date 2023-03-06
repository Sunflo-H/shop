import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/Button";

export default function Banner() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/products");
  };
  return (
    <section className="relative  transition-all mb-20 ">
      <div className=" w-banner h-banner relative ">
        <div className="w-full h-full bg-cover bg-no-repeat bg-banner animate-banner-img"></div>
      </div>
      <div className="absolute top-64 -right-2 ">
        <h2 className="text-8xl font-bold animate-banner-text opacity-0 mb-10">
          Discover
          <br />
          your new styles
        </h2>
        <Button onClick={handleBtnClick} animation />
      </div>
    </section>
  );
}
