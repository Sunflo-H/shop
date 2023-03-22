import React from "react";
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

        <section className="w-full flex flex-col m-auto mb-20 ">
          <div className="text-center mb-6">
            <p className="text-md mb-4 tracking-widest">
              <span className="font-bold mr-4">NEW</span>
              <span className="">COLLECTIONS</span>
            </p>
            <h2 className="text-5xl font-semibold">Featured Items</h2>
          </div>
          <ul className="flex justify-center gap-8 mb-6">
            <li className="cursor-pointer">Men</li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">Accessories</li>
            <li className="cursor-pointer">Shoes</li>
          </ul>
          <div className="flex justify-center  mb-14">
            <div className="md:w-2/3">
              <HomeProducts category="Men" />
            </div>
          </div>
          <div className="text-center ">
            <Button text="See All" />
          </div>
        </section>

        <div className="w-full h-full bg-gray-100 px-32 pt-14 py-10 mb-20 ">
          <h1 className="text-5xl font-bold mb-8">Our Stories</h1>
          <div className="flex gap-10 mb-32">
            <div className="basis-1/4 cursor-pointer">
              <img
                className="mb-4"
                src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413296/shoppy/blog4_gmrzw8.jpg"
                alt=""
              />
              <h1 className="text-xl mb-4">
                Creative Spirits Series: Nails by Mei X J.Crew
              </h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Shop the jewelry collab
              </span>
            </div>
            <div className="basis-1/4 cursor-pointer">
              <img
                className="mb-4"
                src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413299/shoppy/blog1_uot0ej.jpg"
                alt=""
              />
              <h1 className="text-xl mb-4">The edit: embellished everything</h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Shop the roundup
              </span>
            </div>
            <div className="basis-1/4 cursor-pointer">
              <img
                className="mb-4"
                src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413298/shoppy/blog3_ufgcyf.jpg"
                alt=""
              />
              <h1 className="text-xl mb-4">Olympia’s picks: March edition</h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Shop her favorite styles
              </span>
            </div>
            <div className="basis-1/4 cursor-pointer">
              <img
                className="mb-4"
                src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413299/shoppy/blog2_twfun4.jpg"
                alt=""
              />
              <h1 className="text-xl mb-4">Local time with Leigh Altshuler</h1>
              <span className="font-bold border-b-2 border-black pb-1">
                Explore her NYC bookstore
              </span>
            </div>
          </div>
          <div className="flex border-t-4 border-gray-900 ">
            <div className="flex flex-wrap w-3/4  items-start ">
              <div className="basis-1/3 pr-8 pb-6 h-80 ">
                <img
                  className="w-full h-full"
                  src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413298/shoppy/blog8_ewqvt6.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 pr-8 pb-6 h-80 ">
                <img
                  className="w-full h-full"
                  src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413297/shoppy/blog6_g5hgqh.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 pr-8 pb-6 h-80 ">
                <img
                  className="w-full h-full"
                  src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413299/shoppy/blog7_znvyes.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 pr-8 pt-2 pb-4 h-80">
                <img
                  className="w-full h-full"
                  src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413297/shoppy/blog5_ynq6j0.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 pr-8 pt-2 pb-4 h-80">
                <img
                  className="w-full h-full"
                  src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413298/shoppy/blog9_vmczy4.jpg"
                  alt=""
                />
              </div>
              <div className="basis-1/3 pr-8 pt-2 pb-4 h-80">
                <img
                  className="w-full h-full"
                  src="https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_296,w_270/v1679413298/shoppy/blog10_cw41yu.jpg"
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
        </div>
      </main>
      <footer className="border-gray-400 border-t">
        <Footer />
      </footer>
    </div>
  );
}
