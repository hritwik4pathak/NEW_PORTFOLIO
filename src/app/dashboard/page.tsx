export const dynamic = "force-dynamic";

import {
  getGithubProfile,
  getGithubRepositories,
} from "@/lib/github";

import { getVercelProjects } from "@/lib/vercel";

import Dashboard from "@/components/dashboard/Dashboard";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default async function Home() {
  const profile = await getGithubProfile();

  const repositories = await getGithubRepositories();

  const vercelProjects = await getVercelProjects();

  return (
    <div className="min-h-screen bg-black">
      <Sidebar />

      <Topbar />

      <main className="ml-64 pt-20">
        <div className="mx-auto max-w-7xl p-8">
          <Dashboard
            profile={profile}
            repositories={repositories}
            vercelProjects={vercelProjects}
          />
        </div>
      </main>
    </div>
  );
}