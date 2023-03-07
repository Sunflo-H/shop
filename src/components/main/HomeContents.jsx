import React from "react";
import Button from "../ui/Button";

export default function HomeContents({ children }) {
  return (
    <section className="w-full h-section flex flex-col m-auto mb-20 ">
      {children}
    </section>
  );
}
