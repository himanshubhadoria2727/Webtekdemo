import type { Metadata } from "next";
import { HomePage } from "./components/home/HomePage";

export const metadata: Metadata = {
  title: "App Development & Digital Marketing Company in Dubai | Webtek Digital",
  description:
    "Webtek Digital is a leading app development company in Dubai, offering Android and iOS apps, Google Ads management, and content marketing services.",
};

export default function Page() {
  return <HomePage />;
}
