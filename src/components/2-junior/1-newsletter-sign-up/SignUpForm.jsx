/* eslint-disable react/prop-types */
import { useState } from "react";

import {
  listIcon,
  signUpIllustrationPc,
  signUpIllustrationMobile,
} from "../../../assets/images/2-junior/1-newsletter-sign-up";

const SignUpForm = ({ email, setEmail, setCurrentState }) => {
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return setError("Email is required");
    if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email))
      return setError("Valid email required");
    setCurrentState("success");
  };

  return (
    <div className="flex flex-col md:flex-row-reverse overflow-hidden md:max-w-3xl md:p-4 md:gap-6 bg-White rounded-3xl shadow-xl">
      <picture>
        <source media="(min-width: 650px)" srcSet={signUpIllustrationPc} />
        <img src={signUpIllustrationMobile} alt="Sign Up Illustration" />
      </picture>
      <section className="flex flex-col justify-center px-4 pt-6 md:text-sm">
        <h1 className="text-4xl md:text-5xl font-bold">Stay updated!</h1>
        <p className="py-4">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="flex flex-col gap-3">
          <li className="flex space-x-3 justify-start items-start">
            <img src={listIcon} alt="List Check Icon" />
            <div>Product discovery and building what matters</div>
          </li>
          <li className="flex space-x-3 justify-start items-start">
            <img src={listIcon} alt="List Check Icon" />
            <div>Measuring to ensure updates are a success</div>
          </li>
          <li className="flex space-x-3 justify-start items-start">
            <img src={listIcon} alt="List Check Icon" />
            <div>And much more!</div>
          </li>
        </ul>
        <form className="py-4 md:pt-8 md:max-w-sm" onSubmit={handleSubmit}>
          <div className="flex justify-between font-semibold text-sm mb-1">
            <label htmlFor="email">Email address</label>
            {error && <p className="text-Tomato">{error}</p>}
          </div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="email@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`border border-Grey w-full px-6 py-3 outline-none focus:border-DarkSlateGrey rounded-lg ${
              error &&
              "border-Tomato bg-Tomato bg-opacity-20 text-Tomato placeholder:text-Tomato"
            }`}
          />
          <button
            type="submit"
            className="mt-4 py-3 px-6 text-White font-semibold bg-DarkSlateGrey rounded-lg w-full hover:bg-Tomato hover:shadow-lg hover:shadow-Tomato"
          >
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUpForm;
