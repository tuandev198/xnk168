import { Product } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";
import Link from "next/link";
// import AddToCartButton from "./AddToCartButton";
import ProductSideMenu from "./ProductSideMenu";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <Link href={`/product/${product?.slug?.current}`}>
        <div className="w-full h-32 sm:h-40 md:h-48 relative">
          <Image
            src={urlFor(product.images?.[0]).url()}
            alt={product.name || "productImage"}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        </div>
      </Link>

      <div className="p-3 flex flex-col gap-2">
        <div className="text-sm sm:text-base font-semibold text-[#7f2a0c] line-clamp-2">
          {product.name}
        </div>

      </div>

      {/* Tuỳ chọn: Hiển thị menu popup bên góc sản phẩm */}
      <ProductSideMenu product={product} />
    </div>
  );
};

export default ProductCard;
