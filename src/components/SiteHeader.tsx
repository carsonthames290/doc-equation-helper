import { Link } from "@tanstack/react-router";
import { games } from "@/lib/games";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-4">
        <Link to="/lessons" className="text-lg font-semibold tracking-tight text-foreground">
          Math Help and Tutoring
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          {games.map((g) => (
            <Link
              key={g.slug}
              to="/$slug"
              params={{ slug: g.slug }}
              className="transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground font-medium" }}
            >
              {g.title}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
