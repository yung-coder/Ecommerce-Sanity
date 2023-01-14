import React from "react";

type ProductsProps = {};

const Products: React.FC<ProductsProps> = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-center items-center p-3">
        <h1 className="text-2xl font-bold">BEST PRODUCTS</h1>
      </div>
    </div>
  );
};
export default Products;
