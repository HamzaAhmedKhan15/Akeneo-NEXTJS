"use client";
import React, { useState, useEffect } from 'react';
import Footer from "../../components/layout/Footer";
import TextBlock from "../../components/layout/TextBlock";
import Navbar from "../../components/layout/navbar";
import LoaderComponent from '../../components/layout/Loader'; // Adjust the import path as needed

export default function LayoutB() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate a loading delay
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the delay as needed
    }, []);

    const textBlocks = [
        {
            imageSrc: "/nest2.png",
            heading: "Manage & Enrich Product Data",
            paragraph: "Our PIM solution enables you to ingest, normalize, enrich, and centralize product information through enterprise-grade data modeling, governance, and workflows. Leverage cutting-edge technologies to identify and rectify missing or inaccurate information, enhance product data for improved SEO, and effectively convey your brand’s identity across all channels. Gain valuable insights into data quality and time-to-market, allowing you to optimize your operations seamlessly and effortlessly connect digital assets to product records.",
        },
        {
            imageSrc: "/nest1.png",
            heading: "Onboard Suppliers & Activate Product Catalogs",
            paragraph: "Managing key stakeholder relationships can be difficult. Effortlessly collect product data from suppliers with Supplier Data Manager and share relevant product details seamlessly with internal and external stakeholders, enabling you to activate your product catalog across 300+ retailers and marketplace channels.",
        },
        {
            imageSrc: "/nest.png",
            heading: "Manage & Enrich Product Data",
            paragraph: "Our PIM solution enables you to ingest, normalize, enrich, and centralize product information through enterprise-grade data modeling, governance, and workflows. Leverage cutting-edge technologies to identify and rectify missing or inaccurate information, enhance product data for improved SEO, and effectively convey your brand’s identity across all channels. Gain valuable insights into data quality and time-to-market, allowing you to optimize your operations seamlessly and effortlessly connect digital assets to product records.",
        },
        // Add more text blocks as needed
    ];

    if (isLoading) {
        return <LoaderComponent />;
    }

    return (
        <>
            <Navbar scrolled={false} navLinkColor="black" logoColor="black"  menuBarIconColor="black" /> <br /><br /><br />
            <TextBlock textBlocks={textBlocks} /> <br /><br />
            <Footer />
        </>
    );
}
