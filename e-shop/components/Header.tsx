"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gray-200">
        <div className="p-2 text-base text-gray-600 font-bold">
          <h1>Cart Narts</h1>
        </div>
        <div className="p-3 ">
          <AiOutlineShoppingCart size={30} />
        </div>
      </div>
    </>
  );
};
export default Header;
