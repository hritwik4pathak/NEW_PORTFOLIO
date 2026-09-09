"use client";

import {
  LayoutDashboard,
  FolderKanban,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    name: "Skills",
    href: "/skills",
    icon: Code2,
  },
  {
    name: "Experience",
    href: "/experience",
    icon: Briefcase,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: Mail,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-zinc-800 bg-zinc-950">
      
      {/* Logo / Name */}
      <div className="flex h-22.5 flex-col justify-center border-b border-zinc-800 px-6">
        <h1 className="text-xl font-semibold text-white">
          Hritwik Pathak
        </h1>

        <p className="text-sm text-zinc-500">
          Developer Portfolio
        </p>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6">
        <p className="mb-4 px-3 text-xs font-medium uppercase tracking-wider text-zinc-500">
          Workspace
        </p>

        <div className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;

            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm transition ${
                  isActive
                    ? "bg-zinc-800 text-white"
                    : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
                }`}
              >
                <Icon size={20} />

                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Status */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-zinc-800 p-4">
        <div className="rounded-lg bg-zinc-900 p-3">
          <p className="text-xs text-zinc-500">
            Status
          </p>

          <p className="mt-1 text-sm text-zinc-300">
            Open to opportunities
          </p>
        </div>
      </div>

    </aside>
  );
}