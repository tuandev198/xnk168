import React from "react";
import Image from "next/image";

interface HomeBannerProps {
  image: string;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ image }) => {
  if (!image) return null;

  return (
    <div className="w-full h-[300px] overflow-hidden"> {/* 👈 Chiều cao ép nhỏ */}
      <Image
        src={image}
        alt="Banner chính"
        width={1920}
        height={350} // 👈 Tỷ lệ khớp với chiều cao
        priority
        sizes="100vw"
        className="w-full h-full object-fill" // 👈 object-fill ép ảnh vừa khít cả chiều rộng và cao
      />
    </div>
  );
};

export default HomeBanner;
