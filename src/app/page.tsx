import Featured from "@/components/sections/Featured";
import FlashSales from "@/components/sections/FlashSales";
import React from "react";

const Homepage = () => {
  return (
    <main>
      <div className="max-w-xl md:max-w-2xl lg:max-w-6xl 2xl:max-w-7xl mx-auto">
        <Featured />
        <FlashSales />
      </div>
    </main>
  );
};

export default Homepage;
