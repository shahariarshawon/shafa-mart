"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    name: "Women's Fashion",
    sub: ["Dresses", "Tops", "Shoes", "Bags", "Accessories"],
  },
  {
    name: "Men's Fashion",
    sub: ["Shirts", "Pants", "Shoes", "Watches", "Accessories"],
  },
  { name: "Electronics", sub: ["Mobiles", "Laptops", "Cameras", "Audio"] },
  { name: "Home & Lifestyle", sub: ["Furniture", "Decor", "Kitchen"] },
  { name: "Medicine", sub: ["Vitamins", "Prescription", "First Aid"] },
  { name: "Sports & Outdoor", sub: ["Gym Equipment", "Sportswear"] },
  { name: "Baby & Toys", sub: ["Toys", "Clothes", "Accessories"] },
  { name: "Groceries & Pets", sub: ["Food", "Pet Supplies"] },
  { name: "Health & Beauty", sub: ["Skincare", "Haircare", "Makeup"] },
];

const HeroSidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleCategory = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <aside className="w-64 bg-white border-r  overflow-y-auto sticky top-0 max-sm:hidden">
      <ul className="flex flex-col gap-1">
        {categories.map((cat, idx) => (
          <li key={cat.name} className="flex flex-col">
            {/* Main Category */}
            <button
              onClick={() => toggleCategory(idx)}
              className="flex justify-between items-center w-full text-left px-3 py-2 font-medium rounded hover:bg-gray-100 transition"
            >
              <span>{cat.name}</span>
              {cat.sub && (
                <span>
                  {openIndex === idx ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </span>
              )}
            </button>

            {/* Subcategories */}
            {cat.sub && openIndex === idx && (
              <ul className="flex flex-col pl-6 mt-1 gap-1">
                {cat.sub.map((sub) => (
                  <li key={sub}>
                    <Link
                      href="#"
                      className="block text-sm text-gray-600 px-2 py-1 rounded hover:bg-gray-100 transition"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default HeroSidebar;
