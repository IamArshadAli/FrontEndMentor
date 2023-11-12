/* eslint-disable react/prop-types */
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import {
  michelleAvatar,
  drawersImage,
} from "../../../assets/images/1-newbie/12-article-preview";

import {
  FacebookIcon,
  PinterestIcon,
  ShareIcon,
  TwitterIcon,
} from "../../../utils/1-newbie/12-article-preview/svgIcons";

const ArticlePreview = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:649px)",
  });

  const [toggleShare, setToggleShare] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const ShareButton = () => {
    return (
      <button
        className="rounded-full w-8 h-8 md:w-9 md:h-9 p-2 bg-DesaturatedDarkBlue flex justify-center items-center"
        onClick={() => {
          setToggleShare(!toggleShare);
          if(!isMobile) setShowTooltip(!showTooltip);
        }}
      >
        <ShareIcon />
      </button>
    );
  };

  const Profile = ({ name, image, date }) => {
    return (
      <div className="flex justify-between items-center text-sm">
        <div className="flex space-x-3 items-center">
          <img src={image} alt={name} className="rounded-full w-10 h-10" />
          <div>
            <p className="font-bold">{name}</p>
            <p className="text-GrayishBlue112">{date}</p>
          </div>
        </div>
        <div className="group relative">
          {showTooltip && !isMobile && toggleShare && (
            <div className="absolute z-10 -top-[4.5rem] -left-[6rem]">
              <SocialIcons style="after:absolute after:-bottom-2 after:left-[45%] after:w-0 after:h-0 after:border-l-8 after:border-l-transparent after:border-t-8 after:border-t-VeryDarkGrayishBlue112 after:border-r-8 after:border-r-transparent" />
            </div>
          )}
          <ShareButton />
        </div>
      </div>
    );
  };

  const SocialIcons = ({ style }) => {
    return (
      <div
        className={`flex justify-between items-center px-8 py-3 md:px-10 md:py-4 bg-VeryDarkGrayishBlue112 rounded-b-xl md:rounded-xl md:shadow-xl ${style}`}
      >
        <div className="flex space-x-6 md:space-x-4 justify-center items-center">
          <p className="tracking-widest text-GrayishBlue112 uppercase text-sm">
            Share
          </p>
          <FacebookIcon />
          <TwitterIcon />
          <PinterestIcon />
        </div>
        {isMobile && <ShareButton />}
      </div>
    );
  };
  return (
    <div className="w-screen h-screen grid place-items-center bg-LightGrayishBlue112">
      <div className="max-w-sm md:max-w-3xl flex flex-col md:flex-row rounded-xl shadow-xl font-Manrope text-DesaturatedDarkBlue bg-White">
        <img
          src={drawersImage}
          alt="Drawers Image"
          className="w-full object-cover object-center md:max-w-xs rounded-t-xl md:rounded-tr-none md:rounded-l-xl"
        />
        <div
          className={`px-8 pt-10 ${
            !toggleShare && " pb-6"
          } md:p-10 flex flex-col gap-4`}
        >
          <h3 className="text-xl font-bold">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h3>
          <p className="text-GrayishBlue112 text-sm">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
          <div>
            {isMobile && !toggleShare && (
              <Profile
                name="Michelle Appleton"
                date="28 Jun 2020"
                image={michelleAvatar}
              />
            )}
            {!isMobile && (
              <Profile
                name="Michelle Appleton"
                date="28 Jun 2020"
                image={michelleAvatar}
              />
            )}
          </div>
        </div>
        {toggleShare && isMobile && <SocialIcons />}
      </div>
    </div>
  );
};

export default ArticlePreview;
