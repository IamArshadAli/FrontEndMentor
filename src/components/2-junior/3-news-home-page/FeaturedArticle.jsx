import {
  web3DesktopImage,
  web3MobileImage,
} from "../../../assets/images/2-junior/3-news-home-page";

const FeaturedArticle = () => {
  return (
    <article className="flex flex-col gap-4">
      <picture className="">
        <source
          media="(min-width: 650px)"
          srcSet={web3DesktopImage}
        />
        <img
          src={web3MobileImage}
          alt="Web 3 Image"
          className="object-cover object-center md:max-w-[45.625rem]"
        />
      </picture>
      <div className="flex flex-col md:flex-row justify-between gap-6 ">
        <h1 className="text-4xl md:text-5xl font-extrabold max-w-[18rem] self-center">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex flex-col justify-between gap-6 max-w-[23rem] md:mr-2">
          <p className="text-DarkGrayishBlue23">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="px-6 md:px-10 py-3 md:py-4 text-OffWhite bg-SoftRed23 hover:bg-VeryDarkBlue23 uppercase tracking-[0.25em] w-fit font-semibold text-xs">
            Read more
          </button>
        </div>
      </div>
    </article>
  );
};

export default FeaturedArticle;
