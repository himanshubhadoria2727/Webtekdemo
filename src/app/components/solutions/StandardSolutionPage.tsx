import type { CloneAppTemplateConfig } from "./CloneAppTemplate";

type StandardSolutionOptions = {
  eyebrow: string;
  title: string;
  lead: string;
  overview: readonly [string, string];
  metrics: readonly (readonly [string, string])[];
  features: readonly (readonly [string, string])[];
  modules: CloneAppTemplateConfig["modules"];
  technologyLead: string;
  technologyTags: readonly string[];
  process: CloneAppTemplateConfig["process"];
  cta: CloneAppTemplateConfig["cta"];
};

const defaultImages = {
  heroImage: "/solutions/talabat/talabat.png",
  heroImageAlt: "Mobile application interfaces displayed on phone mockups",
  technologyImage: "/solutions/talabat/ teck-stacks .png",
  technologyImageAlt: "Modern application technology stack",
} as const;

export function createStandardSolutionConfig(options: StandardSolutionOptions): CloneAppTemplateConfig {
  return {
    ...options,
    ...defaultImages,
    primaryCta: "Book a Free Consultation",
    secondaryCta: "Explore the platform",
  };
}
