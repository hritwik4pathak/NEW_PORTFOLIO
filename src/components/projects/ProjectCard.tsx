import type { GithubRepository } from "@/types";

interface ProjectCardProps {
  project: GithubRepository;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const updatedDate = new Date(project.updated_at);

  const formattedDate = updatedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="group flex h-full min-w-0 flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-4 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900/70 sm:p-5">
      {/* Project Header */}
      <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="min-w-0">
          <div className="flex min-w-0 items-center gap-2">
            <h3 className="min-w-0 truncate text-lg font-semibold text-white">
              {project.name}
            </h3>

            {!project.fork && (
              <span className="shrink-0 rounded-full border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] uppercase tracking-wide text-zinc-500">
                Original
              </span>
            )}
          </div>

          <p className="mt-2 line-clamp-3 min-h-[60px] text-sm leading-5 text-zinc-500">
            {project.description || "No description available."}
          </p>
        </div>

        {/* Language */}
        <span className="self-start rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400 sm:shrink-0">
          {project.language || "Other"}
        </span>
      </div>

      {/* Divider */}
      <div className="my-5 border-t border-zinc-800" />

      {/* Project Stats */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="text-yellow-400">
            ★
          </span>

          <span>
            {project.stargazers_count}
          </span>

          <span className="text-zinc-700">
            stars
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span>
            ⑂
          </span>

          <span>
            {project.forks_count}
          </span>

          <span className="text-zinc-700">
            forks
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-6">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="truncate text-xs text-zinc-600">
            Updated {formattedDate}
          </span>

          <span className="shrink-0 text-xs text-zinc-600">
            GitHub
          </span>
        </div>

        {/* GitHub Button */}
        <a
          href={project.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg border border-zinc-800 px-4 py-2.5 text-center text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
        >
          View Repository ↗
        </a>
      </div>
    </div>
  );
}