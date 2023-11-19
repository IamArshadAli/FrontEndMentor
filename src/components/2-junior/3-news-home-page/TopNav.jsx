/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";

import { logo } from "../../../assets/images/2-junior/3-news-home-page";
import {
  menuIcon,
  menuCloseIcon,
} from "../../../assets/images/2-junior/3-news-home-page";
import { useState } from "react";

const NavLinks = ({ className, linkStyle }) => {
  return (
    <ul className={`flex ${className}`}>
      <li className={linkStyle}>Home</li>
      <li className={linkStyle}>New</li>
      <li className={linkStyle}>Popular</li>
      <li className={linkStyle}>Trending</li>
      <li className={linkStyle}>Categories</li>
    </ul>
  );
};

const TopNav = () => {
  const [menu, setMenu] = useState(false);
  const isMobile = useMediaQuery({
    query: "(max-width:649px)",
  });
  return (
    <nav className="flex justify-between items-center w-full lg:max-w-[69.375rem]">
      <img src={logo} alt="Logo" className="cursor-pointer w-14 md:w-auto" />
      {!isMobile ? (
        <NavLinks
          className="flex-row gap-9"
          linkStyle="cursor-pointer text-DarkGrayishBlue23 hover:text-SoftRed23"
        />
      ) : (
        <>
          {menu ? (
            <>
              <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-40 z-10"></div>
              <div className="fixed top-0 right-0 z-20 h-screen bg-OffWhite min-w-[65vw] px-6 py-8 flex flex-col">
                <img
                  src={menuCloseIcon}
                  alt="Menu Close Icon"
                  onClick={() => setMenu(!menu)}
                  className="self-end"
                />
                <NavLinks
                  className="flex-col gap-6 mt-24"
                  linkStyle="cursor-pointer text-VeryDarkBlue23 hover:text-SoftRed23"
                />
              </div>
            </>
          ) : (
            <img
              src={menuIcon}
              alt="Menu Icon"
              onClick={() => setMenu(!menu)}
            />
          )}
        </>
      )}
    </nav>
  );
};

export default TopNav;
