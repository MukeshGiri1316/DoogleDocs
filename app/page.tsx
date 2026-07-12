"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 page-enter">
      {/* Background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8 text-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <line x1="10" y1="9" x2="8" y2="9" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            <span className="gradient-text">DoogleDocs</span>
          </h1>
        </div>

        {/* Tagline */}
        <div className="max-w-lg space-y-3">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Write anywhere.
            <br />
            <span className="text-muted-foreground">Sync everywhere.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A local-first collaborative editor that works offline, syncs
            automatically, and lets you travel through your document&apos;s
            history.
          </p>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            href="/register"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary px-8 font-medium text-primary-foreground transition-all hover:bg-primary-hover hover:scale-[1.02] active:scale-[0.98]"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-border px-8 font-medium transition-all hover:bg-secondary hover:border-border-hover"
          >
            Sign In
          </Link>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 pt-4">
          {["Offline-First", "Real-time Sync", "Version History", "Role-Based Access", "AI-Powered"].map(
            (feature) => (
              <span
                key={feature}
                className="rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm text-secondary-foreground"
              >
                {feature}
              </span>
            )
          )}
        </div>

        {/* Developer Credit */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-sm text-muted-foreground">
            Crafted by
          </p>

          <h3 className="text-lg font-semibold tracking-wide">
            <span className="gradient-text">Mukesh Giri</span>
          </h3>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/your-github-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm transition-all hover:bg-secondary hover:border-border-hover hover:scale-[1.05]"
            >
              <FaGithub className="text-lg transition-transform group-hover:scale-110" />
              <span>GitHub</span>
            </a>

            <a
              href="https://linkedin.com/in/your-linkedin-username"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-4 py-2 text-sm transition-all hover:bg-secondary hover:border-border-hover hover:scale-[1.05]"
            >
              <FaLinkedin className="text-lg text-blue-500 transition-transform group-hover:scale-110" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
