import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import Link from "next/link";
// import AddToCartButton from "./AddToCartButton";
import ProductSideMenu from "./ProductSideMenu";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02] w-full max-w-[200px]">
      <Link href={`/product/${product?.slug?.current}`}>
        {/* Container có aspect-square để luôn vuông */}
        <div className="relative aspect-square w-full">
          <Image
            src={urlFor(product.images?.[0]).url()}
            alt={product.name || "productImage"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </Link>

      {/* Tên sản phẩm */}
      <div className="p-2">
        <div className="text-sm sm:text-base font-semibold text-[#7f2a0c] line-clamp-2">
          {product.name}
        </div>
      </div>

      <ProductSideMenu product={product} />
    </div>
  );
};


export default ProductCard;
