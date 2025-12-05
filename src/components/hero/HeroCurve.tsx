import { HeroCurveProps } from "@/types/hero";

export default function HeroCurve({
  leftTop = 55,
  rightTop = 50,
  midPoint1 = 45,
  midPoint2 = -62,
  viewBoxHeight = 190,
  fillColor = "#FFFFFF",
  className = "absolute bottom-0 left-0 w-full z-20",
}: HeroCurveProps) {
  const path = `M0,${leftTop} C200,${midPoint1} 1000,${midPoint2} 1440,${rightTop} L1440,${viewBoxHeight} L0,${viewBoxHeight} Z`;

  return (
    <svg
      className={className}
      viewBox={`0 0 1440 ${viewBoxHeight}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path fill={fillColor} d={path} />
    </svg>
  );
}
