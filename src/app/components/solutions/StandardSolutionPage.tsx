import type { CloneAppTemplateConfig } from "./CloneAppTemplate";

type StandardSolutionOptions = {
  eyebrow: string;
  title: string;
  lead: string;
  primaryCta?: string;
  secondaryCta?: string;
  overview: readonly [string, string];
  metrics: readonly (readonly [string, string])[];
  features: CloneAppTemplateConfig["features"];
  modules: CloneAppTemplateConfig["modules"];
  technologyLead: string;
  technologyTags: readonly string[];
  process: CloneAppTemplateConfig["process"];
  cta: CloneAppTemplateConfig["cta"];
  heroImage?: string;
  heroImageAlt?: string;
  technologyImage?: string;
  technologyImageAlt?: string;
  detailSections?: CloneAppTemplateConfig["detailSections"];
  faqTitle?: string;
  faqs?: CloneAppTemplateConfig["faqs"];
};

const defaultImages = {
  heroImage: "/solutions/talabat/talabat.png",
  heroImageAlt: "Mobile application interfaces displayed on phone mockups",
  technologyImage: "/solutions/talabat/ teck-stacks .png",
  technologyImageAlt: "Modern application technology stack",
} as const;

export function createStandardSolutionConfig(options: StandardSolutionOptions): CloneAppTemplateConfig {
  return {
    ...defaultImages,
    primaryCta: "Book a Free Consultation",
    secondaryCta: "Explore the platform",
    ...options,
  };
}
