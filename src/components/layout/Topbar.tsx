"use client";

import { Bell } from "lucide-react";
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
    <header className="fixed left-0 right-0 top-0 z-30 h-[90px] border-b border-zinc-800 bg-black/90 backdrop-blur lg:left-64">
      <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Page Information */}
        <div className="min-w-0 pl-14 lg:pl-0">
          <p className="truncate text-xs text-zinc-500 sm:text-sm">
            {currentPage.breadcrumb}
          </p>

          <h2 className="truncate text-lg font-semibold text-white sm:text-xl">
            {currentPage.title}
          </h2>
        </div>

        {/* Right Side */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3 lg:gap-4">
          {/* Notifications */}
          <button
            type="button"
            aria-label="Notifications"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition hover:bg-zinc-900 hover:text-white sm:h-11 sm:w-11"
          >
            <Bell size={18} />
          </button>

          {/* Avatar */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold text-white sm:h-11 sm:w-11">
            HP
          </div>
        </div>
      </div>
    </header>
  );
}