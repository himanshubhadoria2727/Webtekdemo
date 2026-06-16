import type { Metadata } from "next";
import { Sora } from "next/font/google";
import { RouteShell } from "./components/navigation/RouteShell";
import "./globals.css";

const bodyFont = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
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
      <body>
        <RouteShell>{children}</RouteShell>
      </body>
    </html>
  );
}
