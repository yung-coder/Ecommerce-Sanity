"use client";

import React, { useRef } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useStateContext } from "../context/stateContext";
import Cart from "./Cart";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const cartIconref = useRef<any>();
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const handelToogle = () => {
    setShowCart(true);
    cartIconref.current.style.display = 'none';
  }
  return (
    <>
      <div className="flex justify-between items-center bg-gray-200">
        <div className="p-2">
          <h1 className="text-xl font-bold text-gray-600">Cart Narts</h1>
        </div>
        <div className="p-3 cursor-pointer" ref={cartIconref}>
          <AiOutlineShoppingCart
            size={30}
            onClick={handelToogle}
          />
        </div>
        {showCart && (
          <div className="p-7">
            <Cart refrence={cartIconref}/>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
