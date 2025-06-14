"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const products = [
  {
    name: "Nutmeg",
    price: 199,
    oldPrice: 405,
    img: "/images/HOAHOI.jpg",
    sale: true,
  },
  {
    name: "Sesame Seeds",
    price: 289,
    img: "/images/THAOQUA.jpg",
  },
  {
    name: "Red Paprika",
    price: 969,
    oldPrice: 1000,
    img: "/images/THAOQUA.jpg",
    sale: true,
  },
  {
    name: "Dill Seeds",
    price: 289,
    img: "/images/THAOQUA.jpg",
  },
  {
    name: "Coriander",
    price: 197,
    oldPrice: 300,
    img: "/images/THAOQUA.jpg",
    sale: true,
  },
  {
    name: "Red Paprika",
    price: 969,
    oldPrice: 1000,
    img: "/images/THAOQUA.jpg",
    sale: true,
  },
  {
    name: "Dill Seeds",
    price: 289,
    img: "/images/THAOQUA.jpg",
  },
  {
    name: "Coriander",
    price: 197,
    oldPrice: 300,
    img: "/images/THAOQUA.jpg",
    sale: true,
  },
];

const BestProductsSlider = () => {
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
        <h2 className="text-4xl font-bold text-orange-900">Best Products</h2>
        <p className="text-gray-600 mt-2">
          Pellentesque massa placerat duis ultricies lacus sit sed.
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <button className="bg-yellow-500 text-white font-semibold px-6 py-2 rounded-full shadow-md">
            Dried seeds
          </button>
          <button className="border border-orange-900 text-orange-900 font-semibold px-6 py-2 rounded-full">
            Spicy Masalas
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={20}
        slidesPerView={2} // Default for mobile
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        className="px-4"
      >
        {products.map((item, idx) => (
          <SwiperSlide key={idx}>
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
                  Sale
                </span>
              )}
              <Image
                src={item.img}
                alt={item.name}
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-lg text-orange-900">{item.name}</h3>
              <div className="text-black font-semibold">
            
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BestProductsSlider;
