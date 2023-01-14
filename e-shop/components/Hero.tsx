"clinet";

import Link from "next/link";
import React from "react";

type HeroProps = {};

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="flex flex-col justify-evenly border border-black bg-gray-200 -space-y-14">
      <div className="flex flex-col justify-center  p-10 space-y-1">
        <h2 className="text-sm">SAMLL TEXT</h2>
        <h1 className="text-3xl font-bold">MID Text</h1>
      </div>
      <div className="flex flex-col p-10">
        <Link href={"product/ID"}>
          <button className="bg-red-500 text-white px-3 rounded-2xl">
            Button
          </button>
        </Link>

        <div className="relative flex justify-center items-center flex-col p-10 top-16 left-44">
          <h2 className="text-xs">Decsription</h2>
          <h3 className="text-sm text-gray-300">Decscription</h3>
        </div>
      </div>
    </div>
  );
};
export default Hero;
