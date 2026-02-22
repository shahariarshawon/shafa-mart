import Banner from "@/components/sections/Banner";
import BestSelling from "@/components/sections/BestSelling";
import BrowseByCategory from "@/components/sections/BrowseByCategory";
import ExploreProducts from "@/components/sections/ExploreProducts";
import FlashSales from "@/components/sections/FlashSales";
import React from "react";

const Homepage = () => {
  return (
    <main>
      <div className="max-w-xl md:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
        <Banner />
        <FlashSales />
        <BrowseByCategory />
        <BestSelling />
        <ExploreProducts />
      </div>
    </main>
  );
};

export default Homepage;
