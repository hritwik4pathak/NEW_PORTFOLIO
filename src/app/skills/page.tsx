import { getGithubRepositories } from "@/lib/github";

import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default async function SkillsPage() {
  const repositories = await getGithubRepositories();

  // Count how many repositories use each language
  const languageCounts: Record<string, number> = {};

  repositories.forEach((repo) => {
    if (repo.language) {
      languageCounts[repo.language] =
        (languageCounts[repo.language] || 0) + 1;
    }
  });

  const skills = Object.entries(languageCounts).sort(
    ([, countA], [, countB]) => countB - countA
  );

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
              Skills & Technologies
            </h1>

            <p className="mt-2 text-zinc-400">
              Technologies I&rsquo;ve worked with across my GitHub projects.
            </p>
          </div>

          {/* Skills */}
          {skills.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map(([language, count]) => (
                <div
                  key={language}
                  className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-600 hover:bg-zinc-900"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h2 className="text-lg font-semibold text-white">
                      {language}
                    </h2>

                    <span className="shrink-0 rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400">
                      {count} {count === 1 ? "project" : "projects"}
                    </span>
                  </div>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-white"
                      style={{
                        width: `${Math.max(
                          10,
                          (count / skills[0][1]) * 100
                        )}%`,
                      }}
                    />
                  </div>

                  <p className="mt-3 text-xs text-zinc-600">
                    Used across your GitHub repositories
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-10 text-center">
              <p className="text-sm text-zinc-500">
                No programming languages found.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}