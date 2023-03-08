import React from "react";
import Footer from "../components/footer/Footer";
import Banner from "../components/main/Banner";
import HomeContents from "../components/main/HomeContents";
import NewProducts from "../components/main/product/NewProducts";
import Button from "../components/ui/Button";
import AllProduct from "./AllProduct";

export default function Home() {
  return (
    <div>
      <main className="max-w-screen-2xl m-auto px-10">
        <Banner />
        <HomeContents>
          <div className="flex w-full h-3/4 justify-around px-20">
            <img className="w-2/5 " src="/images/home/woman.jpg"></img>
            <img className="w-2/5 " src="/images/home/man.jpg"></img>
          </div>
          <div className="text-center ">
            <p className="text-center  text-3xl my-10 ">
              Embrace the relaxed elegance of the Spring
              <br />
              Summer 2023 collection
            </p>

            <Button text={"View All Collections"} />
          </div>
        </HomeContents>

        <section className="relative w-full h-96 mb-20 bg-black">
          <div className="w-full h-full bg-cover bg-center bg-banner2 opacity-70"></div>
          <div className="absolute w-full top-28 text-center ">
            <h2 className="text-6xl font-bold mb-12 text-white">
              Accessories Recommend
            </h2>
            <div>
              <Button text={"Shop Now"} color={"white"} />
            </div>
          </div>
        </section>

        <HomeContents>
          <div className="text-center mb-16">
            <p className="text-2xl mb-8">
              <span className="font-bold ">NEW</span> MODELS
            </p>
            <h2 className="text-5xl font-semibold">Featured Item</h2>
          </div>
          <div className="flex justify-center  mb-14">
            <div className="md:w-2/3">
              <NewProducts />
            </div>
          </div>
          <div className="text-center ">
            <Button text="See All" />
          </div>
        </HomeContents>

        <HomeContents>
          <div className="w-full h-full bg-gray-100 px-24 pt-14">
            <h1 className="text-5xl font-bold">Our Stories</h1>
            <div className="flex">
              <div className="basis-1/4"></div>
            </div>
          </div>
        </HomeContents>
        {/* <HomeContents4 /> */}
      </main>
      <footer className="border-gray-400 border-t">
        <Footer />
      </footer>
    </div>
  );
}
