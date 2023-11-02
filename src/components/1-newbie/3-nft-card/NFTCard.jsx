import { useState } from "react";
import {
  clockIcon,
  avatarImg,
  equilibriumImg,
  ethereumIcon,
  viewIcon,
} from "../../../assets/images/1-newbie/3-nft-card";

const NFTCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="w-screen h-screen bg-VeryDarkBlueMainBG flex justify-center items-center">
      <div className="max-w-xs flex flex-col gap-4 text-White font-Outfit bg-VeryDarkBlueCardBG rounded-lg p-4 drop-shadow-xl">
        <div className="relative">
          <img
            src={equilibriumImg}
            alt="Equilibrium Image"
            className="rounded-lg cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
          {isHovered && (
            <div className="absolute inset-0 flex justify-center items-center bg-Cyan bg-opacity-50 cursor-pointer rounded-lg">
              <img
                src={viewIcon}
                alt="Equilibrium Image"
              />
            </div>
          )}
        </div>
        <div className="text-xl font-bold hover:text-Cyan cursor-pointer">
          Equilibrium #3429
        </div>
        <div className="text-SoftBlue font-light">
          Our Equilibrium collection promotes balance and calm.
        </div>
        <div className="flex justify-between py-2">
          <div className="flex space-x-2 items-center">
            <img src={ethereumIcon} alt="Ethereum Icon" className="h-4" />
            <div className="text-Cyan font-semibold">0.041 ETH</div>
          </div>
          <div className="flex space-x-2 items-center">
            <img src={clockIcon} alt="Clock Icon" className="h-4" />
            <div className="text-SoftBlue font-light">3 days left</div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-VeryDarkBlueLine"></div>
        <div className="flex space-x-4 items-center py-2">
          <img
            src={avatarImg}
            alt="Avatar Image"
            className="w-8 border-2 rounded-full"
          />
          <div className="text-SoftBlue font-light">
            Creation of{" "}
            <span className="text-White hover:text-Cyan cursor-pointer">
              Jules Wyvern
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
