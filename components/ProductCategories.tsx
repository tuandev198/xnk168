"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

type Category = {
  title: string;
  count: number;
  image: string;
};

const categories: Category[] = [
  {
    title: "SALE",
    count: 60,
    image: "/images/1.png",
  },
  {
    title: "Thịt",
    count: 79,
    image: "/images/2.png",
  },
  {
    title: "Cá - Hải sản",
    count: 43,
    image: "/images/3.png",
  },
  {
    title: "Đồ khô",
    count: 201,
    image: "/images/4.png",
  },
  {
    title: "Gia vị",
    count: 165,
    image: "/images/5.png",
  },
  {
    title: "Bánh kẹo",
    count: 82,
    image: "/images/6.png",
  },
];

export default function ProductSlider() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 3,
      spacing: 16,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 5, spacing: 24 },
      },
    },
  });

  return (
    <div className="w-full px-4">
      <h2 className="text-2xl font-bold text-center text-[#0061ff] mb-6">
        PRODUCT LIST
      </h2>
      <div ref={sliderRef} className="keen-slider">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="keen-slider__slide bg-[#f8f7f1] rounded-xl shadow p-4 text-center flex flex-col items-center "
          >
            <div className="w-24 h-24 mb-4 relative">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-contain"
              />
            </div>
            <p className="font-semibold text-lg">{cat.title}</p>
            <p className="text-sm text-gray-500">{cat.count} mặt hàng</p>
          </div>
        ))}
      </div>
    </div>
  );
}
