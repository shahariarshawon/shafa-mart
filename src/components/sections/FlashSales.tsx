"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductCard from "../ui/productCard";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
  oldPrice: number;
  discount: number;
  rating: number;
  reviews: number;
};

const products: Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/flashSales/flashSale1.webp",
    price: 79,
    oldPrice: 129,
    discount: 40,
    rating: 4,
    reviews: 132,
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/flashSales/flashSale2.webp",
    price: 199,
    oldPrice: 249,
    discount: 20,
    rating: 5,
    reviews: 87,
  },
  {
    id: 3,
    title: "Running Shoes",
    image: "/flashSales/flashSale3.webp",
    price: 89,
    oldPrice: 149,
    discount: 40,
    rating: 4,
    reviews: 210,
  },
  {
    id: 4,
    title: "Gaming Mouse",
    image: "/flashSales/flashSale4.webp",
    price: 39,
    oldPrice: 69,
    discount: 45,
    rating: 4,
    reviews: 64,
  },
  {
    id: 1,
    title: "Wireless Headphones",
    image: "/flashSales/flashSale1.webp",
    price: 79,
    oldPrice: 129,
    discount: 40,
    rating: 4,
    reviews: 132,
  },
  {
    id: 2,
    title: "Smart Watch",
    image: "/flashSales/flashSale2.webp",
    price: 199,
    oldPrice: 249,
    discount: 20,
    rating: 5,
    reviews: 87,
  },
  {
    id: 3,
    title: "Running Shoes",
    image: "/flashSales/flashSale3.webp",
    price: 89,
    oldPrice: 149,
    discount: 40,
    rating: 4,
    reviews: 210,
  },
  {
    id: 4,
    title: "Gaming Mouse",
    image: "/flashSales/flashSale4.webp",
    price: 39,
    oldPrice: 69,
    discount: 45,
    rating: 4,
    reviews: 64,
  },
];

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-[#009587]">Flash Sales</h2>

        <div className="flex gap-3 text-sm font-semibold">
          <div>{hours.toString().padStart(2, "0")}h</div>
          <div>{minutes.toString().padStart(2, "0")}m</div>
          <div>{seconds.toString().padStart(2, "0")}s</div>
        </div>
      </div>

      {/* Horizontal Scroll Products */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All */}
      <div className="text-center mt-8">
        <Button className="bg-[#007589] p-5">
          <Link href="/flash-sales" className=" font-semibold">
            View All Products
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default FlashSales;
