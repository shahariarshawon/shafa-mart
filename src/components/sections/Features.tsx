"use client";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      title: "Free and Fast Delivery",
      description: "Free delivery for all orders over $140.",
      image: "/features/delivery.png",
    },
    {
      title: "24/7 Customer Service",
      description: "Friendly 24/7 customer support.",
      image: "/features/support.png",
    },
    {
      title: "Money Back Guarantee",
      description: "We return money within 30 days.",
      image: "/features/moneyback.png",
    },
  ];

  return (
    <section className="py-16 mb-10">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-4 p-6 rounded-lg transition"
            >
              <div className="w-20 h-20 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg md:text-xl font-bold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
