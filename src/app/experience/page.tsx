"use client";

import CursorMascot from "@/components/landing/CursorMascot";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Sidebar */}
      <Sidebar />

      {/* Topbar */}
      <Topbar />

      {/* Main Content */}
      <main className="ml-0 pt-20 lg:ml-64">
        <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Experience
            </h1>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
              My professional experience and achievements will be
              available here soon.
            </p>
          </div>

          {/* Work In Progress */}
          <div className="relative flex min-h-[560px] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-16 sm:min-h-[600px] sm:px-8">
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/[0.06] blur-[120px]" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.035),transparent_65%)]" />

            {/* Main Scene */}
            <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">

              {/* Mascot */}
            <div className="relative z-30 h-[150px] w-[280px] sm:h-[180px] sm:w-[330px] [&_.cursor-mascot]:!top-[-55px]">
                <CursorMascot />
            </div>

              {/* Construction Sign */}
              <div className="relative z-20 -mt-16 w-full max-w-2xl sm:-mt-23">

                {/* Top Strip */}
                <div className="relative h-7 overflow-hidden rounded-t-2xl border border-zinc-700 bg-zinc-900">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,transparent_0px,transparent_18px,rgba(255,255,255,0.07)_18px,rgba(255,255,255,0.07)_36px)]" />
                </div>

                {/* Main Sign */}
                <div className="relative overflow-hidden rounded-b-2xl border-x border-b border-zinc-700 bg-black px-5 py-9 text-center shadow-2xl sm:px-10 sm:py-12">

                  {/* Subtle Grid */}
                  <div className="pointer-events-none absolute inset-0 opacity-30">
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `
                          linear-gradient(
                            rgba(255,255,255,0.035) 1px,
                            transparent 1px
                          ),
                          linear-gradient(
                            90deg,
                            rgba(255,255,255,0.035) 1px,
                            transparent 1px
                          )
                        `,
                        backgroundSize: "32px 32px",
                      }}
                    />
                  </div>

                  {/* Sign Content */}
                  <div className="relative z-10">

                    <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-600">
                      Under construction
                    </p>

                    <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                      Work in
                      <span className="block bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                        Progress
                      </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">
                      I&apos;m currently working on adding my professional
                      experience, achievements, and career journey here.
                    </p>

                    <div className="mt-5 flex items-center justify-center gap-2 text-sm text-zinc-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />

                      <span>
                        Check back soon
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-zinc-600" />
                    </div>

                  </div>
                </div>
              </div>

              {/* Bottom Elements */}
              <div className="mt-5 flex w-full items-center justify-center">

                {/* Building Status */}
                <div className="flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-40" />

                    <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-400" />
                  </span>

                  <span className="text-xs text-zinc-500">
                    Currently building
                  </span>
                </div>

              </div>

              {/* Bottom Message */}
              <p className="mt-8 text-center text-xs text-zinc-700 sm:text-sm">
                More details about my journey are coming soon.
              </p>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}