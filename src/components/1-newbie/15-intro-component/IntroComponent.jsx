/* eslint-disable no-unused-vars */
import { useMediaQuery } from "react-responsive";

import {
  bgIntroPC,
  bgIntroMobile,
  errorIcon,
} from "../../../assets/images/1-newbie/15-intro-component";
import { useEffect, useState } from "react";

const IntroComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width:649px)" });
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })
  const [error, setError] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });
  const [errorMessage, setErrorMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    const Form = document.getElementById("form");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    //* EMAIL VALDATION
    email.addEventListener("input", (e) => {
      if (email.validity.valid) {
        setError({ ...error, email: false });
        setErrorMessage({
          ...errorMessage,
          email: "",
        });
      } else {
        handleEmailError();
      }
    });
    const handleEmailError = () => {
      setError({ ...error, email: true });
      if (email.validity.valueMissing)
        setErrorMessage({ ...errorMessage, email: "Email cannot be empty" });
      else if (email.validity.typeMismatch)
        setErrorMessage({
          ...errorMessage,
          email: "Looks like this is not an email",
        });
    };
    const handleFirstNameError = () => {
      if (!form.firstName) {
        console.log("first");
        setError({ ...error, firstName: true });
        setErrorMessage({
          ...errorMessage,
          firstName: "First Name cannot be empty",
        });
      } else {
        setError({ ...error, firstName: false });
        setErrorMessage({ ...errorMessage, firstName: "" });
      }
    };
    const handleLastNameError = () => {
      if (!form.lastName) {
        console.log("last");
        setError({ ...error, lastName: true });
        setErrorMessage({
          ...errorMessage,
          lastName: "Last Name cannot be empty",
        });
      } else {
        setError({ ...error, lastName: false });
        setErrorMessage({ ...errorMessage, lastName: "" });
      }
    };
    const handlePasswordError = () => {
      if (!form.password) {
        console.log("pwd");
        setError({ ...error, password: true });
        setErrorMessage({
          ...errorMessage,
          password: "Password cannot be empty",
        });
      } else {
        setError({ ...error, password: false });
        setErrorMessage({ ...errorMessage, password: "" });
      }
    };
    //* FORM VALIDATION
    Form.addEventListener("submit", (e) => {
      if (!email.validity.valid) handleEmailError();
      handleFirstNameError();
      handleLastNameError();
      handlePasswordError();
      e.preventDefault();
    });
  }, [error, errorMessage, form.firstName, form.lastName, form.password]);

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
            id="form"
            className="bg-White rounded-xl p-6 md:py-8 flex flex-col gap-4 border-8 border-b-red-600 border-x-0 border-t-0 border-opacity-75 w-full"
          >
            {/* First Name */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="placeholder:font-bold outline-none"
                value={form.firstName}
                onChange={(e)=>setForm({...form, firstName:e.target.value})}
              />
              {error.firstName && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {errorMessage.firstName && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {errorMessage.firstName}
              </p>
            )}
            {/* Last Name */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="placeholder:font-bold outline-none"
                value={form.lastName}
                onChange={(e)=>setForm({...form, lastName:e.target.value})}
              />
              {error.lastName && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {errorMessage.lastName && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {errorMessage.lastName}
              </p>
            )}
            {/* Email */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="placeholder:font-bold outline-none"
                value={form.email}
                onChange={(e)=>setForm({...form, email:e.target.value})}
              />
              {error.email && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {errorMessage.email && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {errorMessage.email}
              </p>
            )}
            {/* Password */}
            <div className="flex justify-between items-center border-2 rounded-lg p-4 md:px-6">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="placeholder:font-bold outline-none"
                value={form.password}
                onChange={(e)=>setForm({...form, password:e.target.value})}
              />
              {error.password && (
                <img src={errorIcon} alt="error icon" className="w-6 h-6" />
              )}
            </div>
            {errorMessage.password && (
              <p className="text-xs text-right text-Red115 italic -mt-4 mr-1">
                {errorMessage.password}
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
