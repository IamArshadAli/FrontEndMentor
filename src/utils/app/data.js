import { N1, N2, N3, N4 } from "../../assets/images/app";

const LEVEL = {
  newbie: { name: "newbie", style: "text-DarkCyan border border-DarkCyan" },
  junior: { name: "junior", style: "text- border border-" },
  intermediate: { name: "intermediate", style: "text- border border-" },
  advanced: { name: "advanced", style: "text- border border-" },
};

const TAGS = {
  html: { name: "html", style: "text-CobaltBlue bg-CobaltBlue" },
  css: { name: "css", style: "text-GreenTeal bg-GreenTeal" },
  js: { name: "js", style: "text-OrangeYellow bg-OrangeYellow" },
};

export const AppData = [
  {
    image: N1,
    name: "Result Summary",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/result-summary`,
  },
  {
    image: N2,
    name: "Product Preview Card",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/product-card`,
  },
  {
    image: N3,
    name: "NFT Preview Card",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/nft-card`,
  },
  {
    image: N4,
    name: "Interactive Rating",
    tags: [TAGS.html, TAGS.css, TAGS.js],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/interactive-rating`,
  },
];
