"use client";

import { useMemo, useState } from "react";
import ProjectCard from "./ProjectCard";
import type { GithubRepository } from "@/types";
import type { PortfolioProject } from "@/lib/projects";

interface ProjectsClientProps {
  repositories: GithubRepository[];
}

export default function ProjectsClient({
  repositories,
}: ProjectsClientProps) {
  const [search, setSearch] = useState("");
  const [language, setLanguage] = useState("All");
  const [sort, setSort] = useState("updated");

  const portfolioProjects: PortfolioProject[] = useMemo(() => {
    return repositories.map((repo) => ({
      ...repo,
      title: repo.name,
      portfolioDescription:
        repo.description || "No description available.",
      skills: repo.language ? [repo.language] : [],
      featured: false,
    }));
  }, [repositories]);

  const languages = useMemo(() => {
    const uniqueLanguages = new Set(
      portfolioProjects
        .map((repo) => repo.language)
        .filter((language): language is string => Boolean(language))
    );

    return ["All", ...Array.from(uniqueLanguages).sort()];
  }, [portfolioProjects]);

  const filteredProjects = useMemo(() => {
    const result = portfolioProjects.filter((project) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        project.name.toLowerCase().includes(searchText) ||
        project.portfolioDescription
          .toLowerCase()
          .includes(searchText) ||
        project.skills.some((skill) =>
          skill.toLowerCase().includes(searchText)
        );

      const matchesLanguage =
        language === "All" || project.language === language;

      return matchesSearch && matchesLanguage;
    });

    return [...result].sort((a, b) => {
      if (sort === "stars") {
        return b.stargazers_count - a.stargazers_count;
      }

      if (sort === "forks") {
        return b.forks_count - a.forks_count;
      }

      return (
        new Date(b.updated_at).getTime() -
        new Date(a.updated_at).getTime()
      );
    });
  }, [portfolioProjects, search, language, sort]);

  return (
    <div>
      {/* Filters */}
      <div className="mb-6 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <input
          type="text"
          placeholder="Search projects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-11 w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-white outline-none placeholder:text-zinc-600 focus:border-zinc-600"
        />

        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="h-11 rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-zinc-300 outline-none focus:border-zinc-600"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="h-11 rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-zinc-300 outline-none focus:border-zinc-600"
        >
          <option value="updated">Recently Updated</option>
          <option value="stars">Most Stars</option>
          <option value="forks">Most Forks</option>
        </select>
      </div>

      {/* Result count */}
      <div className="mb-4">
        <p className="text-sm text-zinc-500">
          Showing {filteredProjects.length} of {repositories.length} projects
        </p>
      </div>

      {/* Projects */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-10 text-center">
          <p className="text-sm text-zinc-500">
            No projects found.
          </p>

          <button
            onClick={() => {
              setSearch("");
              setLanguage("All");
              setSort("updated");
            }}
            className="mt-4 text-sm text-zinc-300 hover:text-white"
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}