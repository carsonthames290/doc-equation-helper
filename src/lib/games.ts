export type Game = {
  slug: string;
  title: string;
  blurb: string;
  kind: "url";
  src: string;
};

export const games: Game[] = [
  {
    slug: "snow-rider",
    title: "Snow Rider",
    blurb: "Lesson 1 — Slope and velocity on a downhill track.",
    kind: "url",
    src: "https://snowrider3d.com/",
  },
  {
    slug: "basket-random",
    title: "Basket Random",
    blurb: "Lesson 2 — Probability and projectile arcs.",
    kind: "url",
    src: "https://ubg98.github.io/BasketRandom/",
  },
  {
    slug: "kart-bros",
    title: "Kart Bros",
    blurb: "Lesson 3 — Speed, distance and time.",
    kind: "url",
    src: "https://www.miniplay.com/embed/kart-bros",
  },
  {
    slug: "smash-karts",
    title: "Smash Karts",
    blurb: "Lesson 4 — Coordinates and collision geometry.",
    kind: "url",
    src: "https://www.miniplay.com/embed/smash-karts",
  },
  {
    slug: "gun-spin",
    title: "Gun Spin",
    blurb: "Lesson 5 — Angles, rotation and recoil.",
    kind: "url",
    src: "https://www.y8.com/embed/gunspin",
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
