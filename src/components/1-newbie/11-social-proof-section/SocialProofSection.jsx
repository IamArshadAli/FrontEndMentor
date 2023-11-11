/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";

import {
  bgPatternBottomPC,
  bgPatternBottomMobile,
  bgPatternTopPC,
  bgPatternTopMobile,
  starIcon,
  anneImage,
  coltonImage,
  ireneImage,
} from "../../../assets/images/1-newbie/11-social-proof";

const SocialProofSection = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:649px)",
  });

  const Rating = ({ title, offset }) => {
    const stars = [1, 2, 3, 4, 5];
    return (
      <div
        className={`flex flex-col md:flex-row w-full justify-center md:justify-start items-center gap-2 md:gap-6 px-6 py-3 bg-SoftPink bg-opacity-10 rounded-md ${
          !isMobile && offset
        } text-sm`}
      >
        <div className="flex gap-2 items-center justify-center">
          {stars.map((star) => (
            <img
              key={star}
              src={starIcon}
              alt="star icon"
              className="w-4 h-4"
            />
          ))}
        </div>
        <p className="text-VeryDarkMagenta font-semibold">
          Rated 5 Stars in {title}
        </p>
      </div>
    );
  };

  const Review = ({ photo, name, message, offset }) => {
    return (
      <div
        className={`flex flex-col gap-4 p-6 h-full bg-VeryDarkMagenta rounded-md ${
          !isMobile && offset
        } text-sm text-LightGrayishMagenta md:max-w-xs`}
      >
        <div className="flex space-x-3 items-center">
          <img src={photo} alt={name} className="rounded-full w-10 md:w-12" />
          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-SoftPink">Verified Buyer</p>
          </div>
        </div>
        <p>&quot; {message} &quot;</p>
      </div>
    );
  };
  return (
    <div className="w-screen min-h-screen grid place-items-center bg White relative">
      {/* BG Patterns */}
      <img
        src={isMobile ? bgPatternBottomMobile : bgPatternBottomPC}
        alt="BG Bottom Pattern"
        className="absolute bottom-0 right-0 w-full md:w-auto"
      />
      <img
        src={isMobile ? bgPatternTopMobile : bgPatternTopPC}
        alt="BG Pattern Top"
        className="absolute top-0 left-0 w-full md:w-auto"
      />
      {/* Design */}
      <div className="flex flex-col gap-12 font-LeagueSpartan max-w-5xl px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between gap-6 w-full">
          <div className="text-center md:text-start max-w-sm">
            <h1 className="text-5xl font-bold text-VeryDarkMagenta">
              10,000+ of our users love our products.
            </h1>
            <p className="text-DarkGrayishMagenta mt-4 mx-4 md:mx-0">
              We only provide great products combined with excellent customer
              service. See what our satisfied customers are saying about our
              services.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-0 md:mt-8">
            <Rating title="Reviews" offset="ml-0" />
            <Rating title="Report Guru" offset="ml-6" />
            <Rating title="BestTech" offset="ml-12" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Review
            photo={coltonImage}
            name="Colton Smith"
            message="We needed the same printed design as the one we had ordered a week prior.
    Not only did they find the original order, but we also received it in time.
    Excellent!"
            offset="mt-0"
          />
          <Review
            photo={ireneImage}
            name="Irene Roberts"
            message="Customer service is always excellent and very quick turn around. Completely
    delighted with the simplicity of the purchase and the speed of delivery."
            offset="mt-6"
          />
          <Review
            photo={anneImage}
            name="Anne Wallace"
            message="Put an order with this company and can only praise them for the very high
    standard. Will definitely use them again and recommend them to everyone!"
            offset="mt-12"
          />
        </div>
      </div>
    </div>
  );
};

export default SocialProofSection;
