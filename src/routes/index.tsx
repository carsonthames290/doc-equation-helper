import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Document Portal" },
      { name: "description", content: "A simple online document editor." },
      { property: "og:title", content: "Document Portal" },
      { property: "og:description", content: "A simple online document editor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portal,
});

function Portal() {
  return (
    <iframe
      src="/portal/index.html"
      title="Document Portal"
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        border: 0,
      }}
    />
  );
}
