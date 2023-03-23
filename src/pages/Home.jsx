import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import Footer from "../components/footer/Footer";
import Banner from "../components/main/Banner";
import HomeContents from "../components/main/HomeContents";
import HomeProducts from "../components/main/product/HomeProducts";
import Button from "../components/ui/Button";

import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import Carousel from "../components/carousel/Carousel";
import ProductsByCategory from "../components/main/product/ProductsByCategory";
import HomeContents_blog from "../components/main/Home/HomeContents_blog";

export default function Home() {
  const [category, setCategory] = useState("Men");
  return (
    <div>
      <main className="px-5 md:px-10 m-auto max-w-screen-2xl ">
        <Carousel />

        <section className="w-full flex flex-col mb-20 ">
          <div className="flex flex-col md:flex-row w-full justify-around gap-2 md:px-20 ">
            <div className="h-48 md:w-2/5 md:h-auto overflow-hidden ">
              <img
                className="w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_600,w_520/v1678786208/shoppy/woman_ddotew.jpg"
              ></img>
            </div>
            <div className="h-48 md:w-2/5 md:h-auto overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_600,w_520/v1678786215/shoppy/man_ilgbef.jpg"
              ></img>
            </div>
          </div>
          <div className="text-center ">
            <p className="text-center font-bold md:font-normal text-xl md:text-3xl my-10 ">
              Embrace the relaxed elegance of the Spring
              <br />
              Summer 2023 collection
            </p>

            <Button text={"View All Collections"} />
          </div>
        </section>

        <section className="relative w-full h-screen max-h-96 mb-20 bg-black">
          <div className="w-full h-full bg-cover bg-center bg-accessories opacity-70"></div>
          <div className="absolute w-full top-28 text-center ">
            <h2 className="text-6xl font-bold mb-12 text-white">
              Accessories Recommend
            </h2>
            <div>
              <Button text={"Shop Now"} color={"white"} />
            </div>
          </div>
        </section>

        <section className="w-full flex flex-col m-auto mb-20 ">
          <div className="text-center mb-12">
            <p className="text-md mb-4 tracking-widest">
              <span className="font-bold mr-4">NEW</span>
              <span className="">COLLECTIONS</span>
            </p>
            <h2 className="text-5xl font-semibold">Featured Items</h2>
          </div>
          <ul className="flex justify-center gap-8 mb-10">
            <li
              className={`cursor-pointer hover:border-black border-b-2 
              ${
                category === "Men"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
              onClick={() => setCategory("Men")}
            >
              Men
            </li>
            <li
              className={`cursor-pointer hover:border-black border-b-2 "
              ${
                category === "Women"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
              onClick={() => setCategory("Women")}
            >
              Women
            </li>
            <li
              className={`cursor-pointer hover:border-black border-b-2 
              ${
                category === "Accessories"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
              onClick={() => setCategory("Accessories")}
            >
              Accessories
            </li>
            <li
              className={`cursor-pointer hover:border-black border-b-2 
              ${
                category === "Shoes"
                  ? "border-black font-bold"
                  : "border-transparent"
              }`}
              onClick={() => setCategory("Shoes")}
            >
              Shoes
            </li>
          </ul>
          <div className="flex justify-center  mb-14">
            <div className="md:w-2/3">
              <HomeProducts category={category} />
            </div>
          </div>
          <div className="text-center ">
            <Button text="See All" />
          </div>
        </section>

        <div className="w-full h-full bg-gray-100 px-4 md:px-32 pt-14 py-10 mb-20 ">
          <HomeContents_blog />
        </div>
      </main>
      <footer className="border-gray-400 border-t">
        <Footer />
      </footer>
    </div>
  );
}
