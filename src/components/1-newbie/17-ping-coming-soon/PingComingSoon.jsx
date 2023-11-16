import { useState } from "react";
import {
  dashboardIllustration,
  logo,
} from "../../../assets/images/1-newbie/17-ping-coming-soon";

import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";

const PingComingSoon = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Email cannot be empty");
    } else if (!/\$+@\$+\.\$+/.test(email)) {
      setError("Please provide a valid email address");
    }
  };
  return (
    <div className="w-screen h-screen grid place-items-center">
      <div className="max-w-sm md:max-w-xl mx-6 flex flex-col justify-center items-center font-LibreFranklin">
        <img src={logo} alt="Ping Logo" className=" mb-4" />
        <h1 className="text-2xl font-bold my-4">
          <span className="font-light">We are launching </span>soon!
        </h1>
        <p className="font-light mb-4">Subscribe and get notified</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-3 my-4 px-4 md:px-0 w-full"
        >
          <div className="flex flex-col flex-1 gap-[.15rem]">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email address..."
              className={`flex-1 border ${
                error ? "border-LightRed117" : "border-Gray"
              } rounded-full px-6 py-2 placeholder:font-light placeholder:text-Gray opacity-70`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <p className="text-LightRed117 text-sm italic ml-10">{error}</p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-full px-6 md:px-14 py-2 max-h-10 bg-Blue117 shadow-PaleBlue117 hover:bg-PaleBlue117 hover:shadow-sm shadow-lg text-white font-semibold"
          >
            Notify Me
          </button>
        </form>
        <img
          src={dashboardIllustration}
          alt="dashboard illustration"
          className="my-6"
        />
        <div className="my-6 flex gap-4 justify-center items-center">
          <TiSocialFacebook className="text-Blue117 hover:text-white border border-Gray border-opacity-40 rounded-full w-9 h-9 p-2 hover:bg-Blue117 cursor-pointer" />
          <TiSocialTwitter className="text-Blue117 hover:text-white border border-Gray border-opacity-40 rounded-full w-9 h-9 p-2 hover:bg-Blue117 cursor-pointer" />
          <AiOutlineInstagram className="text-Blue117 hover:text-white border border-Gray border-opacity-40 rounded-full w-9 h-9 p-2 hover:bg-Blue117 cursor-pointer" />
        </div>
        <p className="text-Gray text-sm">
          &copy; Copyright Ping: All rights reserved
        </p>
      </div>
    </div>
  );
};

export default PingComingSoon;
