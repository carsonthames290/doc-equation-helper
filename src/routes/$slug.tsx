import { createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { getGame } from "@/lib/games";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const game = getGame(params.slug);
    if (!game) throw notFound();
    return game;
  },
  head: ({ loaderData }) => {
    const title = loaderData ? `${loaderData.title} — Math Help and Tutoring` : "Lesson";
    const description = loaderData?.blurb ?? "Interactive math lesson.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: GamePage,
});

function GamePage() {
  const game = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">{game.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{game.blurb}</p>

        <div className="mt-6 overflow-hidden rounded-lg border border-border bg-card shadow-sm">
          <iframe
            key={game.slug}
            {...(game.kind === "url" ? { src: game.src } : { srcDoc: game.html })}
            title={game.title}
            className="h-[70vh] w-full"
            allow="fullscreen; autoplay; gamepad; keyboard-map"
            allowFullScreen
          />
        </div>

        <button
          type="button"
          onClick={() => {
            const el = document.querySelector("iframe");
            el?.requestFullscreen?.();
          }}
          className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Fullscreen
        </button>
      </main>
    </div>
  );
}
