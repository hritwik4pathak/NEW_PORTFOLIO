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
  const token = process.env.VERCEL_TOKEN;

  // Don't crash the dashboard if the token is missing.
  if (!token) {
    console.error("VERCEL_TOKEN is not configured.");
    return [];
  }

  try {
    const response = await fetch(
      "https://api.vercel.com/v9/projects",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }
    );

    if (!response.ok) {
      console.error(
        "Vercel API error:",
        response.status,
        response.statusText
      );

      return [];
    }

    const data: VercelProjectsResponse =
      await response.json();

    const projects = await Promise.all(
      data.projects.map(async (project) => {
        try {
          const deploymentResponse = await fetch(
            `https://api.vercel.com/v6/deployments?projectId=${project.id}&limit=1&target=production`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
              cache: "no-store",
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
        } catch (error) {
          console.error(
            `Failed to fetch deployment for ${project.name}:`,
            error
          );

          return {
            ...project,
            deploymentUrl: null,
          };
        }
      })
    );

    return projects;
  } catch (error) {
    console.error(
      "Failed to fetch Vercel projects:",
      error
    );

    return [];
  }
}