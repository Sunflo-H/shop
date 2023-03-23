import React from "react";
import Button from "../../ui/Button";
import BlogTopImage from "./BlogTopImage";

export default function HomeContents_blog() {
  const topImageInfo = [
    {
      url: "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413296/shoppy/blog4_gmrzw8.jpg",
      title: "Creative Spirits Series: Nails by Mei X J.Crew",
      text: "Shop the jewelry collab",
    },
    {
      url: "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413299/shoppy/blog1_uot0ej.jpg",
      title: "The edit: embellished everything",
      text: "Shop the roundup",
    },
    {
      url: "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413298/shoppy/blog3_ufgcyf.jpg",
      title: "Olympia’s picks: March edition",
      text: "Shop her favorite styles",
    },
    {
      url: "https://res.cloudinary.com/dysdtbktd/image/upload/c_scale,h_405,w_270/v1679413299/shoppy/blog2_twfun4.jpg",
      title: "Local time with Leigh Altshuler",
      text: "Explore her NYC bookstore",
    },
  ];
  return (
    <>
      <h1
        className="text-5xl font-bold mb-8 text-center 
      md:text-start"
      >
        Our Stories
      </h1>
      <div className="flex flex-col md:flex-row gap-10 mb-32">
        {topImageInfo.map((info, i) => {
          return <BlogTopImage info={info} key={i} />;
        })}
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
    </>
  );
}
