"use client";
import Link from "next/link";
import ProductCard from "../ui/productCard";
import { Button } from "../ui/button";

const products = [
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

const BestSelling = () => (
  <section className="py-14 relative">
    {/* Header */}
    <div className="flex justify-between items-center mb-8 px-4 sm:px-0">
      <h2 className="text-2xl md:text-3xl font-bold text-[#007589]">
        Best Selling Products
      </h2>

      <Button className="bg-[#007589] p-5">
        <Link href="/flash-sales" className=" font-semibold">
          View All Products
        </Link>
      </Button>
    </div>

    {/* Product Cards */}
    <div className="flex gap-6 overflow-x-auto scroll-smooth px-4 sm:px-0">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </section>
);

export default BestSelling;
