import type { GithubRepository } from "@/types";
import { projectConfigs } from "@/data/projects";

export interface PortfolioProject extends GithubRepository {
  title: string;
  portfolioDescription: string;
  skills: string[];
  featured: boolean;
}

export function getPortfolioProjects(
  repositories: GithubRepository[]
): PortfolioProject[] {
  return repositories.map((repo) => {
    const config = projectConfigs.find(
      (project) => project.githubRepo.toLowerCase() === repo.name.toLowerCase()
    );

    return {
      ...repo,

      title: config?.title || repo.name,

      portfolioDescription:
        config?.description ||
        repo.description ||
        "No description available.",

      skills: config?.skills || [],

      featured: config?.featured ?? false,
    };
  });
}