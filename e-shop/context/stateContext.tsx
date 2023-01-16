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
  onAdd: (product: any, quantity: any) => void;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const Context = createContext<ContextProps>({
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 0,
  inQty: () => {},
  decQty: () => {},
  onAdd: (product: any, quantity: any) => {},
  setShowCart: (value: React.SetStateAction<boolean>) => {},
});

export const StateContext = ({ children }: { children: React.ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setqty] = useState(0);

  const onAdd = (product: any, quantity: any) => {
    const checkProductInCart = cartItems.find(
      (item: any) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + quantity);
    if (checkProductInCart) {
      const updatedCartItems = cartItems.map((cartProduct: any) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
      });

      setCartItems(updatedCartItems);
      console.log("added");
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
      console.log("added");
    }
  };

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
        onAdd,
        setShowCart,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
