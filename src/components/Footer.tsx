"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* 1️⃣ Brand + Subscribe */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">ShaFa Mart</h2>
          <p className="text-sm mb-4">Subscribe</p>
          <p className="text-sm mb-4">Get 10% off your first order</p>

          <div className="flex items-center border border-gray-600 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent px-3 py-2 text-sm w-full outline-none"
            />
            <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-gray-200 transition hover:cursor-pointer">
              Submit
            </button>
          </div>
        </div>

        {/* 2️⃣ Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>Sector 4, Uttara, Dhaka-1230</li>
            <li>support@shafamart.com</li>
            <li>+880 1518 935876</li>
          </ul>
        </div>

        {/* 3️⃣ Account */}
        <div>
          <h3 className="text-white font-semibold mb-4">Account</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                My Account
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                Login / Register
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                Cart
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                Shop
              </Link>
            </li>
          </ul>
        </div>

        {/* 4️⃣ Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-[#009587] transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* 5️⃣ Download App */}
        <div>
          <h3 className="text-white font-semibold mb-4">Download App</h3>

          <div className="flex gap-4 items-start">
            {/* QR Code */}
            <Image src="/qrcode.png" alt="QR Code" width={80} height={80} />

            <div className="flex flex-col gap-2">
              <Image
                src="/playStore.png"
                alt="Google Play"
                width={120}
                height={40}
              />
              <Image
                src="/appStore.png"
                alt="App Store"
                width={120}
                height={40}
              />
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-5 mt-5">
            <Facebook className="w-6 h-6 hover:text-white cursor-pointer transition" />
            <Instagram className="w-6 h-6 hover:text-white cursor-pointer transition" />
            <Linkedin className="w-6 h-6 hover:text-white cursor-pointer transition" />
            <Twitter className="w-6 h-6 hover:text-white cursor-pointer transition" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
        © 2026 Shahariar Arafat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
