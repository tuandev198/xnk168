// components/Logo.tsx
import { cn } from "@/lib/utils";
import React from "react";

interface LogoProps {
  className?: string;
  spanDesign?: string;
}

const Logo: React.FC<LogoProps> = ({ spanDesign }) => {
  return (
      <span>
        <span className={cn("text-primary", spanDesign)}>168</span>
      </span>
  );
};

export default Logo;
