interface VercelProject {
  id: string;
  name: string;
  framework: string | null;
  link: string | null;
  updatedAt: number;
  deploymentUrl: string | null;
}

interface VercelProjectsResponse {
  projects: {
    id: string;
    name: string;
    framework: string | null;
    link: string | null;
    updatedAt: number;
  }[];
}

interface VercelDeploymentsResponse {
  deployments: {
    url: string;
    state: string;
    target?: string;
  }[];
}

export async function getVercelProjects(): Promise<VercelProject[]> {
  const response = await fetch(
    "https://api.vercel.com/v9/projects",
    {
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      },
      next: {
        revalidate: 3600,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch Vercel projects");
  }

  const data: VercelProjectsResponse = await response.json();

  const projects = await Promise.all(
    data.projects.map(async (project) => {
      const deploymentResponse = await fetch(
        `https://api.vercel.com/v6/deployments?projectId=${project.id}&limit=1&target=production`,
        {
          headers: {
            Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
          },
          next: {
            revalidate: 3600,
          },
        }
      );

      let deploymentUrl: string | null = null;

      if (deploymentResponse.ok) {
        const deploymentData: VercelDeploymentsResponse =
          await deploymentResponse.json();

        deploymentUrl =
          deploymentData.deployments[0]?.url ?? null;
      }

      return {
        ...project,
        deploymentUrl,
      };
    })
  );

  return projects;
}