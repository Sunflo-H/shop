import React from "react";
import {
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsPinterest,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { HiPhone } from "react-icons/hi";
import { GrMail, GrLinkedin, GrLinkedinOption } from "react-icons/gr";
import { FaFacebook, FaFacebookF, FaYoutube } from "react-icons/fa";
import Button from "../ui/Button";

export default function Footer() {
  const liStyle = "mt-2 font-semibold text-xs";
  return (
    <>
      <div className="max-w-screen-2xl m-auto">
        <ul className="flex justify-center items-center p-4 gap-10 text-lg font-bold">
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
      <div className="bg-gray-100 pb-10">
        <div className="flex flex-col-reverse md:flex-row justify-between max-w-screen-xl text-sm pt-14 m-auto">
          <div className="">
            <div className="flex">
              <ul className="mr-20 shrink-0">
                <h1 className="font-bold">Help</h1>
                <li className={liStyle}>Customer Service</li>
                <li className={liStyle}>Track Order</li>
                <li className={liStyle}>Returns & Exchanges</li>
                <li className={liStyle}>Shipping</li>
                <li className={liStyle}>International Orders</li>
                <li className={liStyle}>Contact Us</li>
              </ul>
              <ul className="mr-20 shrink-0">
                <h1>Quick Links</h1>
                <li className={liStyle}>Find a Store</li>
                <li className={liStyle}>Size Charts</li>
                <li className={liStyle}>Refer a Friend</li>
                <li className={liStyle}>Offers & Promotions</li>
                <li className={liStyle}>My Favorites</li>
                <li></li>
              </ul>
              <ul className="mr-20 shrink-0">
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
            <div>
              <div className="flex items-center gap-4 mb-8">
                <BsInstagram className="text-2xl" />
                <FaFacebookF className="text-2xl" />
                <BsTwitter className="text-2xl" />
                <GrLinkedinOption className="text-2xl" />
                <BsPinterest className="text-2xl" />
                <FaYoutube className="text-2xl" />
              </div>
              <p className="px-2 mb-4 underline text-sm font-bold">
                South Korea
              </p>
              <p className="font-bold px-2">© 2023 Adonis</p>
            </div>
          </div>
          <div>
            <h1 className="mb-2">Like Being First?</h1>
            <p className="text-gray-400 font-semibold mb-2">
              Get can't-miss style news, before everybody else.
            </p>
            <div className="flex items-center">
              <input
                className="p-2 grow"
                type="text"
                placeholder="Enter your email."
              />
              <button className="bg-black text-white px-4 py-2 font-bold">
                SIGN UP
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
