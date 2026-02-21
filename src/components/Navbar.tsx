import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image src="/navlogo.apng" alt="Logo" width={50} height={50} />
        <div className="text-xl font-bold">
          <p>ShaFa</p> <p className="text-lg text-center ">Mart</p>
        </div>
      </div>
      <div>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Shop</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-2">
        <Button>Sign In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  );
};

export default Navbar;
