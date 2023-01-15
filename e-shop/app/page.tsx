import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Products from "../components/Products";


import '../styles/globals.css';

const page = () => {
   return (
     <div>
       <Hero />
       <Products />
       <Footer />
     </div>
   )
};

export default page;