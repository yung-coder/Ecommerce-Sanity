import React from "react";

type pageProps = {
  params: {
    productID: string;
  };
};

const page: React.FC<pageProps> = ({ params: { productID } }: pageProps) => {
  return <div></div>;
};
export default page;
