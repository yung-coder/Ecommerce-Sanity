import Image from "next/image";
import React from "react";
import { client, urlFor } from "../lib/clinet";

const getData = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return { products, bannerData };
};

async function Products(): Promise<JSX.Element> {
  const { products, bannerData } = await getData();
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center p-3">
        <h1 className="text-2xl font-bold">BEST PRODUCTS</h1>
      </div>

      <div>{products?.map((pro: any) => pro.name)}</div>

      {/* <div className="text-black">{bannerData[0].smallText}</div>
      <img src={`${urlFor(bannerData[0].image).toString()}`} alt="" /> */}
    </div>
  );
}
export default Products;
