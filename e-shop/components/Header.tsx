"use client";

import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "../context/stateContext";
import Cart from "./Cart";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <>
      <div className="flex justify-between items-center bg-gray-200">
        <div className="p-2">
          <h1 className="text-xl font-bold text-gray-600">Cart Narts</h1>
        </div>
        <div className="p-3 cursor-pointer">
          <AiOutlineShoppingCart
            size={30}
            onClick={() => setShowCart(true)}
          />
        </div>
        {showCart && <Cart />}
      </div>
    </>
  );
};
export default Header;
