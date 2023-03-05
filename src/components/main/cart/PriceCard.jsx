import React from "react";

export default function PriceCard({ title, price }) {
  return (
    <div className="bg-gray-100 rounded-md px-8 py-4 text-center">
      <div className="text-sm font-bold">{title}</div>
      <div className="text-rose-400 font-bold">₩{price}</div>
    </div>
  );
}
