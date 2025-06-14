"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { client } from "@/sanity/lib/client";
import { Product } from "@/sanity.types";
import Container from "./Container";
import Title from "./Title";
import ProductCard from "./ProductCard";
import NoProductAvailable from "./NoProductAvailable";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

// ✅ Define props
interface ProductCollectionProps {
  cx: string;
  ct: string;
  title: string;
}

const ProductCollection = ({ cx, ct, title }: ProductCollectionProps) => {
  const tabs = [cx, ct];
  const [selectedTab, setSelectedTab] = useState<string>(cx);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // ✅ Fetch product data
  useEffect(() => {
    const query = `*[_type == "product" && variant == $variant ] | order(name asc){
      ...,
      "categories": categories[]->title,
      "image": image{asset->{url}},
      "slug": slug
    }`;

    const params = { variant: selectedTab };

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (err) {
        console.error("Error loading products", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedTab]);

  return (
    <Container className="py-10">
      <Title className="text-center text-4xl text-[#7B3F00] font-bold">
        {title}
      </Title>
      <p className="text-center mt-2 text-gray-500">
        Pellentesque massa placerat duis ultricies lacus sit sed.
      </p>

      {/* Tabs */}
      <div className="flex justify-center items-center gap-6 mt-6">
        {tabs.map((tab) => (
          <button
            key={tab}
            aria-pressed={tab === selectedTab}
            className={clsx(
              "px-6 py-2 rounded-full font-medium shadow transition-all duration-300",
              tab === selectedTab
                ? "bg-yellow-500 text-white shadow-md"
                : "border border-yellow-700 text-yellow-800 hover:bg-yellow-100"
            )}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading ? (
        <div className="flex justify-center items-center py-16">
          <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
          <span className="ml-2">Loading...</span>
        </div>
      ) : products.length ? (
        <>
          {/* Swiper */}
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
            className="mt-10"
          >
            {products.map((product) => (
              <SwiperSlide key={product._id} className="px-2">
                <motion.div
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* See All */}
          {products.length > 5 && (
            <div className="text-center mt-8">
              <Link
                href={`/shop?variant=${encodeURIComponent(selectedTab)}`}
                className="inline-block bg-[#0061ff] text-white py-2 px-5 rounded-full hover:bg-green-600 transition duration-300"
              >
                See All
              </Link>
            </div>
          )}
        </>
      ) : (
        <NoProductAvailable selectedTab={selectedTab} />
      )}
    </Container>
  );
};

export default ProductCollection;
