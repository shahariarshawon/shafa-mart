"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <div
            key={product.id}
            className="min-w-[250px] bg-white border rounded-lg shadow-sm hover:shadow-lg transition group relative"
          >
            {/* Image Section */}
            <div className="relative">
              {/* Discount Badge */}
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
              </span>

              <Image
                src={product.image}
                alt={product.title}
                width={250}
                height={250}
                className="w-full h-56 object-cover rounded-t-lg"
              />

              {/* Hover Add To Cart */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                <Button className="bg-white text-black hover:bg-gray-200">
                  Add To Cart
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-medium mb-2 line-clamp-2">
                {product.title}
              </h3>

              {/* Price */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-red-600 font-bold">${product.price}</span>
                <span className="text-gray-400 line-through text-sm">
                  ${product.oldPrice}
                </span>
              </div>

              {/* Ratings */}
              <div className="flex items-center gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < product.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-gray-500 ml-2">({product.reviews})</span>
                {/* Wishlist */}
                <Heart className="absolute top-3 right-3 w-6 h-6 bg-white p-1 rounded-full shadow cursor-pointer hover:text-red-500 transition" />
              </div>
            </div>
          </div>
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
