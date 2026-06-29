import type { Metadata } from "next";
import { ServicesPage } from "../components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Our Services | Digital Marketing, App Development & SEO Agency in Dubai - Webtek Digital",
  description:
    "Explore Webtek Digital's full range of services in Dubai - app development, SEO, Google Ads, social media, content marketing, digital PR, programmatic & outdoor advertising. Get a free consultation.",
  keywords: [
    "digital marketing and app development services in Dubai",
    "digital marketing agency in Dubai",
    "digital marketing and app development company Dubai",
    "full-service digital agency UAE",
    "digital marketing services Dubai",
  ],
};

export default function Page() {
  return <ServicesPage />;
}
