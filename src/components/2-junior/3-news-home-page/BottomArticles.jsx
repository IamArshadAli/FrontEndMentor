import Article from "./Article";

import {
  retroPcsImage,
  topLaptopsImage,
  gamingGrowthImage,
} from "../../../assets/images/2-junior/3-news-home-page";

const BottomArticles = () => {
  return (
    <section className="flex flex-col md:flex-row flex-wrap lg:flex-nowrap md:mt-4 justify-start lg:justify-evenly gap-6 max-w-[69.375rem]">
      <Article
        index="01"
        title="Reviving Retro PCs"
        titleStyle="text-VeryDarkBlue23 text-lg hover:text-SoftRed23"
        description="What happens when old PCs are given modern upgrades?"
        descriptionStyle="text-DarkGrayishBlue23"
        image={retroPcsImage}
      />
      <Article
        index="02"
        title="Top 10 Laptops of 2022"
        titleStyle="text-VeryDarkBlue23 text-lg hover:text-SoftRed23"
        description="Our best picks for various needs and budgets."
        descriptionStyle="text-DarkGrayishBlue23"
        image={topLaptopsImage}
      />
      <Article
        index="03"
        title="The Growth of Gaming"
        titleStyle="text-VeryDarkBlue23 text-lg hover:text-SoftRed23"
        description="How the pandemic has sparked fresh opportunities."
        descriptionStyle="text-DarkGrayishBlue23"
        image={gamingGrowthImage}
      />
    </section>
  );
};

export default BottomArticles;
