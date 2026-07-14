import type { Metadata } from "next";
import { AboutPage } from "../components/about/AboutPage";

export const metadata: Metadata = {
  title: "About Webtek Digital | Digital Marketing Agency in Dubai",
  description:
    "Meet Webtek Digital, a Dubai digital marketing agency helping businesses grow through app development, SEO, paid ads, content and analytics.",
};

export default function Page() {
  return <AboutPage />;
}
