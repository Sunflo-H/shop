import React from "react";
import Button from "../../ui/Button";
import BlogBottom from "./BlogBottom";
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
      <div
        className="flex 
      flex-col-reverse lg:flex-row lg:border-t-4 lg:border-gray-900 
      "
      >
        <BlogBottom />
      </div>
    </>
  );
}
