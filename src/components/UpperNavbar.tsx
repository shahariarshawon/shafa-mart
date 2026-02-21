import Link from "next/link";
import React from "react";

const UpperNavbar = () => {
  return (
    <div className="bg-black max-w-full py-2">
      <p className="text-white text-center text-sm ">
        Summer Sale for All Swim Suits and Free Delivery - OFF 60%!{"   "}
        <Link href="#" className="text-white font-semibold underline">
          Shop Now
        </Link>
      </p>
    </div>
  );
};

export default UpperNavbar;
