import type { Metadata } from "next";
import { HomePage } from "./components/home/HomePage";

export const metadata: Metadata = {
  title: "Digital Marketing & App Development Dubai | Webtek Digital",
  description:
    "Webtek Digital builds Android and iOS apps, manages Google Ads, SEO, content marketing and digital growth campaigns for Dubai businesses.",
};

export default function Page() {
  return <HomePage />;
}
