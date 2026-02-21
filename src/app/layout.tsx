import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import UpperNavbar from "@/components/UpperNavbar";

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
        <div className="">
          <UpperNavbar />
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
