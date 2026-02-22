"use client";
import Image from "next/image";
import Link from "next/link";

const NewArrival = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#007589] mb-10">
          New Arrivals
        </h2>

        {/* Main Grid */}
        <div className="lg:flex lg:gap-8 flex-col lg:flex-row">
          {/* LEFT BIG IMAGE */}
          <div className="relative w-full lg:w-[570px] h-[400px] lg:h-[600px] group overflow-hidden rounded-lg mb-6 lg:mb-0">
            <Image
              src="/newArrival/ps5.jpg"
              alt="Playstation 5"
              fill
              className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">PlayStation 5</h3>
              <p className="text-sm mb-4">
                Black and White version of the PS5 coming out on sale.
              </p>
              <Link href="/products" className="underline font-medium">
                Shop Now
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex-1 flex flex-col gap-6">
            {/* TOP RIGHT */}
            <div className="relative w-full h-[200px] lg:h-[284px] group overflow-hidden rounded-lg">
              <Image
                src="/newArrival/hatWoman.png"
                alt="Women's Collection"
                fill
                className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Women’s Collection</h3>
                <p className="text-sm mb-3">
                  Featured collections that give you another vibe.
                </p>
                <Link href="/products" className="underline font-medium">
                  Shop Now
                </Link>
              </div>
            </div>

            {/* BOTTOM SPLIT */}
            <div className="flex gap-6 flex-col sm:flex-row">
              {/* Speakers */}
              <div className="relative w-full sm:w-[310px] h-[200px] lg:h-[284px] group overflow-hidden rounded-lg">
                <Image
                  src="/newArrival/speaker.png"
                  alt="Speakers"
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Speakers</h3>
                  <Link href="/products" className="underline text-sm">
                    Shop Now
                  </Link>
                </div>
              </div>

              {/* Perfume */}
              <div className="relative w-full sm:w-[310px] h-[200px] lg:h-[284px] group overflow-hidden rounded-lg">
                <Image
                  src="/newArrival/perfume.png"
                  alt="Perfume"
                  fill
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-lg font-bold mb-2">Perfume</h3>
                  <Link href="/products" className="underline text-sm">
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
