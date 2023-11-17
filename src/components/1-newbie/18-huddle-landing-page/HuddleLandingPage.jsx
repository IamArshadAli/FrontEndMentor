import {
  bgPC,
  bgMobile,
  mockupIllustration,
  logo,
} from "../../../assets/images/1-newbie/18-huddle-landing-page";

import { IoLogoTwitter, IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebook } from "react-icons/ti";

const HuddleLandingPage = () => {
  return (
    <main className="w-screen min-h-screen relative bg-Violet md:overflow-hidden px-9 py-6 md:px-16 md:py-8">
      {/* Background */}
      <picture className="absolute inset-0 top-0 z-0">
        <source media="(min-width: 649px)" srcSet={bgPC} className="z-0" />
        <img src={bgMobile} alt="Background" className="z-0" />
      </picture>
      {/* Huddle Logo */}
      <img src={logo} alt="Huddle Logo" className="w-32 md:w-40 z-50" />
      <div className="flex flex-col md:flex-row items-center mt-16 md:mt-28">
        <div className="flex flex-col md:flex-row items-center gap-12 z-50 text-white">
          {/* Mockup */}
          <img src={mockupIllustration} alt="Mockup Illustration" />
          {/* Right Side */}
          <section className="font-OpenSans text-center md:text-left">
            {/* Heading */}
            <h1 className="text-2xl md:text-[2.5rem] md:leading-relaxed md:max-w-lg font-semibold font-Poppins tracking-normal">
              Build The Community Your Fans Will Love
            </h1>
            {/* Description */}
            <p className="py-4 md:pr-12 font-light md:max-w-lg opacity-90 md:opacity-80">
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            {/* Button */}
            <button className="text-Violet bg-white rounded-full py-2 md:py-3 px-20 md:px-14 hover:text-white hover:bg-SoftMagenta text-sm mb-6 md:mt-1 shadow-lg drop-shadow-lg">
              Register
            </button>
            {/* Social Icons */}
            <div className="flex gap-3 md:gap-5 justify-center md:justify-end items-center py-12 md:pt-32 md:pr-12">
              <TiSocialFacebook className="border border-white p-2 w-8 h-8 md:w-9 md:h-9 rounded-full hover:text-SoftMagenta hover:border-SoftMagenta cursor-pointer" />
              <IoLogoTwitter className="border border-white p-2 w-8 h-8 md:w-9 md:h-9 rounded-full hover:text-SoftMagenta hover:border-SoftMagenta cursor-pointer" />
              <IoLogoInstagram className="border border-white p-2 w-8 h-8 md:w-9 md:h-9 rounded-full hover:text-SoftMagenta hover:border-SoftMagenta cursor-pointer" />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default HuddleLandingPage;
