/* eslint-disable no-unused-vars */
import { useMediaQuery } from "react-responsive";

import {
  bgIntroPC,
  bgIntroMobile,
  errorIcon,
} from "../../../assets/images/1-newbie/15-intro-component";
import { useState } from "react";

const IntroComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width:649px)" });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name cannot be empty";
    if (!formData.lastName) newErrors.lastName = "Last Name cannot be empty";
    if(!formData.email) {
      newErrors.email = "Email cannot be empty";
    } else if (!/\$+@\$+\.\$+/.test(formData.email)) {
      newErrors.email = "Looks like this is not an email"
    }
    if (!formData.password) newErrors.password = "Password cannot be empty";
    setError(newErrors);
  };

  return (
    <main className="w-screen min-h-screen relative bg-Red115 font-Poppins grid place-items-center p-6">
      {/* Background Image */}
      <img
        src={isMobile ? bgIntroMobile : bgIntroPC}
        alt="Background Image"
        className="absolute inset-0 w-full md:max-h-screen"
      />
      {/* Container */}
      <div className="md:max-w-7xl py-12 flex flex-col md:flex-row gap-12 items-center justify-center z-10">
        {/* LEFT SIDE */}
        <section className="text-white text-center md:text-left">
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold md:max-w-md">
            Learn to code by watching others
          </h1>
          {/* Desc */}
          <p className="mt-6 md:mt-8 md:max-w-lg">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </section>
        {/* RIGHT SIDE */}
        <section className="flex flex-col items-center justify-center gap-5">
          {/* Trial Button */}
          <button className="bg-Blue115 py-5 md:py-4 px-16 md:px-24 w-full text-white rounded-xl border-8 border-b-red-600 border-x-0 border-t-0 border-opacity-60 text-sm">
            <span className="font-semibold">Try it free 7 days</span> then
            $20/mo. thereafter
          </button>
          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-White rounded-xl p-6 md:py-8 flex flex-col gap-4 border-8 border-b-red-600 border-x-0 border-t-0 border-opacity-75 w-full"
          >
            {/* First Name */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="placeholder:font-bold outline-none"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              {error.firstName && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {error.firstName && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {error.firstName}
              </p>
            )}
            {/* Last Name */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="placeholder:font-bold outline-none"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {error.lastName && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {error.lastName && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {error.lastName}
              </p>
            )}
            {/* Email */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="placeholder:font-bold outline-none"
                value={formData.email}
                onChange={handleInputChange}
              />
              {error.email && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {error.email && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {error.email}
              </p>
            )}
            {/* Password */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="placeholder:font-bold outline-none"
                value={formData.password}
                onChange={handleInputChange}
              />
              {error.password && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {error.password && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {error.password}
              </p>
            )}
            {/* SUBMIT */}
            <button
              type="submit"
              className="uppercase bg-Green hover:bg-opacity-80 p-4 rounded-lg font-semibold text-white tracking-wider border-4 border-b-green-600 border-x-0 border-t-0"
            >
              Claim your free trial
            </button>
            {/* T&C */}
            <p className="text-GrayishBlue115 text-sm md:text-[.60rem] text-center">
              By clicking the button, you are agreeing to our{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-Red115 font-semibold"
              >
                Terms and Services
              </a>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default IntroComponent;
