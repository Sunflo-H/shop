import React from "react";
import Button from "../ui/Button";

export default function HomeContents({ children }) {
  return (
    <section className="w-full flex flex-col m-auto mb-20 bg-red-500 ">
      {children}
    </section>
  );
}
