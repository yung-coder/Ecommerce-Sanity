"use client";
"use client";

import Link from "next/link";
import React from "react";
import { urlFor } from "../lib/clinet";

type ProductCardProps = {
  product: any;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  console.log(product);
  return (
    <Link href={`/product/${product.slug.current}`}>
      <div className="flex flex-col p-2 justify-center  cursor-pointer ">
        <div className="bg-gray-200 h-fit w-fit rounded-2xl">
          <div className="p-7">
            <img
              src={urlFor(product.image && product.image[0])
                .width(120)
                .url()}
              alt=""
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-gray-500 ">{product.name}</h1>
          <h2 className="text-sm font-bold">{product.price}$</h2>
        </div>
      </div>
    </Link>
  );
};
export default ProductCard;
