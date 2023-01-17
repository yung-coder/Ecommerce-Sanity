"use client";

import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-red-700">
      <div className="flex">
        <div className="flex flex-col text-white p-10 space-y-3 w-[50%]">
          <h1 className="text-sm">20% Discount</h1>
          <div>
            <h2 className="text-2xl font-bold">FINE</h2>
            <h2 className="text-2xl font-bold">WINTER</h2>
          </div>
          <h2 className="font-bold text-xs">20 Jan to 3 Feb</h2>
        </div>
        <div className="flex flex-col  space-y-3 text-white p-11">
          <h1 className="text-xs">Beats</h1>
          <h1 className="text-2xl font-bold">Winter Sale</h1>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
