/* eslint-disable react/prop-types */
import { successIcon } from "../../../assets/images/2-junior/1-newsletter-sign-up";

const SignUpSuccess = ({ email, setEmail, setCurrentState }) => {
  const handleDismiss = () => {
    setCurrentState("dismiss");
    setEmail("");
  };

  return (
    <section className="bg-White text-DarkSlateGrey flex flex-col justify-center px-8 py-10 h-screen md:h-fit w-screen md:w-fit md:max-w-sm md:rounded-3xl text-sm shadow-xl">
      <img src={successIcon} alt="Success Check Icon" className="w-12 h-12 mb-2 md:mb-4 mt-24 md:mt-0" />
      <h1 className="text-4xl md:text-5xl py-6 md:py-4 font-semibold">Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to{" "}
        <span className="font-semibold">{email}.</span> Please open it and click
        the button inside to confirm your subscription.
      </p>
      <button
        onClick={() => handleDismiss()}
        className="bg-DarkSlateGrey rounded-lg py-3 text-White mt-56 md:mt-8 hover:bg-Tomato hover:shadow-lg hover:shadow-Tomato"
      >
        Dismiss message
      </button>
    </section>
  );
};

export default SignUpSuccess;
