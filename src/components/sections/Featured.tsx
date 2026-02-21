import React from "react";
import HeroSlider from "../HeroSlider";
import HeroSidebar from "../HeroSidebar";

const Featured = () => {
  return (
    <main className="flex flex-col md:flex-row py-8 ">
      <div className="w-full md:w-1/4">
        <HeroSidebar />
      </div>
      <div className="w-full md:w-3/4">
        <HeroSlider />
      </div>
    </main>
  );
};

export default Featured;
