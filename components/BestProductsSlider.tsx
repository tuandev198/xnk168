"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const BestProductsSlider = () => {
  const { dictionary } = useLanguage();
  const data = dictionary.bestProducts;

  return (
    <section
      style={{
        marginTop: "0px",
        marginBottom: "0px",
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundImage: "url('/images/background.jpg')",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat",
        backgroundPosition: "50% 30px",
        backgroundSize: "cover",
      }}
    >
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl font-bold text-orange-900">{data.title}</h2>
        <p className="text-gray-600 mt-2">{data.description}</p>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        className="px-4"
      >
        {data.products.map((item, idx) => (
          <SwiperSlide key={idx}>
            <Link href={item.link || "#"}>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow p-4 text-center relative cursor-pointer"
              >
                {item.sale && (
                  <span className="absolute top-2 left-2 bg-orange-900 text-white text-xs px-2 py-1 rounded-full">
                    {data.saleLabel}
                  </span>
                )}
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="mx-auto mb-4"
                />
                <h3 className="font-bold text-lg text-orange-900">{item.name}</h3>
              </motion.div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestProductsSlider;
