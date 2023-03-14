import React from "react";
import AwesomeSlider from "react-awesome-slider";
import Footer from "../components/footer/Footer";
import Banner from "../components/main/Banner";
import HomeContents from "../components/main/HomeContents";
import NewProducts from "../components/main/product/NewProducts";
import Button from "../components/ui/Button";

import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "react-awesome-slider/dist/styles.css";
import Carousel from "../components/carousel/Carousel";
import Test from "../components/Test";

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

        {/* <HomeContents>
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
        </HomeContents> */}

        {/* <div className="w-full h-full bg-gray-100 px-32 pt-14 py-10 mb-20 ">
          <h1 className="text-5xl font-bold mb-8">Our Stories</h1>
          <div className="flex gap-10 mb-32">
            <div className="basis-1/4 cursor-pointer">
              <img className="mb-4" src="/images/home/blog4.jpg" alt="" />
              <h1 className="text-xl mb-4">
                Creative Spirits Series: Nails by Mei X J.Crew
              </h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Shop the jewelry collab
              </span>
            </div>
            <div className="basis-1/4 cursor-pointer">
              <img className="mb-4" src="/images/home/blog1.jpg" alt="" />
              <h1 className="text-xl mb-4">The edit: embellished everything</h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Shop the roundup
              </span>
            </div>
            <div className="basis-1/4 cursor-pointer">
              <img className="mb-4" src="/images/home/blog3.jpg" alt="" />
              <h1 className="text-xl mb-4">Olympia’s picks: March edition</h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Shop her favorite styles
              </span>
            </div>
            <div className="basis-1/4 cursor-pointer">
              <img className="mb-4" src="/images/home/blog2.jpg" alt="" />
              <h1 className="text-xl mb-4">Local time with Leigh Altshuler</h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Explore her NYC bookstore
              </span>
            </div>
          </div>
          <div className="flex border-t-4 border-gray-900 ">
            <div className="flex flex-wrap w-3/4  items-start">
              <div className="basis-1/3 pr-4 pb-4 h-80">
                <img
                  className="w-full h-full"
                  src="/images/home/blog8.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 px-4 pb-4 h-80">
                <img
                  className="w-full h-full"
                  src="/images/home/blog6.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 px-4 pb-4 h-80">
                <img
                  className="w-full h-full"
                  src="/images/home/blog7.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 pr-4 py-4 h-80">
                <img
                  className="w-full h-full"
                  src="/images/home/blog5.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 p-4 h-80">
                <img
                  className="w-full h-full"
                  src="/images/home/blog9.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 p-4 h-80">
                <img
                  className="w-full h-full"
                  src="/images/home/blog10.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 ">
              <div className="relative">
                <div className="absolute -top-5 -left-10 mr-auto ml-6 font-bold">
                  MEETS CREATIVITY
                </div>
                <span className="absolute top-11 -left-16 font-bold -rotate-90  ">
                  WHERE STYLE
                </span>
                <div className="flex items-end w-52 h-52 border-4 border-black mb-10 p-4 text-2xl font-bold">
                  <h1>
                    The <br />
                    Adonis <br /> Collective
                  </h1>
                </div>
              </div>

              <Button text="Meet our Community" />
            </div>
          </div>
        </div> */}
      </main>
      <footer className="border-gray-400 border-t">{/* <Footer /> */}</footer>
    </div>
  );
}
