import Header from "@/components/header/Header";
import { inter, outfit, urbanist } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

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
      <body
        className={`${urbanist.variable} ${outfit.variable} ${inter.variable}`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
