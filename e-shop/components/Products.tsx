import Image from "next/image";
import React from "react";
import { client, urlFor } from "../lib/clinet";
import ProductCard from "./ProductCard";

const getData = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return { products, bannerData };
};

async function Products(): Promise<JSX.Element> {
  const { products, bannerData } = await getData();
  console.log(products);
  return (
    <div className="flex flex-col bg-white">
      <div className="flex justify-center items-center p-3">
        <h1 className="text-2xl font-bold">Best Seller Products</h1>
      </div>
      <div className="flex p-11 flex-col space-y-5 md:flex md:flex-row  md:space-x-16 md:space-y-0 justify-center items-center ">
        {products.map((product: any) => {
          return (
            <div className="p-5  transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 bg-transparent">
              <ProductCard product={product} key={product.slug} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Products;
