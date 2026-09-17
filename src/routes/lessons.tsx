import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { games } from "@/lib/games";

export const Route = createFileRoute("/lessons")({
  head: () => ({
    meta: [
      { title: "Math Help and Tutoring — Lessons" },
      {
        name: "description",
        content:
          "A collection of interactive math lessons covering slope, probability, motion and angles.",
      },
      { property: "og:title", content: "Math Help and Tutoring" },
      { property: "og:description", content: "A collection of interactive math lessons." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Lessons,
});

function Lessons() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground">
          Math Help and Tutoring
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          This is a bunch of lessons for your math.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g) => (
            <Link
              key={g.slug}
              to="/$slug"
              params={{ slug: g.slug }}
              className="rounded-lg border border-border bg-card p-5 shadow-sm transition-colors hover:border-ring"
            >
              <h2 className="text-lg font-medium text-card-foreground">{g.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{g.blurb}</p>
            </Link>
          ))}
        </div>
      </main>
      <footer className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        Page updated
      </footer>
    </div>
  );
}
