import { data } from "../../../utils/1-newbie/1-results-summary/data";

const Result = () => {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-6 text-center bg-gradient-to-b from-SlateBlue to-RoyalBlue py-6 px-8 rounded-2xl text-White">
      <div className="text-sm font-bold text-LightLavender">Your Result</div>
      <div className="rounded-full py-4 px-6 md:py-8 md:px-10 mx-auto bg-gradient-to-t from-PersianBlue to-VioletBlue">
        <h1 className="text-3xl leading-snug font-extrabold">76</h1>
        <div className="text-xs text-LightLavender">of 100</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-semibold text-lg">Great</div>
        <div className="text-sm text-LightLavender">
          You scored higher than 65% of the people who have taken these tests.
        </div>
      </div>
    </div>
  );
};

const Summary = () => {
  return (
    <div className="flex-1 flex flex-col gap-4 md:gap-6 text-DarkGrayBlue py-4 px-6">
      <div className="font-bold">Summary</div>
      <div className="flex flex-col gap-4">
        {data.map((data, index) => (
          <div
            key={index}
            className={`${data.background} bg-opacity-10 flex justify-between p-2 rounded-md text-sm`}
          >
            <div className="flex space-x-2">
              <img src={data.icon} alt={data.category} className="w-4" />
              <div className={`${data.color} font-semibold`}>
                {data.category}
              </div>
            </div>
            <div className="flex">
              <div className="font-semibold">{data.score}</div>
              <div className="text-LightLavender font-semibold">
                &nbsp; / 100
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="font-semibold text-center text-PaleBlue bg-DarkGrayBlue py-2 rounded-full active:bg-gradient-to-b active:from-SlateBlue active:to-RoyalBlue active:text-White">
        Continue
      </button>
    </div>
  );
};

const ResultSummary = () => {
  return (
    <div className="w-screen h-screen bg-PaleBlue flex place-items-center">
      <div className="max-w-xs md:max-w-lg flex flex-col md:flex-row mx-auto bg-[White] rounded-2xl shadow-xl drop-shadow-xl">
        <Result />
        <Summary />
      </div>
    </div>
  );
};

export default ResultSummary;
