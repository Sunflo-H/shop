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
import List from "./List";

export default function Footer() {
  const liStyle = "mt-2 font-semibold text-xs ";
  const spanStyle = "border-b-2 border-transparent hover:border-black";
  const etcList = [
    [
      "Help",
      "Customer Service",
      "Track Order",
      "Returns & Exchanges",
      "Shipping",
      "International Orders",
      "Contact Us",
    ],
    [
      "Quick Links",
      "Find a Store",
      "Size Charts",
      "Refer a Friend",
      "Offers & Promotions",
      "My Favorites",
    ],
    [
      "About Adonis",
      "Our Story",
      "Careers",
      "Social Responsibility",
      "California Transparency Act/Modern Slavery Act",
      "Investor Relations",
      "Terms of Use",
      "Privacy Policy",
      "California Do Not Sell My Personal Information",
      "Diversity, Equity and Inclusion at J.Crew Group",
    ],
  ];
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
              {etcList.map((list) => (
                <List list={list} />
              ))}
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
