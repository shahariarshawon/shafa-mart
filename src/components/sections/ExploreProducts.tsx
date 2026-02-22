"use client";
import { useState } from "react";
import Link from "next/link";
import ProductCard from "../ui/productCard";
import { Button } from "../ui/button";

const allProducts = [
  {
    id: 1,
    title: "Premium Cat Food",
    price: 25,
    image: "/products/catfood.png",
  },
  { id: 2, title: "DSLR Camera", price: 750, image: "/products/camera.png" },
  { id: 3, title: "Gaming Laptop", price: 1200, image: "/products/laptop.png" },
  { id: 4, title: "Makeup Kit Pro", price: 90, image: "/products/makeup.png" },
  {
    id: 5,
    title: "Remote Control Car",
    price: 60,
    image: "/products/rc-car.png",
  },
  { id: 6, title: "Running Shoes", price: 110, image: "/products/shoes.png" },
  {
    id: 7,
    title: "Wireless Gamepad",
    price: 55,
    image: "/products/gamepad.png",
  },
  { id: 8, title: "Winter Jacket", price: 180, image: "/products/jacket.png" },

  {
    id: 11,
    title: "Wireless Headphones",
    image: "/flashSales/flashSale1.webp",
    price: 79,
    oldPrice: 129,
    discount: 40,
    rating: 4,
    reviews: 132,
  },
  {
    id: 12,
    title: "Smart Watch",
    image: "/flashSales/flashSale2.webp",
    price: 199,
    oldPrice: 249,
    discount: 20,
    rating: 5,
    reviews: 87,
  },
  {
    id: 13,
    title: "Running Shoes",
    image: "/flashSales/flashSale3.webp",
    price: 89,
    oldPrice: 149,
    discount: 40,
    rating: 4,
    reviews: 210,
  },
  {
    id: 14,
    title: "Gaming Mouse",
    image: "/flashSales/flashSale4.webp",
    price: 39,
    oldPrice: 69,
    discount: 45,
    rating: 4,
    reviews: 64,
  },
];

const ExploreProducts = () => {
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleProducts = allProducts.slice(0, visibleCount);

  return (
    <section className="py-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-10 px-4 sm:px-0">
        <h2 className="text-2xl md:text-3xl font-bold text-[#007589]">
          Explore Our Products
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 sm:px-0">
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < allProducts.length && (
        <div className="flex justify-center mt-10">
          <Button className="bg-[#007589] p-5">
            <Link href="/flash-sales" className=" font-semibold">
              View All Products
            </Link>
          </Button>
        </div>
      )}
    </section>
  );
};

export default ExploreProducts;
