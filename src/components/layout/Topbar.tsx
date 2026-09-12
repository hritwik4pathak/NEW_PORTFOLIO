"use client";

import { Search, Bell } from "lucide-react";
import { usePathname } from "next/navigation";

const pageInfo: Record<
  string,
  {
    breadcrumb: string;
    title: string;
  }
> = {
  "/dashboard": {
    breadcrumb: "Portfolio / Dashboard",
    title: "Developer Overview",
  },

  "/projects": {
    breadcrumb: "Portfolio / Projects",
    title: "My Projects",
  },

  "/skills": {
    breadcrumb: "Portfolio / Skills",
    title: "My Skills",
  },

  "/experience": {
    breadcrumb: "Portfolio / Experience",
    title: "Experience",
  },

  "/contact": {
    breadcrumb: "Portfolio / Contact",
    title: "Contact Me",
  },
};

export default function Topbar() {
  const pathname = usePathname();

  const currentPage = pageInfo[pathname] || {
    breadcrumb: "Portfolio",
    title: "Developer Portfolio",
  };

  return (
    <header className="fixed left-64 right-0 top-0 z-30 h-[90px] border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="flex h-full items-center justify-between px-8">
        <div>
          <p className="text-sm text-zinc-500">
            {currentPage.breadcrumb}
          </p>

          <h2 className="text-xl font-semibold text-white">
            {currentPage.title}
          </h2>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex h-11 w-60 items-center gap-3 rounded-lg border border-zinc-800 bg-zinc-900 px-4">
            <Search
              size={18}
              className="text-zinc-500"
            />

            <span className="text-sm text-zinc-600">
              Search...
            </span>
          </div>

          <button className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:bg-zinc-900 hover:text-white">
            <Bell size={18} />
          </button>

          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-white">
            HP
          </div>
        </div>
      </div>
    </header>
  );
}