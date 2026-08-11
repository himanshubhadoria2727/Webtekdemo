import type { Metadata } from "next";
import { ContactPage } from "../components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Webtek Digital | Digital Agency in Dubai",
  description:
    "Talk to Webtek Digital about websites, mobile apps, SEO, paid media, branding and content. Book a free consultation with our Dubai team.",
};

export default function Page() {
  return <ContactPage />;
}
