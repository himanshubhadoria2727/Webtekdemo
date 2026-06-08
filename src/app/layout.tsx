import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

const bodyFont = Sora({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webtek Digital",
  description: "Creative digital studio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={bodyFont.variable}>
      <body>{children}</body>
    </html>
  );
}
