"use client";

import { getAppUrl, getHelpUrl, getTryUrl } from "@/lib/links";
import Link from "next/link";

export default function Header() {
  const helpUrl = getHelpUrl();
  const appUrl = getAppUrl();
  const tryUrl = getTryUrl();

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-backdrop-filter:bg-background/60 bg-background/80 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="#" className="flex items-center font-semibold tracking-tight">
              <span className="ml-2">Social Scheduler AI</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link
              href={helpUrl}
              className="text-foreground/80 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded px-1"
            >
              Ajuda
            </Link>
            <Link
              href={appUrl}
              className="text-foreground/80 hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded px-1"
            >
              Entrar
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={tryUrl}
              className="inline-flex items-center justify-center rounded-md bg-[#090580] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#070460] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#090580]"
            >
              Experimentar agora
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
