import React from "react";
import { client, urlFor } from "../lib/clinet";

const getData = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return { products, bannerData };
};

async function Products() {
  const { products, bannerData } = await getData();
  console.log(bannerData);
  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center p-3">
        <h1 className="text-2xl font-bold">BEST PRODUCTS</h1>
      </div>

      <div>{products?.map((pro) => pro.name)}</div>

      <div className="text-black">{bannerData[0].smallText}</div>
    </div>
  );
}
export default Products;
