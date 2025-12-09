import { Inter, Outfit, Urbanist } from "next/font/google";

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
});

export const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-hero",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-inter",
});
