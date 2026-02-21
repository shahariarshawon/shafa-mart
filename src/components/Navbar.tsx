"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="border-b bg-white">
      <div className="sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT — LOGO */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Image
              src="/navlogo.apng"
              alt="Shafa Mart Logo"
              width={40}
              height={40}
              priority
            />
            <span className="text-xl font-bold tracking-tight">
              <span className="text-[#009587]">ShaFa</span>{" "}
              <span className="text-[#ff9802]">Mart</span>
            </span>
          </div>

          {/* CENTER — NAV LINKS */}
          <ul className="hidden md:hidden lg:flex items-center gap-8 text-sm font-medium">
            {["Home", "Contact", "About", "Signup"].map((item) => (
              <li key={item} className="relative group cursor-pointer">
                <span className="transition-colors duration-200 group-hover:text-[#009587]">
                  {item}
                </span>

                {/* Animated underline */}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#009587] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT — ACTIONS */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden sm:flex items-center border rounded-md px-2 shadow-lg">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 text-sm outline-none bg-transparent"
              />
            </div>

            {/* Heart */}
            <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition" />

            {/* Cart */}
            <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#009587] transition" />

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <User className="w-5 h-5 cursor-pointer hover:text-[#009587] transition" />
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Manage My Account</DropdownMenuItem>
                <DropdownMenuItem>My Orders</DropdownMenuItem>
                <DropdownMenuItem>My Cancellations</DropdownMenuItem>
                <DropdownMenuItem>My Reviews</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
