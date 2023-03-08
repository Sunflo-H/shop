import React from "react";

export default function User({ user: { displayName, photoURL }, isSide }) {
  if (isSide) {
    return (
      <div className="h-20 w-40 bg-red-500">
        <span className="shrink-0">{displayName}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center h-full pt-5 pb-3 text-sm font-normal">
      {/* <img
        className="w-10 h-10 rounded-full"
        src={photoURL}
        alt={displayName}
        referrerPolicy="no-referrer"
      /> */}
      <span className="hidden md:block shrink-0">{displayName}</span>
    </div>
  );
}
