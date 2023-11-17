import { useState } from "react";

import SignUpForm from "./SignUpForm";
import SignUpSuccess from "./SignUpSuccess";

const NewsLetterSignUp = () => {
  const [email, setEmail] = useState("");
  const [currentState, setCurrentState] = useState("signup");

  return (
    <main className="w-screen h-screen bg-CharcoalGrey text-DarkSlateGrey grid place-items-center font-Roboto">
      {currentState === "success" ? (
        <SignUpSuccess email={email} setEmail={setEmail} setCurrentState={setCurrentState} />
      ) : (
        <SignUpForm
          email={email}
          setEmail={setEmail}
          setCurrentState={setCurrentState}
        />
      )}
    </main>
  );
};

export default NewsLetterSignUp;
