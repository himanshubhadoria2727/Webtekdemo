import type { Metadata } from "next";
import { SolutionsPage } from "../components/solutions/SolutionsPage";

export const metadata: Metadata = {
  title: "App Development Solutions for Grocery, E-Commerce, Delivery & More | Webtek Digital",
  description:
    "Explore Webtek Digital's app development solutions - clone apps, service apps, e-commerce platforms, and health & beauty booking apps built for businesses in Dubai and the UAE.",
  keywords: [
    "clone app development Dubai",
    "on-demand app development",
    "service app development UAE",
    "e-commerce app development Dubai",
    "healthcare and beauty app solutions",
  ],
};

export default function Page() {
  return <SolutionsPage />;
}
