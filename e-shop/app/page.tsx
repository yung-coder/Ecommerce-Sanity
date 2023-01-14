import React from "react";
import Hero from "../components/Hero";
import Products from "../components/Products";


import '../styles/globals.css';

const page = () => {
   return (
     <div>
       <Hero />
       <Products />
     </div>
   )
};

export default page;