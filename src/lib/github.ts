import type {
  GithubProfile,
  GithubRepository,
} from "@/types";

const GITHUB_USERNAME = "hritwik4pathak";

export async function getGithubProfile(): Promise<GithubProfile> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub profile");
  }

  return response.json();
}

export async function getGithubRepositories(): Promise<GithubRepository[]> {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories");
  }

  return response.json();
}



