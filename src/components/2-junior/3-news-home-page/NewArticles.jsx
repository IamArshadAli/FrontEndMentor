/* eslint-disable react/prop-types */
import Article from "./Article";

const Divider = () => {
  return <div className="w-full h-[.5px] bg-GrayishBlue23 opacity-30 my-2"></div>;
};

const NewArticles = () => {
  return (
    <aside className="flex flex-col gap-6 h-fit px-6 py-8 bg-VeryDarkBlue23 my-10 md:my-0 mx-auto lg:max-w-[21.875rem]">
      <h2 className="text-SoftOrange text-4xl font-semibold">New</h2>
      <Article
        title="Hydrogen VS Electric Cars"
        titleStyle="text-white text-lg hover:text-SoftOrange"
        description="Will hydrogen-fueled cars ever catch up to EVs?"
        descriptionStyle="text-GrayishBlue23"
      />
      <Divider />
      <Article
        title="The Downsides of AI Artistry"
        titleStyle="text-white text-lg hover:text-SoftOrange"
        description="What are the possible adverse effects of on-demand AI image generation?"
        descriptionStyle="text-GrayishBlue23"
      />
      <Divider />
      <Article
        title="Is VC Funding Drying Up?"
        titleStyle="text-white text-lg hover:text-SoftOrange"
        description="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        descriptionStyle="text-GrayishBlue23"
      />
    </aside>
  );
};

export default NewArticles;
