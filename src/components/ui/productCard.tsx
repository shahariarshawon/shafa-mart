"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./button";
import { Heart, Star } from "lucide-react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <div
        key={product.id}
        className="min-w-[250px] bg-white border rounded-lg shadow-sm hover:shadow-lg transition group relative"
      >
        {/* Image Section */}
        <div className="relative">
          {/* Discount Badge */}
          {product.discount && (
            <span className="absolute top-3 left-3 bg-red-600 text-white text-xs px-2 py-1 rounded">
              -{product.discount}%
            </span>
          )}

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
    </div>
  );
};

export default ProductCard;
