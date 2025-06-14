"use client";

import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "QUẾ",
    img: "/images/QUE.jpg",
    href: "/san-pham/que",
  },
  {
    title: "ỚT HIỂM",
    img: "/images/OT.jpg",
    href: "/san-pham/ot-hiem",
  },
  {
    title: "BÔNG HỒI",
    img: "/images/HOAHOI.jpg",
    href: "/san-pham/bong-hoi",
  },
  {
    title: "THẢO QUẢ",
    img: "/images/THAOQUA.jpg",
    href: "/san-pham/thao-qua",
  },
];

const ProductCategories = () => {
  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#0061ff] mb-8 uppercase">
        Product Catalog
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 px-2 sm:px-4 md:px-10">
        {categories.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="overflow-hidden rounded-xl shadow-md block transition-transform hover:scale-[1.02]"
          >
            <div className="w-full h-32 sm:h-40 md:h-48 relative">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover rounded-t-xl"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="py-2 text-sm sm:text-base font-semibold text-gray-700">
              {item.title}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductCategories;
