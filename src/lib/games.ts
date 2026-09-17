export type Game = {
  slug: string;
  title: string;
  blurb: string;
  embed: string;
};

export const games: Game[] = [
  {
    slug: "snow-rider",
    title: "Snow Rider",
    blurb: "Lesson 1 — Slope and velocity on a downhill track.",
    embed: "https://snowrider3d.com/",
  },
  {
    slug: "basket-random",
    title: "Basket Random",
    blurb: "Lesson 2 — Probability and projectile arcs.",
    embed: "https://basket-random.io/",
  },
  {
    slug: "kart-bros",
    title: "Kart Bros",
    blurb: "Lesson 3 — Speed, distance and time.",
    embed: "https://kartbros.io/",
  },
  {
    slug: "smash-karts",
    title: "Smash Karts",
    blurb: "Lesson 4 — Coordinates and collision geometry.",
    embed: "https://smashkarts.io/",
  },
  {
    slug: "rocket-car",
    title: "Rocket Car",
    blurb: "Lesson 5 — Acceleration and quadratic motion.",
    embed: "https://rocketcars.io/",
  },
  {
    slug: "gun-spin",
    title: "Gun Spin",
    blurb: "Lesson 6 — Angles, rotation and recoil.",
    embed: "https://gunspin.io/",
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
