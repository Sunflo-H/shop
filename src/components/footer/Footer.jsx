import React from "react";
import { BsGithub } from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { GrMail } from "react-icons/gr";

export default function Footer() {
  const liStyle = "mt-2 font-semibold text-xs";
  return (
    <div className="">
      <div className="">
        <ul className="flex justify-center items-center p-4 gap-10 text-lg">
          <li className="flex items-center ">
            <BsGithub className="mr-2 text-2xl" />
            <span>Sunflo-H</span>
          </li>
          <li className="flex items-center">
            <HiPhone className="mr-2 text-2xl" />
            <span>010-6315-1065</span>
          </li>
          <li className="flex items-center">
            <GrMail className="mr-2 text-2xl" />
            <span>hbj2cjswodla@gmail.com</span>
          </li>
        </ul>
      </div>
      <div className="flex bg-gray-100 px-10 text-sm pt-14">
        <ul className="mr-20 ">
          <h1 className="font-bold">Help</h1>
          <li className={liStyle}>Customer Service</li>
          <li className={liStyle}>Track Order</li>
          <li className={liStyle}>Returns & Exchanges</li>
          <li className={liStyle}>Shipping</li>
          <li className={liStyle}>International Orders</li>
          <li className={liStyle}>Contact Us</li>
        </ul>
        <ul className="mr-20">
          <h1>Quick Links</h1>
          <li className={liStyle}>Find a Store</li>
          <li className={liStyle}>Size Charts</li>
          <li className={liStyle}>Refer a Friend</li>
          <li className={liStyle}>Offers & Promotions</li>
          <li className={liStyle}>My Favorites</li>
          <li></li>
        </ul>
        <ul>
          <h1>About Adonis</h1>
          <li className={liStyle}>Our Story</li>
          <li className={liStyle}>Careers</li>
          <li className={liStyle}>Social Responsibility</li>
          <li className={liStyle}>
            California Transparency <br /> Act/Modern Slavery Act
          </li>
          <li className={liStyle}>Investor Relations</li>
          <li className={liStyle}>Terms of Use</li>
          <li className={liStyle}>Privacy Policy</li>
          <li className={liStyle}>
            California Do Not Sell My <br />
            Personal Information
          </li>
          <li className={liStyle}>
            Diversity, Equity and Inclusion <br />
            at J.Crew Group
          </li>
        </ul>
      </div>
      <div className="w-full h-96 bg-gray-100"></div>
    </div>
  );
}
