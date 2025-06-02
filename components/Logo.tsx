// components/Logo.tsx
import { cn } from "@/lib/utils";
import React from "react";

import Image from "next/image";

interface LogoProps {
  className?: string;
  spanDesign?: string;
}

const Logo: React.FC<LogoProps> = ({ spanDesign }) => {
  return (
      <span>
        <span className={cn("text-primary", spanDesign)}>
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </span>
      </span>
  );
};

export default Logo;
