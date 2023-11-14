/* eslint-disable no-unused-vars */
import { useMediaQuery } from "react-responsive";

import {
  bgPatternPC,
  heroPC,
  heroMobile,
  arrowIcon,
  errorIcon,
  logo,
} from "../../../assets/images/1-newbie/14-base-apparel";
import { useEffect, useState } from "react";

const BaseApparel = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const isMobile = useMediaQuery({
    query: "(max-width:649px)",
  });

  useEffect(() => {
    const email = document.getElementById("email");
    const form = document.getElementById("form");
    email.addEventListener("input", (e) => {
      if (email.validity.valid) {
        setError(false);
        setErrorMessage("");
      } else {
        handleError();
      }
    });
    form.addEventListener("submit", (e) => {
      if (!email.validity.valid) handleError();
      e.preventDefault();
    });
    const handleError = () => {
      setError(true);
      if (email.validity.valueMissing) setErrorMessage("Please enter a email");
      else if (email.validity.typeMismatch)
        setErrorMessage("Please provide a valid email");
    };
  }, []);
  return (
    <div className="max-w-screen max-h-screen font-JosefinSans overflow-hidden flex flex-col md:flex-row relative bg-gradient-to-br from-[#FFFFFF] to-[#FFF5F5] md:bg-none">
      <img src={logo} alt="Base Apparel Logo" className="w-28 md:w-36 m-6 md:mx-40 md:mt-14 self-start md:fixed" />
      <img
        src={isMobile ? heroMobile : heroPC}
        alt="Hero Image"
        className="object-cover object-center md:order-2"
      />
      <section className="relative flex flex-col md:justify-center md:px-40 px-8 text-center md:text-left md:flex-1">
        {!isMobile && <img
          src={bgPatternPC}
          alt="Background Pattern"
          className="absolute inset-0 -z-10 w-full h-full"
        />}
        <div className="max-w-md">
          <h1 className="text-4xl md:text-7xl font-bold uppercase tracking-[.8rem] text-DarkGrayishRed my-5  md:mb-10">
            <span className="font-light text-DesaturatedRed">We&apos;re</span>{" "}
            coming soon
          </h1>
          <p className="text-DesaturatedRed text-sm md:text-base">
            Hello fellow shoppers! We&apos;re currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <form id="form" className="mt-6 md:mt-12">
            <div className="border-2 border-DesaturatedRed rounded-full flex justify-between items-center">
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                className="bg-transparent ml-4 placeholder:text-DesaturatedRed text-DarkGrayishRed outline-none"
                autoComplete="off"
                required
              />
              <div className="flex space-x-3 items-center">
                {error && (
                  <img src={errorIcon} alt="error icon" className="w-6 h-6" />
                )}
                <button
                  type="submit"
                  className="bg-gradient-to-br from-[#F8BFBF] to-[#EE8C8C] px-6 md:px-10 py-3 md:py-5 rounded-full shadow-xl hover:drop-shadow-xl grid place-items-center"
                >
                  <img
                    src={arrowIcon}
                    alt="Submit Button with Arrow Icon"
                    className="h-3"
                  />
                </button>
              </div>
            </div>
            {errorMessage && (
              <p className="text-SoftRed114 ml-4 text-left">{errorMessage}</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
};

export default BaseApparel;
