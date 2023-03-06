import React from "react";

export default function Banner() {
  return (
    <section className="relative overflow-hidden">
      <div className="w-banner h-banner max-w-screen-2xl relative bg-green-100 ">
        <div className="w-full h-full bg-cover bg-no-repeat bg-banner2"></div>
        <div className="absolute top-36 -right-44 ">
          <h2 className="text-8xl font-bold ">
            Meet New
            <br /> Fashion Week
          </h2>
          <div className="w-32 text-center bg-black text-white p-4 mt-10 text-sm">
            Shop Now
          </div>
        </div>
      </div>
    </section>
  );
}
