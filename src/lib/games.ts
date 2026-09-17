export type Game = {
  slug: string;
  title: string;
  blurb: string;
} & ({ kind: "url"; src: string } | { kind: "html"; html: string });


const basketRandomHtml = `<!DOCTYPE html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/rz-6-5-z/bsrandm@main/style.css">
<style>html,body{margin:0;height:100%;background:#000;overflow:hidden}</style>
<script>
window.addEventListener("keydown", function(e){ if([32,37,38,39,40].indexOf(e.keyCode) > -1){ e.preventDefault(); } }, false);
<\/script>
</head><body>
<script src="https://cdn.jsdelivr.net/gh/rz-6-5-z/bsrandm@main/box2d.wasm.js"><\/script>
<script src="https://cdn.jsdelivr.net/gh/rz-6-5-z/bsrandm@main/scripts/supportcheck.js"><\/script>
<script src="https://cdn.jsdelivr.net/gh/rz-6-5-z/bsrandm@main/scripts/offlineclient.js"><\/script>
<script src="https://cdn.jsdelivr.net/gh/rz-6-5-z/bsrandm@main/scripts/main.js"><\/script>
</body></html>`;

const gunSpinHtml = `<!DOCTYPE html><html><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sidharthkiscool/monkeygg2.github.io@762aa28c099959eb0d64028560f0d61b195b02da/games/gunspin/TemplateData/style.css">
<style>html,body{margin:0;height:100%;background:#000;overflow:hidden}#unityContainer{width:100%;height:100%}#unityContainer canvas{width:100%!important;height:100%!important}</style>
</head><body>
<div id="unityContainer"></div>
<script src="https://cdn.jsdelivr.net/gh/sidharthkiscool/monkeygg2.github.io@762aa28c099959eb0d64028560f0d61b195b02da/games/gunspin/TemplateData/UnityProgress.js"><\/script>
<script src="https://cdn.jsdelivr.net/gh/sidharthkiscool/monkeygg2.github.io@762aa28c099959eb0d64028560f0d61b195b02da/games/gunspin/Build/UnityLoader.js"><\/script>
<script>
window.gameInstance = UnityLoader.instantiate("unityContainer", "https://cdn.jsdelivr.net/gh/RobiFet/workflow@99ef84fd04d7997590ab93310e15720466e6d7e1/composer/gs.json", {onProgress: UnityProgress});
<\/script>
</body></html>`;

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
    kind: "html",
    html: basketRandomHtml,
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
    kind: "html",
    html: gunSpinHtml,
  },
];

export const getGame = (slug: string) => games.find((g) => g.slug === slug);
