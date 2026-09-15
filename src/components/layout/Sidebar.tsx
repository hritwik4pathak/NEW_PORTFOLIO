"use client";

import {
  Briefcase,
  Code2,
  FolderKanban,
  LayoutDashboard,
  Mail,
  Menu,
  X,
} from "lucide-react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950 text-zinc-300 transition hover:bg-zinc-900 hover:text-white lg:hidden"
      >
        <Menu size={21} />
      </button>

      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 border-r border-zinc-800 bg-zinc-950 transition-transform duration-300 lg:z-40 lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo / Name */}
        <div className="relative">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex h-[90px] flex-col justify-center border-b border-zinc-800 px-6 transition hover:bg-zinc-900/50"
          >
            <h1 className="text-xl font-semibold text-white">
              Hritwik Pathak
            </h1>

            <p className="text-sm text-zinc-500">
              Developer Portfolio
            </p>
          </Link>

          {/* Mobile Close Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:bg-zinc-900 hover:text-white lg:hidden"
          >
            <X size={20} />
          </button>
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
                pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
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
    </>
  );
}