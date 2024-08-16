"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from './components/layout/navbar';
import Carousel from './components/layout/carousel';
import Footer from './components/layout/Footer';
import TextBlock from './components/layout/TextBlock'; // Adjust the import path as needed
import LoaderComponent from './components/layout/Loader'; // Import the loader component
// import { client } from "./lib/client";


// const fetchHeader = async()=>{
//   let response = await client.getEntries({content_type:"websiteHeader"});
//   console.log("fetchHeader", response);
// }

const HomePage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);


  const textBlocks = [
    {
      imageSrc: "/nest1.png",
      heading: "Manage & Enrich Product Data",
      paragraph: "Managing key stakeholder relationships can be difficult. Effortlessly collect product data from suppliers with Supplier Data Manager and share relevant product details seamlessly with internal and external stakeholders, enabling you to activate your product catalog across 300+ retailers and marketplace channels.",
  },
    {
        imageSrc: "/nest2.png",
        heading: "Onboard Suppliers & Activate Product Catalogs",
        paragraph: "Our PIM solution enables you to ingest, normalize, enrich, and centralize product information through enterprise-grade data modeling, governance, and workflows. Leverage cutting-edge technologies to identify and rectify missing or inaccurate information, enhance product data for improved SEO, and effectively convey your brand’s identity across all channels. Gain valuable insights into data quality and time-to-market, allowing you to optimize your operations seamlessly and effortlessly connect digital assets to product records.",
    },
    // Add more text blocks as needed
];

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed
  }, []);

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <>
      <Navbar scrolled={false} />
      <Carousel /> 
      <TextBlock textBlocks={textBlocks}/> <br /><br />
      <Footer />
    </>
  );
};

export default HomePage;
