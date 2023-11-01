import { N1, N2 } from "../../assets/images/app";

const LEVEL = {
  newbie: { name: "newbie", style: "text-DarkCyan border border-DarkCyan" },
  junior: { name: "junior", style: "text- border border-" },
  intermediate: { name: "intermediate", style: "text- border border-" },
  advanced: { name: "advanced", style: "text- border border-" },
};

export const AppData = [
  {
    image: N1,
    name: "Result Summary",
    tags: [
      { name: "html", style: "text-CobaltBlue bg-CobaltBlue" },
      { name: "css", style: "text-GreenTeal bg-GreenTeal" },
    ],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/result-summary`,
  },
  {
    image: N2,
    name: "Product Preview Card",
    tags: [
      { name: "html", style: "text-CobaltBlue bg-CobaltBlue" },
      { name: "css", style: "text-GreenTeal bg-GreenTeal" },
    ],
    level: LEVEL.newbie,
    link: `${LEVEL.newbie.name}/product-card`,
  },
];
