export interface ProjectConfig {
  githubRepo: string;
  featured?: boolean;
  title?: string;
  description?: string;
  skills?: string[];
}

export const projectConfigs: ProjectConfig[] = [
  {
    githubRepo: "the-party-nest-frontend",
    featured: true,
    title: "The Party Nest",
    description:
      "A modern web application built with React and Next.js.",
    skills: ["Next.js", "React", "TypeScript"],
  },

  {
    githubRepo: "digital-card",
    featured: true,
    title: "Digital Card",
    description:
      "A digital card and profile experience.",
    skills: ["React", "TypeScript"],
  },

  {
    githubRepo: "squaeff",
    featured: true,
    title: "Squaeff",
    description:
      "A modern web application focused on delivering a clean user experience.",
    skills: ["Next.js", "React"],
  },
];