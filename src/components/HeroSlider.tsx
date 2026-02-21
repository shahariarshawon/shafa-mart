"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    id: 1,
    title: "Summer Collection 2026",
    description: "Up to 60% off on selected items",
    image: "/banner/shafaMartBanner1.webp",
    link: "/shop",
  },
  {
    id: 2,
    title: "New Arrivals",
    description: "Discover the latest trends",
    image: "/banner/shafaMartBanner2.webp",
    link: "/shop",
  },
  {
    id: 3,
    title: "Exclusive Deals",
    description: "Limited time special offers",
    image: "/banner/shafaMartBanner3.webp",
    link: "/shop",
  },
  {
    id: 4,
    title: "Premium Collection",
    description: "Shop our luxury items",
    image: "/banner/shafaMartBanner4.webp",
    link: "/shop",
  },
];

const HeroSlider = () => {
  return (
    <section className="w-full">
      <Carousel
        opts={{ loop: true }}
        plugins={[Autoplay({ delay: 4000 })]}
        className="relative"
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="basis-full">
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] ">
                {/* Background Image */}
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-start px-6 md:px-16 text-white max-w-2xl">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>

                  <p className="mb-6 text-lg">{slide.description}</p>

                  <Link href={slide.link}>
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-gray-200 hover:cursor-pointer"
                    >
                      Shop Now
                    </Button>
                  </Link>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Arrows */}
        <CarouselPrevious className="left-6" />
        <CarouselNext className="right-6" />
      </Carousel>
    </section>
  );
};

export default HeroSlider;
