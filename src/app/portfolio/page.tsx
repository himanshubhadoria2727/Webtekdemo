import type { Metadata } from "next";
import { PortfolioPage } from "../components/portfolio/PortfolioPage";

export const metadata: Metadata = {
  title: "Portfolio | Webtek Digital",
  description: "Explore selected digital strategy, website, app, branding and growth work from Webtek Digital.",
};

export default function Page() { return <PortfolioPage />; }
