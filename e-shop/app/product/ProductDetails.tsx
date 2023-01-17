"use client";

import React from "react";
import { useStateContext } from "../../context/stateContext";
import { urlFor } from "../../lib/clinet";
type ProductDetailsProps = {
  product: any;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { onAdd, qty, incQty, decQty } = useStateContext();
  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-56 object-contain object-center rounded"
            src={urlFor(product.image[0]).url()}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h1 className="text-white text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 text-indigo-400"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                <span className="ml-3">4 Reviews</span>
              </span>
            </div>
            <p className="leading-relaxed">{product.details}</p>
            <div className="flex flex-col space-y-3 mt-6  pb-5 border-b-2 border-gray-800 mb-5">
              <div className="flex space-x-4">
                <h1 className="text-sm">Quantity :</h1>
                <div className="flex border justify-center items-center cursor-pointer">
                  <div
                    className="w-8 flex justify-center items-center border"
                    onClick={decQty}
                  >
                    -
                  </div>
                  <p className="w-8 flex justify-center items-center border">
                    {qty}
                  </p>
                  <div
                    className="w-8 flex justify-center items-center border"
                    onClick={incQty}
                  >
                    +
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-white">
                {product.price} $
              </span>
              <button
                className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                onClick={() => onAdd(product, qty)}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProductDetails;
