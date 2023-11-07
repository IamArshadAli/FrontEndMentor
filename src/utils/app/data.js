import { N1, N2, N3, N4, N5, N6, N7, N8 } from "../../assets/images/app";

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
  {
    image: N6,
    name: "Order Summary",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.orderSummary}`,
  },
  {
    image: N7,
    name: "QR Code",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.qrCode}`,
  },
  {
    image: N8,
    name: "Three Column Card",
    tags: [TAGS.html, TAGS.css],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/${ROUTES.newbie.threeColumnCard}`,
  },
];
