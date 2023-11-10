import {
  arrowDownIcon,
  bgPatternMobile,
  bgPatternPC,
  boxIllustration,
  womanOnlineIllustrationMobile,
  womanOnlineIllustrationPC,
} from "../../../assets/images/1-newbie/10-faq-accordion";

import { useMediaQuery } from "react-responsive";

const FAQS = [
  {
    que: "How many team members can I invite?",
    ans: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    que: "What is the maximum file upload size?",
    ans: "No more than 2GB. All files in your account must fit your allotted storage space.",
  },

  {
    que: "How do I reset my password?",
    ans: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },

  {
    que: "Can I cancel my subscription?",
    ans: "Yes! Send us a message and we’ll process your request no questions asked.",
  },

  {
    que: "Do you provide additional support?",
    ans: "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

const Accordion = () => {
  return (
    <>
      {FAQS.map((faq, index) => (
        <details key={index} className="w-lg my-2 text-VeryDarkGrayishBlue">
          <summary className="flex justify-between text-sm cursor-pointer hover:font-semibold hover:text-SoftRed mb-2">
            <div className="after:content-['+'] after:absolute after:right-5 after:text-2xl     after:text-gray-400 hover:after:text-gray-950 peer-checked:after:transform peer-checked:after:rotate-180">
              {faq.que}
            </div>
            {/* <img
              src={arrowDownIcon}
              alt="Arrow Down Icon"
              className="w-[0.80rem] h-[0.80rem]"
            /> */}
          </summary>
          <p className="text-DarkGrayishBlue110 text-sm mb-3 ">{faq.ans}</p>
          <div className="w-full h-[1px] bg-LightGrayishBlue"></div>
        </details>
      ))}
    </>
  );
};

const FAQAccordian = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:596px)",
  });
  return (
    <div className="w-screen h-screen bg-gradient-to-b from-SoftViolet to-SoftBlue110 grid place-items-center">
      <div className="max-w-sm md:max-w-5xl bg-White px-6 md:px-0 rounded-xl shadow-xl font-KumbhSans md:flex md:gap-12 relative">
        {!isMobile && (
          <img
            src={boxIllustration}
            alt="box Illustration"
            className="z-30 absolute top-0 -left-[22%]"
          />
        )}
        <div className="flex flex-1 flex-col justify-center items-center md:overflow-hidden">
          <img
            src={
              isMobile
                ? womanOnlineIllustrationMobile
                : womanOnlineIllustrationPC
            }
            alt="Woman Online Illustration"
            className="w-full z-20 -mt-[8.25rem] md:-ml-[9rem]"
          />
          <img
            src={isMobile ? bgPatternMobile : bgPatternPC}
            alt="Shadow Pattern"
            className="w-full md:scale-150 z-10 -mt-[6rem] md:-mt-[25rem] md:-ml-[22rem]"
          />
        </div>
        <div className="flex flex-col flex-1 items-center md:items-start p-4 md:pl-0 md:pr-12 md:py-12">
          <div className="font-bold text-2xl mb-4 md:mb-6">FAQ</div>
          <Accordion />
          <div className="tab px-5 py-2 bg-white shadow-lg relative mb-2 rounded-md">
            <input
              type="radio"
              name="faq"
              id="faq1"
              className="appearance-none peer"
            ></input>
            <label
              for="faq1"
              className="flex items-center cursor-pointer font-semibold text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl     after:text-gray-400 hover:after:text-gray-950 peer-checked:after:transform peer-checked:after:rotate-45"
            >
              <h2 className=" w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm mr-3">
                01
              </h2>
              <h3>What is TailWindCSS ?</h3>
            </label>
            <div className="answer content mt-5 h-0 transition ease-in-out delay-300 overflow-hidden peer-checked:h-full">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit adipisci veniam reiciendis laudantium voluptatem in
                incidunt! Quod doloribus nostrum autem!
              </p>
            </div>
          </div>
          <div className="tab px-5 py-2 bg-white shadow-lg relative mb-2 rounded-md">
            <input
              type="radio"
              name="faq"
              id="faq2"
              className="appearance-none peer"
            ></input>
            <label
              for="faq2"
              className="flex items-center cursor-pointer font-semibold text-lg after:content-['+'] after:absolute after:right-5 after:text-2xl     after:text-gray-400 hover:after:text-gray-950 peer-checked:after:transform peer-checked:after:rotate-45"
            >
              <h2 className=" w-8 h-8 bg-cyan-300 text-white flex justify-center items-center rounded-sm mr-3">
                01
              </h2>
              <h3>What is TailWindCSS ?</h3>
            </label>
            <div className="answer content mt-5 h-0 transition ease-in-out delay-300 overflow-hidden peer-checked:h-full">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit adipisci veniam reiciendis laudantium voluptatem in
                incidunt! Quod doloribus nostrum autem!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQAccordian;
