"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { motion, AnimatePresence } from "framer-motion";
import { client } from "@/sanity/lib/client";
import NoProductAvailable from "./NoProductAvailable";
import { Loader2 } from "lucide-react";
import Container from "./Container";
import { Product } from "@/sanity.types";
import Title from "./Title";
import Link from "next/link";

const ProductCollection = ({ cx }: { cx: string }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const query = `*[_type == "product" && variant == $variant ] | order(name asc){
      ...,
      "categories": categories[]->title
    }`;
    const params = { variant: cx };

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(response);
      } catch (error) {
        console.error("Product fetching error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cx]);

  return (
    <Container className="flex flex-col lg:px-0 my-10">
      <Title className="text-[#0061ff]">{cx.toUpperCase()}</Title>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10">
          <motion.div className="flex items-center space-x-2 text-blue-600">
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Product is loading...</span>
          </motion.div>
        </div>
      ) : products.length ? (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 mt-10">
            <AnimatePresence>
              {products.map((product) => (
                <motion.div
                  key={product._id}
                  layout
                  initial={{ opacity: 0.2 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center mt-6">
            <Link
                href={`/shop?variant=${encodeURIComponent(cx)}`}
                className="bg-[#0061ff] text-white py-2 px-4 rounded-full hover:bg-green-700 transition inline-block"
            >
                See all
            </Link>
</div>
        </>
      ) : (
        <NoProductAvailable selectedTab={cx} />
      )}
    </Container>
  );
};

export default ProductCollection;
