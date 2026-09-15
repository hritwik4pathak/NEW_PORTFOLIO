"use client";

import {
    ArrowUpRight,
    ExternalLink,
    Mail,
} from "lucide-react";

import CursorMascot from "@/components/landing/CursorMascot";

export default function ContactPanel() {
  return (
    <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      {/* LEFT SIDE */}
      <div className="px-2 pt-16 lg:px-6 lg:pt-16">
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-zinc-600">
          Let&apos;s connect
        </p>

        <h2 className="mt-4 max-w-lg text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl">
          Have something
          <span className="block bg-gradient-to-r from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
            interesting in mind?
          </span>
        </h2>

        <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">
          Whether you have a project, an opportunity, or simply want
          to talk about technology and development, I&apos;d love to
          hear from you.
        </p>

        {/* Decorative line */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-12 bg-zinc-800" />

          <span className="text-xs text-zinc-700">
            Hritwik Pathak
          </span>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative pt-16">
        {/* Mascot */}
        <div
          className="
            absolute
            left-1/2
            top-8
            z-20
            h-[180px]
            w-[330px]
            -translate-x-1/2
            [&_.cursor-mascot]:!top-[-55px]
          "
        >
          <CursorMascot />
        </div>

        {/* CONTACT CARD */}
        <div className="relative mt-14 z-10 rounded-2xl border border-zinc-800 bg-zinc-950 p-5 sm:p-6">
          {/* Header */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-600">
              Get in touch
            </p>

            <h2 className="mt-2 text-2xl font-semibold text-white">
              Let&apos;s connect
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-500">
              I&apos;m open to frontend development opportunities,
              freelance projects, and interesting collaborations.
            </p>
          </div>

          {/* Contact Links */}
          <div className="mt-7 space-y-3">
            {/* Email */}
            <a
              href="mailto:your-email@example.com"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-black p-4 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition group-hover:border-zinc-700 group-hover:text-white">
                <Mail size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  Email
                </p>

                <p className="mt-1 truncate text-sm text-zinc-500">
                  your-email@example.com
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="shrink-0 text-zinc-700 transition group-hover:text-zinc-300"
              />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/hritwik4pathak"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-black p-4 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition group-hover:border-zinc-700 group-hover:text-white">
                <ExternalLink size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  GitHub
                </p>

                <p className="mt-1 truncate text-sm text-zinc-500">
                  github.com/hritwik4pathak
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="shrink-0 text-zinc-700 transition group-hover:text-zinc-300"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/hritwik-pathak-81a10b259/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-black p-4 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-900"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-400 transition group-hover:border-zinc-700 group-hover:text-white">
                <ExternalLink size={18} />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-zinc-200">
                  LinkedIn
                </p>

                <p className="mt-1 truncate text-sm text-zinc-500">
                  linkedin.com/in/hritwik-pathak
                </p>
              </div>

              <ArrowUpRight
                size={17}
                className="shrink-0 text-zinc-700 transition group-hover:text-zinc-300"
              />
            </a>
          </div>

          {/* Availability */}
          <div className="mt-5 rounded-xl border border-zinc-800 bg-zinc-900/40 p-4">
            <div className="flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <div>
                <p className="text-sm font-medium text-zinc-200">
                  Open to opportunities
                </p>

                <p className="mt-1 text-xs text-zinc-600">
                  Available for frontend roles and interesting projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}