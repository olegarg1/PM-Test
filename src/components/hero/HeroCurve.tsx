import { HeroCurveProps } from "@/types/hero";
import Image from "next/image";

/**
 * HeroCurve Component - Displays curved background with content overlay
 */

export default function HeroCurve({ children }: HeroCurveProps) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-[17%] md:h-[20%]  lg:h-[29%]">
      {/* Background SVG Image */}
      <Image
        src="/rectangle.svg"
        alt=""
        fill
        className="object-cover object-bottom z-20"
        priority
      />

      {/* Cards positioned on top */}
      {children && (
        <div className="absolute bottom-0 md:bottom-[7%] lg:bottom-[26%] left-0 w-full z-30">
          {children}
        </div>
      )}
    </div>
  );
}
