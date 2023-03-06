import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="relative  transition-all mb-40 ">
      <div className=" w-banner h-banner relative ">
        <div className="w-full h-full bg-cover bg-no-repeat bg-banner2 animate-banner-img"></div>
      </div>
      <div className="absolute top-64 -right-2 ">
        <h2 className="text-8xl font-bold animate-banner-text opacity-0">
          Discover
          <br />
          your new styles
        </h2>
        <div className=" text-start mt-10 animate-show opacity-0">
          <Link
            to="/products"
            className="bg-black text-white p-4 px-8 text-sm  cursor-pointer"
          >
            Shop Now
          </Link>
          <span className="ml-0.5 pl-1 py-4 bg-black text-sm"></span>
        </div>
      </div>
    </section>
  );
}
