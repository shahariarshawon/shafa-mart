import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShaFa Mart",
  description:
    "ShaFa Mart is a one-stop destination for all your grocery needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl p-4 mx-auto">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
