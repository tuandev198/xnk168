import React from "react";
import Image from "next/image";

interface HomeBannerProps {
  image: string;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ image }) => {
  if (!image) return null;

  return (
    <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96">
      <Image
        src={image}
        alt="Banner chính"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
    </div>
  );
};

export default HomeBanner;
