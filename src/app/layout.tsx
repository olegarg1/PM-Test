import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Outfit, Urbanist } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-hero",
});

export const metadata: Metadata = {
  title: "PM-Test",
  description: "Next.js App Router project with TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${urbanist.variable} ${outfit.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
