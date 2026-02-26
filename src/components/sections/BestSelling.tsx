"use client";
import Link from "next/link";
import ProductCard from "../ui/productCard";
import { Button } from "../ui/button";
import { useProducts } from "@/hooks/useProducts";
import { TProduct } from "@/types/product";

const BestSelling = () => {
  const { products } = useProducts();
  console.log(products);
  return (
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
        {products.map((product: TProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
