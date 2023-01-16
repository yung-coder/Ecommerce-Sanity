"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ContextProps {
  showCart: boolean;
  cartItems: any[];
  totalPrice: Number;
  totalQuantities: Number;
  qty: Number;
  inQty: () => void;
  decQty: () => void;
}

const Context = createContext<ContextProps>({
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 0,
  inQty: () => {},
  decQty: () => {},
});

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setqty] = useState(1);

  const inQty = () => {
    setqty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setqty((prevQty) => {
      if (prevQty - 1 < 1) return 1;

      return prevQty - 1;
    });
  };
  return (
    <Context.Provider
      value={{
        showCart,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        inQty,
        decQty,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
