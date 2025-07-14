"use client";

import Image from "next/image";
import { FaDollarSign, FaUtensils, FaCheckCircle } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

const iconComponents = [FaDollarSign, FaUtensils, FaCheckCircle];

const WhyChooseUs = () => {
  const { dictionary } = useLanguage();
  const benefits = dictionary.whyChooseUs.benefits;

  return (
    <section
      aria-labelledby="why-choose-us-title"
      className="flex flex-col md:flex-row items-stretch bg-white"
    >
      {/* Left content */}
      <div className="w-full md:w-1/2 p-8 md:p-12">
        <h2
          id="why-choose-us-title"
          className="text-3xl font-bold text-[#0061ff] uppercase mb-4"
        >
          {dictionary.whyChooseUs.title}
        </h2>
        <p className="text-gray-700 mb-6">{dictionary.whyChooseUs.description}</p>

        <ul className="space-y-6">
          {benefits.map((item, index) => {
            const Icon = iconComponents[index];
            return (
              <li key={index} className="flex items-start gap-4">
                <div
                  className="bg-[#0061ff] text-white p-3 rounded-full flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon size={24} />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-700">{item.desc}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Right image */}
      <div className="w-full md:w-1/2 relative h-96 md:h-auto overflow-hidden">
        <Image
          src="/images/slide.jpg"
          alt={dictionary.whyChooseUs.title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 flex">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`w-1/4 border-l border-white/70 ${
                i === 0 ? "border-l-0" : ""
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
