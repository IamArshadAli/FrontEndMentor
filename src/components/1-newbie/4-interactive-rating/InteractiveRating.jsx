/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  starIcon,
  thankYouIllustration,
} from "../../../assets/images/1-newbie/4-interactive-rating";

const InteractiveRating = () => {
  const [rating, setRating] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (rating < 1) {
      return window.alert("Please select a rating first!");
    }
    setShowThankYou(true);
  };

  const RatingCard = () => {
    const RateList = [1, 2, 3, 4, 5];
    return (
      <>
        <div className="bg-VeryDarkBlue14 p-3 rounded-full w-fit">
          <img src={starIcon} alt="Star Icon" className="w-4" />
        </div>
        <div className="text-xl font-bold mt-4">How did we do?</div>
        <div className="text-LightGrey text-sm mt-2">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </div>
        <form onSubmit={onSubmit}>
          <div className="flex justify-between my-4">
            {RateList.map((rate, index) => (
              <button type="button"
                key={index}
                className={`px-4 py-2 bg-VeryDarkBlue14 hover:bg-LightGrey text-LightGrey hover:text-White rounded-full ${
                  rating === rate && "bg-Orange hover:bg-Orange text-white"
                }`}
                onClick={() => setRating(rate)}
              >
                {rate}
              </button>
            ))}
          </div>
          <button
            type="submit"
            className="bg-Orange active:bg-White active:text-Orange uppercase active:font-bold tracking-wider rounded-full py-2 mt-2 w-full"
          >
            Submit
          </button>
        </form>
      </>
    );
  };

  const ThankYouCard = ({ userRating }) => {
    return (
      <div className="text-center my-2">
        <div className="flex justify-center">
          <img src={thankYouIllustration} alt="Thank You Illustration" />
        </div>
        <div className="flex justify-center items-center">
          <div className="text-sm px-4 py-1 text-Orange bg-VeryDarkBlue14 rounded-full my-4 w-fit">
            You selected {userRating} out of 5
          </div>
        </div>
        <div className="text-xl my-2">Thank You!</div>
        <div className="text-MediumGrey text-sm">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-VeryDarkBlue14">
      <div className="max-w-xs flex flex-col p-6 font-Overpass text-White bg-DarkBlue rounded-xl shadow-lg">
        {showThankYou ? <ThankYouCard userRating={rating} /> : <RatingCard />}
      </div>
    </div>
  );
};

export default InteractiveRating;
