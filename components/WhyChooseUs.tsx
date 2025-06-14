"use client";

import Image from "next/image";
import { FaDollarSign, FaUtensils, FaCheckCircle } from "react-icons/fa";

const benefits = [
  {
    icon: <FaDollarSign size={24} />,
    title: "Affordable Prices",
    desc: "Committed to providing products with traceable and controlled quality.",
  },
  {
    icon: <FaUtensils size={24} />,
    title: "Exquisite Flavor",
    desc: "Ingredients are carefully selected at their freshest stage.",
  },
  {
    icon: <FaCheckCircle size={24} />,
    title: "High-Quality Products",
    desc: "Guaranteeing strictly controlled and traceable product origins.",
  },
];


const WhyChooseUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-stretch bg-white">
      {/* Left content */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h2 className="text-3xl font-bold text-[#0061ff] uppercase mb-4">
          Why choose us?
        </h2>
        <p className="text-gray-700 mb-6">
          With dedicated artisans and talented staff along with inspiring baking stories, Binh Vinh is the choice for those who are passionately in love with the taste of delicious dishes.
        </p>

        <ul className="space-y-6">
          {benefits.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="bg-[#0061ff] text-white p-3 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">{item.title}</h4>
                <p className="text-sm text-gray-700">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-96 md:h-auto overflow-hidden">
        <Image
          src="/images/slide.jpg" // thay bằng ảnh bạn muốn
          alt="Why Choose Us"
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1/4 border-l border-white/70"></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
