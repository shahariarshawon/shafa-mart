"use client";
import { useState } from "react";
import Link from "next/link";
import ProductCard from "../ui/productCard";
import { Button } from "../ui/button";
import { useProducts } from "@/hooks/useProducts";

const ExploreProducts = () => {
  const { products } = useProducts();
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007589]">
            Explore Our Products
          </h2>
        </div>

        {/* Product Grid */}
        <div
          className="
            grid 
            grid-cols-1 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-4 
          "
        >
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* View All Button */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-10 md:mt-14">
            <Link href="/products">
              <Button className="bg-[#007589] hover:bg-[#005f6d] px-6 py-5 text-white font-semibold transition">
                View All Products
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExploreProducts;
