import { N1, N2, N3, N4, N5 } from "../../assets/images/app";

import { LEVEL, TAGS, ROUTES } from "./constants";

export const AppData = [
  {
    image: N1,
    name: "Result Summary",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.resultSummary}`,
  },
  {
    image: N2,
    name: "Product Preview Card",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.productCard}`,
  },
  {
    image: N3,
    name: "NFT Preview Card",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.nftCard}`,
  },
  {
    image: N4,
    name: "Interactive Rating",
    tags: [TAGS.html, TAGS.css, TAGS.js],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.interactiveRating}`,
  },
  {
    image: N5,
    name: "Stats Preview Card",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.statsCard}`,
  },
];
