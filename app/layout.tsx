import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb was built with Next.js",
};

const font = Nunito({
  subsets: ["latin"],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
