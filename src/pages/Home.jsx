import React from "react";
import Footer from "../components/footer/Footer";
import Button from "../components/ui/Button";
import Carousel from "../components/carousel/Carousel";
import HomeContents_blog from "../components/main/Home/HomeContents_blog";
import HomeContents_ProductsByCategory from "../components/main/Home/HomeContents_ProductsByCategory";

export default function Home() {
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

        {/* Accessories Contents */}
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

        {/* Product by category Contents */}
        <section className="w-full flex flex-col m-auto mb-20 ">
          <HomeContents_ProductsByCategory />
        </section>

        {/* Blog Contents */}
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
