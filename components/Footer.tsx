import Link from "next/link";
import { getHelpUrl } from "@/lib/links";

export default function Footer() {
  const helpUrl = getHelpUrl();
  return (
    <footer className="border-t border-foreground/10 py-10 mt-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-foreground/60">© {new Date().getFullYear()} Social Scheduler AI</p>
        <nav className="flex items-center gap-6">
          <Link
            href="#"
            className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded px-1"
          >
            Termos
          </Link>
          <Link
            href="#"
            className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded px-1"
          >
            Privacidade
          </Link>
          <Link
            href={helpUrl}
            className="hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5B8CFF] rounded px-1"
          >
            Ajuda
          </Link>
        </nav>
      </div>
    </footer>
  );
}
