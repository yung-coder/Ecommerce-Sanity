import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Products from "../components/Products";


import '../styles/globals.css';

const page = () => {
   return (
     <div>
       <Header />
       <Hero />
       <Products />
       <Footer />
     </div>
   )
};

export default page;