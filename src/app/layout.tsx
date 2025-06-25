import type { Metadata } from "next";
import { Comfortaa, Geist_Mono } from "next/font/google";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhuvaneshwaran M",
  description: "Portfolio for Bhuvanesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comfortaa.className} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
