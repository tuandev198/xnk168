import React from "react";
import Image from "next/image";

interface HomeBannerProps {
  image: string;
}

const HomeBanner: React.FC<HomeBannerProps> = ({ image }) => {
  if (!image) return null;

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        marginTop: "0px",
        marginBottom: "0px",
        paddingTop: "90px",
        paddingBottom: "90px",
        backgroundAttachment: "fixed",
        backgroundRepeat: "repeat",
        backgroundPosition: "50% 30px",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full h-[300px] relative">
        <Image
          src={image}
          alt="Banner chính"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
