"use client";
import Link from "next/link";
import {
  Smartphone,
  Laptop,
  Watch,
  Camera,
  Headphones,
  Gamepad2,
  Grid,
} from "lucide-react";
import { Button } from "../ui/button";

const categories = [
  { name: "Phones", icon: Smartphone },
  { name: "Computers", icon: Laptop },
  { name: "Smartwatch", icon: Watch },
  { name: "Camera", icon: Camera },
  { name: "Headphones", icon: Headphones },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Others", icon: Grid },
];

const BrowseByCategory = () => {
  return (
    <section className="py-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 px-4 sm:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-[#007589]">
          Browse By Category
        </h2>
        <Button className="bg-[#007589] p-5">
          <Link href="/flash-sales" className=" font-semibold">
            View All
          </Link>
        </Button>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide px-4 sm:px-0">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div
              key={index}
              className="group min-w-[140px] sm:min-w-[160px] md:min-w-[180px] h-40 flex flex-col justify-center items-center border rounded-lg cursor-pointer transition-all duration-300 hover:bg-[#007589] hover:border-[#007589]"
            >
              <Icon
                size={40}
                className="text-black group-hover:text-white transition-colors duration-300"
              />
              <p className="mt-4 font-medium text-black group-hover:text-white transition-colors duration-300">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrowseByCategory;
