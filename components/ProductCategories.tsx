"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useLanguage } from "../context/LanguageContext"; // ✅ Thêm
import "swiper/css";
import "swiper/css/navigation";

const categories = [
  { key: "que", img: "/images/QUE.jpg", href: "/shop?=que" },
  { key: "ot", img: "/images/OT.jpg", href: "/shop?=ot-hiem" },
  { key: "hoahoi", img: "/images/HOAHOI.jpg", href: "/shop?=bong-hoi" },
  { key: "thaoqua", img: "/images/THAOQUA.jpg", href: "/shop?=thao-qua" },
  { key: "sa", img: "/images/sa.jpg", href: "/shop?=sa" },
  { key: "lachuoi", img: "/images/lachuoi.jpg", href: "/shop?=lachuoi" },
  { key: "mia", img: "/images/mia.jpg", href: "/shop?=mia" },
  { key: "bun", img: "/images/bun.jpg", href: "/shop?=bun" },
  { key: "banhtrang", img: "/images/banhtrang.jpg", href: "/shop?=banhtrang" },
  { key: "chanhday", img: "/images/chanhday.jpg", href: "/shop?=chanhday" },
];

const ProductCategories = () => {
  const { dictionary } = useLanguage(); // ✅ Lấy dữ liệu ngôn ngữ

  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0061ff] mb-8 uppercase">
        {dictionary.product_catalog}
      </h2>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="swiper-container"
        aria-label="Product categories carousel"
      >
        {categories.map((item) => (
          <SwiperSlide key={item.href}>
            <Link
              href={item.href}
              className="overflow-hidden rounded-xl shadow-md block transition-transform hover:scale-[1.02]"
            >
              <div className="w-full h-32 sm:h-40 md:h-48 relative">
                <Image
                  src={item.img}
                  alt={`Product: ${dictionary.categories[item.key]}`}
                  fill
                  className="object-cover rounded-t-xl"
                  sizes="(max-width: 768px) 50vw, 25vw"
                  priority
                />
              </div>
              <div className="py-2 text-sm sm:text-base font-semibold text-gray-700">
                {dictionary.categories[item.key]}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductCategories;
