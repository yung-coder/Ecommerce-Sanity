import React from "react";
import { client, urlFor } from "../../../lib/clinet";
import ProductCard from "../../../components/ProductCard";
import ProductDetails from "../ProductDetails";

type pageProps = {
  params: {
    productID: string;
  };
};

const getData = async (productID: string) => {
  const query = `*[_type == "product" && slug.current == '${productID}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    product,
    products,
  };
};

async function page({
  params: { productID },
}: pageProps): Promise<JSX.Element> {
  const { product, products } = await getData(productID);
  return (
    <>
      <div className="flex flex-col">
        <ProductDetails product={product} />
        <div className="flex justify-center items-center flex-col space-y-4 p-10">
          <h1 className="text-2xl font-bold">SIMILAR PRODUCTS</h1>
          <div className="flex flex-col md:flex-row justify-center items-center p-5">
            {products.map((product: any) => {
              return (
                <div className="shadow-2xl transition ease-in delay-150 hover:-translate-y-1 hover:scale-110 m-5">
                  <ProductCard product={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default page;
