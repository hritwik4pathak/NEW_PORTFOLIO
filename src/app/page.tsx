"use client";

import CursorMascot from "@/components/landing/CursorMascot";
import Link from "next/link";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, black 0%, transparent 85%)",
          }}
        />

        <div className="absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[120px]" />

        <div className="absolute left-[10%] top-[35%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.06] blur-[120px]" />

        <div className="absolute right-[5%] top-[25%] h-[350px] w-[350px] rounded-full bg-purple-500/[0.06] blur-[130px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-7">

        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          HP<span className="text-zinc-600">.</span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-zinc-500 md:flex">

          <Link
            href="/projects"
            className="transition hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/skills"
            className="transition hover:text-white"
          >
            Skills
          </Link>

          <Link
            href="/experience"
            className="transition hover:text-white"
          >
            Experience
          </Link>

          <Link
            href="/contact"
            className="transition hover:text-white"
          >
            Contact
          </Link>

        </div>

        <Link
          href="/dashboard"
          className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
        >
          View Dashboard
        </Link>

      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-90px)] max-w-7xl items-center px-8 pb-20 pt-10">

        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">

          {/* LEFT CONTENT */}
          <div>

            {/* Availability */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950/80 px-3 py-1.5 backdrop-blur">

              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>

              <span className="text-xs text-zinc-400">
                Open to opportunities
              </span>

            </div>

            {/* Heading */}
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-6xl lg:text-7xl">

              Frontend Developer

              <br />

              <span className="bg-gradient-to-r from-white via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
                building digital experiences.
              </span>

            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
              I&apos;m Hritwik Pathak. building responsive and
              interactive web applications using React, Next.js,
              TypeScript and modern frontend technologies.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap gap-3">

              <Link
                href="/projects"
                className="group rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-[1.02] hover:bg-zinc-200"
              >
                Explore My Work

                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="rounded-lg border border-zinc-800 bg-zinc-950 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-zinc-600 hover:bg-zinc-900 hover:text-white"
              >
                Let&apos;s Talk
              </Link>

            </div>

            {/* Technologies */}
            <div className="mt-12">

              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
                Technologies
              </p>

              <div className="flex flex-wrap gap-2">

                {technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-zinc-800 bg-zinc-950/70 px-3 py-1.5 text-xs text-zinc-500 transition hover:-translate-y-0.5 hover:border-zinc-600 hover:text-zinc-300"
                  >
                    {technology}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT VISUAL */}
          <div className="relative hidden lg:block">

            {/* Visual container */}
            <div className="relative mx-auto h-[520px] w-[460px]">

              {/* Outer ring */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[390px]
                  w-[390px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-zinc-800/80
                  animate-[spin_20s_linear_infinite]
                "
              />

              {/* Inner ring */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[300px]
                  w-[300px]
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  border
                  border-dashed
                  border-zinc-800/70
                  animate-[spin_15s_linear_infinite_reverse]
                "
              />

              {/* Code + Mascot group */}
              <div className="absolute left-1/2 top-[120px] w-[360px] -translate-x-1/2">

                {/* Mascot */}
                <CursorMascot />

                {/* Code window */}
                <div
                  className="
                    relative
                    z-20
                    w-[360px]
                    rounded-2xl
                    border
                    border-zinc-800
                    bg-zinc-950/95
                    p-5
                    shadow-2xl
                    backdrop-blur-xl
                  "
                >

                  {/* Window header */}
                  <div className="mb-5 flex items-center gap-1.5">

                    <span className="h-2.5 w-2.5 rounded-full bg-red-500" />

                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />

                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />

                    <span className="ml-auto text-[10px] text-zinc-700">
                      portfolio.tsx
                    </span>

                  </div>

                  {/* Code */}
                  <div className="space-y-3 font-mono text-xs leading-6">

                    <p className="text-zinc-600">
                      
                      const developer = {"{"}
                    </p>

                    <p className="pl-6 text-zinc-400">
                      name:{" "}
                      <span className="text-zinc-200">
                        &quot;Hritwik&quot;
                      </span>
                    </p>

                    <p className="pl-6 text-zinc-400">
                      role:{" "}
                      <span className="text-zinc-200">
                        &quot;Frontend Developer&quot;
                      </span>
                    </p>

                    <p className="pl-6 text-zinc-400">
                      stack:{" "}
                      <span className="text-zinc-200">
                        [&quot;React&quot;,&quot;Next.js&quot;]
                      </span>
                    </p>

                    <p className="pl-6 text-zinc-400">
                      passion:{" "}
                      <span className="text-zinc-200">
                        &quot;Building great UI&quot;
                      </span>
                    </p>

                    <p className="text-zinc-600">
                      
                      {"}"}
                    </p>

                  </div>

                  {/* Status */}
                  <div className="mt-6 flex items-center justify-between border-t border-zinc-800 pt-4">

                    <span className="text-[10px] text-zinc-600">
                      system.status
                    </span>

                    <span className="flex items-center gap-1.5 text-[10px] text-zinc-400">

                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

                      Available

                    </span>

                  </div>

                </div>

                {/* Framework card */}
                <div
                  className="
                    absolute
                    -left-17
                    top-[-22px]
                    z-40
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-950/95
                    px-4
                    py-3
                    shadow-xl
                    backdrop-blur
                  "
                >

                  <p className="text-[10px] text-zinc-600">
                    Framework
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    Next.js
                  </p>

                </div>

                {/* Language card */}
                <div
                  className="
                    absolute
                    -bottom-2
                    -right-21
                    z-40
                    rounded-xl
                    border
                    border-zinc-800
                    bg-zinc-950/95
                    px-4
                    py-3
                    shadow-xl
                    backdrop-blur
                  "
                >

                  <p className="text-[10px] text-zinc-600">
                    Language
                  </p>

                  <p className="mt-1 text-sm font-medium text-zinc-300">
                    TypeScript
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">

          <div className="flex flex-col items-center gap-2">

            <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-700">
              Scroll
            </span>

            <div className="h-8 w-[1px] overflow-hidden bg-zinc-800">
              <div className="h-3 w-full animate-pulse bg-zinc-400" />
            </div>

          </div>

        </div>

      </section>

      {/* Bottom stats */}
      <section className="relative z-10 border-t border-zinc-900">

        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-zinc-900 px-8 md:grid-cols-4">

          <div className="px-6 py-8">
            <p className="text-2xl font-semibold text-white">
              10+
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              GitHub Projects
            </p>
          </div>

          <div className="px-6 py-8">
            <p className="text-2xl font-semibold text-white">
              React
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Primary Framework
            </p>
          </div>

          <div className="px-6 py-8">
            <p className="text-2xl font-semibold text-white">
              Next.js
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Modern Web Stack
            </p>
          </div>

          <div className="px-6 py-8">
            <p className="text-2xl font-semibold text-white">
              ∞
            </p>

            <p className="mt-1 text-xs text-zinc-600">
              Things to Build
            </p>
          </div>

        </div>

      </section>

      {/* Animations */}
      <style>{`
        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>

    </main>
  );
}