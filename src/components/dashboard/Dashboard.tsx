import ProjectCard from "@/components/projects/ProjectCard";
import StatCard from "./StatCard";
import type { GithubRepository } from "@/types";

interface VercelProject {
  id: string;
  name: string;
  framework: string | null;
  deploymentUrl: string | null;
  updatedAt: number;
}

interface DashboardProps {
  profile: {
    name: string | null;
    public_repos: number;
    followers: number;
    following: number;
  };

  repositories: GithubRepository[];

  vercelProjects: VercelProject[];
}

export default function Dashboard({
  profile,
  repositories,
  vercelProjects,
}: DashboardProps) {
  return (
    <div className="space-y-8">

      {/* Welcome */}
      <div>
        <p className="text-sm text-zinc-500">
          Welcome 
        </p>

        <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">
          {profile.name || "Hritwik"}
        </h1>

        <p className="mt-2 text-zinc-400">
          Here&s an overview of my development work and projects.
        </p>
      </div>


      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <StatCard
          title="Projects"
          value={profile.public_repos}
          description="Public GitHub repositories"
        />

        <StatCard
          title="Followers"
          value={profile.followers}
          description="GitHub followers"
        />

        <StatCard
          title="Following"
          value={profile.following}
          description="GitHub accounts"
        />

        <StatCard
          title="Status"
          value="Available"
          description="Open to opportunities"
        />

      </div>


      {/* GitHub Projects */}
      <section>

        <div className="mb-4 flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-white">
              Featured Projects
            </h2>

            <p className="text-sm text-zinc-500">
              Projects fetched directly from GitHub.
            </p>
          </div>

          <a
            href="https://github.com/hritwik4pathak"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white"
          >
            View all →
          </a>

        </div>


        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {repositories.slice(0, 6).map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </section>


      {/* Vercel Projects */}
      <section>

        <div className="mb-4">

          <h2 className="text-lg font-semibold text-white">
            Live Deployments
          </h2>

          <p className="text-sm text-zinc-500">
            Projects deployed on Vercel.
          </p>

        </div>


        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

          {vercelProjects.slice(0, 6).map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-600 hover:bg-zinc-900"
            >

              {/* Project name */}
              <h3 className="text-lg font-semibold text-white">
                {project.name}
              </h3>


              {/* Framework */}
              <p className="mt-2 text-sm text-zinc-500">
                {project.framework || "Web Project"}
              </p>


              {/* Deployment link */}
              <div className="mt-6">

                {project.deploymentUrl ? (
                  <a
                    href={
                      project.deploymentUrl.startsWith("http")
                        ? project.deploymentUrl
                        : `https://${project.deploymentUrl}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-300 hover:text-white"
                  >
                    Open Live Site →
                  </a>
                ) : (
                  <span className="text-sm text-zinc-600">
                    No production deployment
                  </span>
                )}

              </div>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
}