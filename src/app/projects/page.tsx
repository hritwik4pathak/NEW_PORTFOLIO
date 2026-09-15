import { getGithubRepositories } from "@/lib/github";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import ProjectsClient from "@/components/projects/ProjectsClient";

export default async function ProjectsPage() {
  const repositories = await getGithubRepositories();

  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <main className="ml-0 pt-20 lg:ml-64">
        <div className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          {/* Header */}
          <div className="mb-8">
            

            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-white">
              My Projects
            </h1>

            <p className="mt-2 text-zinc-400">
              All of my projects fetched directly from GitHub.
            </p>
          </div>

          {/* Search + Filter + Projects */}
          <ProjectsClient repositories={repositories} />
        </div>
      </main>
    </div>
  );
}