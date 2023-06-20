import React from "react";

const Navbar = () => {
  return (
    <div className="flex border-b border-gray-500 pb-2 justify-center items-center">
      <img
        src="/logo.png"
        className="w-28 md:w-44 rounded-full"
        alt="finztrust"
      />
      <h1 className="text-2xl px-2 first-letter:text-5xl font-bold text-gray-700">
        GitHub Users
      </h1>
    </div>
  );
};

export default Navbar;
