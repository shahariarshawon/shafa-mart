import React from "react";
import HeroSlider from "../HeroSlider";

const Featured = () => {
  return (
    <main className="flex flex-col md:flex-row  md:max-w-7xl mx-auto">
      <div className="w-full md:w-1/4">sidebar</div>
      <div className="w-full md:w-3/4 py-10">
        <HeroSlider />
      </div>
    </main>
  );
};

export default Featured;
