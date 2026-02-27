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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getToken } from "@/lib/token";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "/contact" },
  { name: "About", href: "/about" },
];

const Header = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = getToken();
    setIsLoggedIn(!!token);
  }, []);

  return (
    <nav className="border-b bg-white shrink-0">
      <div className="max-w-7xl px-6 mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* LEFT — LOGO */}
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
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
          </Link>

          {/* CENTER — NAV LINKS */}
          <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link href={item.href} key={item.name}>
                  <li className="relative group cursor-pointer">
                    <span
                      className={`transition-colors duration-200
                        ${isActive ? "text-[#009587]" : "text-foreground"}
                        group-hover:text-[#009587]`}
                    >
                      {item.name}
                    </span>

                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] bg-[#009587] transition-all duration-300
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </li>
                </Link>
              );
            })}
          </ul>

          {/* RIGHT — ACTIONS */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="hidden sm:flex items-center border rounded-md px-2 shadow-sm">
              <Search className="w-4 h-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search..."
                className="px-2 py-1 text-sm outline-none bg-transparent"
              />
            </div>

            {/* AUTH CONDITIONAL UI */}
            {!isLoggedIn ? (
              // 🔐 NOT LOGGED IN
              <Link href="/login">
                <Button size="sm" className="bg-[#009587] hover:bg-[#007f73]">
                  Login
                </Button>
              </Link>
            ) : (
              // ✅ LOGGED IN
              <>
                <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition" />
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-[#009587] transition" />

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
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
