import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarDays,
  Users,
  Sparkles,
  Store,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";

const cards = [
  {
    title: "Why Choose Us",
    description:
      "We deliver a reliable, secure, and scalable shopping experience. From verified sellers to secure payments, everything is optimized for trust and speed.",
    icon: ShieldCheck,
  },
  {
    title: "Our Vision",
    description:
      "To build a next-gen digital marketplace where quality products, fair pricing, and seamless logistics come together in one unified ecosystem.",
    icon: Store,
  },
  {
    title: "Our Team",
    description:
      "A dedicated team of engineers, designers, and operators focused on building high-performance commerce systems that scale globally.",
    icon: Users,
  },
];
const About = () => {
  return (
    <section className=" flex flex-col gap-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Text */}
        <div className="flex-1">
          <h2 className="text-sm uppercase font-semibold pt-5">About Us</h2>

          <h3 className="text-4xl md:text-5xl font-bold leading-tight py-5">
            Building a Scalable{" "}
            <span className="text-primary">E-Commerce Ecosystem</span>
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            We are a modern e-commerce platform designed to simplify buying and
            selling at scale. Our infrastructure is built for performance,
            security, and growth — enabling customers and merchants to operate
            in a frictionless digital marketplace.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            From product discovery to delivery, every layer of the platform is
            engineered to optimize speed, reliability, and user experience.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/about1.webp"
            alt="E-commerce platform"
            width={420}
            height={420}
            className="rounded-xl object-cover"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
        {cards.map((item, i) => (
          <Card key={i} className="border shadow-sm transition hover:shadow-xl">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground leading-relaxed">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;
