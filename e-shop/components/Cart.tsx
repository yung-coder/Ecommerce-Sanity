"use client";

import React, { useRef } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShop,
} from "react-icons/ai";

import { TiDeleteOutline, TiSocialGooglePlus } from "react-icons/ti";
import toast from "react-hot-toast";
import { urlFor } from "../lib/clinet";
import { useStateContext } from "../context/stateContext";
import getStripe from "../lib/getStripe";

type CartProps = {
  refrence: React.MutableRefObject<any>;
};
const Cart = ({ refrence }: CartProps) => {
  const {
    setShowCart,
    cartItems,
    totalPrice,
    totalQuantities,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();
  const cartRef = useRef(null);

  const handelCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch("/api/stripe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartItems),
    });
    if (response.status === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  };
  const toogleCartoff = () => {
    setShowCart(false);
    refrence.current.style.display = "block";
  };
  return (
    <div
      ref={cartRef}
      className="absolute top-4 w-fit  left-[20%]  h-full bg-gray-100 rounded-2xl shadow-xl md:left-[73%] md:w-[25%]"
    >
      <div className="flex justify-start items-center p-3 space-x-2">
        <button onClick={toogleCartoff}>
          <AiOutlineLeft />
        </button>
        <span>You cart has </span>
        <span>{`(${totalQuantities})`} items</span>
      </div>

      <div className="flex flex-col justify-center items-center p-5 space-y-2">
        {cartItems.map((product: any) => {
          return (
            <>
              <div className="flex justify-evenly border-b-2 border-black ">
                <div className="h-fit rounded-full">
                  <TiDeleteOutline onClick={() => onRemove(product)} />
                </div>
                <div className="p-5">
                  <div className="bg-gray-200 rounded-3xl">
                    <img src={urlFor(product.image[0]).url()} alt="xxx" />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-3 space-y-4 w-full">
                  <div className="flex justify-between">
                    <h1>{product.name}</h1>
                    <h1>{product.price}$</h1>
                  </div>
                  <div className="flex  justify-center items-center cursor-pointer">
                    <div
                      className="w-8 flex justify-center items-center border"
                      onClick={() =>
                        toggleCartItemQuanitity(product._id, "dec")
                      }
                    >
                      -
                    </div>
                    <p className="w-8 flex justify-center items-center border">
                      {product.quantity}
                    </p>
                    <div
                      className="w-8 flex justify-center items-center border"
                      onClick={() =>
                        toggleCartItemQuanitity(product._id, "inc")
                      }
                    >
                      +
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      {cartItems.length >= 1 && (
        <>
          <div className="flex flex-col absolute top-80  w-[100%] ">
            <div className="flex justify-between p-5">
              <h1>SubTotal</h1>
              <h1>{`${totalPrice}`} $</h1>
            </div>
            <div className="flex justify-center items-center">
              <button
                className="bg-purple-500 text-white px-6 rounded-xl"
                onClick={handelCheckout}
              >
                Strpe
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
