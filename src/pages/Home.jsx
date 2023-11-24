import React from "react";
import Layout_summer2023 from "../components/main/Home/Layout_summer2023";
import Layout_accessories from "../components/main/Home/Layout_accessories";
import Layout_productsByCategory from "../components/main/Home/Layout_productsByCategory";
import Layout_blog from "../components/main/Home/Layout_blog";
import Layout_carousel from "../components/main/Home/Layout_carousel";

export default function Home() {
  return (
    <div className="pt-20">
      <main className="px-5 md:px-10 m-auto max-w-screen-2xl ">
        <Layout_carousel />
        <Layout_summer2023 />
        <Layout_accessories />
        <Layout_productsByCategory />
        <Layout_blog />
      </main>
    </div>
  );
}
