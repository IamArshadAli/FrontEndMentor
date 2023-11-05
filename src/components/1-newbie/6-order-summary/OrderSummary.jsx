import {
  musicIcon,
  patternBgMobile,
  patternBgPC,
  heroIllustration,
} from "../../../assets/images/1-newbie/6-order-summary";

const OrderSummary = () => {
  return (
    <div className="w-screen h-screen bg-PaleBlue16">
      {/* BG Pattern */}
      <div className="bg-PaleBlue16">
        <img
          src={patternBgPC}
          alt="Pattern Background Desktop"
          className="w-full hidden md:block"
        />
        <img
          src={patternBgMobile}
          alt="Pattern Background Mobile"
          className="w-full md:hidden"
        />
      </div>
      {/* Card */}
      <div className="max-w-[17rem] md:max-w-xs bg-VeryPaleBlue rounded-xl overflow-hidden shadow-xl font-RedHatDisplay fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src={heroIllustration} alt="Hero Illustration" />
        <div className="flex flex-col justify-center items-center gap-4 py-6 px-7 md:px-8">
          <div className="font-black text-lg">Order Summary</div>
          <p className="text-xs text-DesaturatedBlue text-center">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <div className="flex justify-between items-center bg-DesaturatedBlue bg-opacity-10 rounded-md text-xs w-full py-3 px-2 my-2">
            <div className="flex space-x-2 items-center">
              <img src={musicIcon} alt="Music Icon" className="h-10" />
              <div>
                <div className="font-bold tracking-wide">Annual Plan</div>
                <div className="text-DesaturatedBlue">$ 59.99/year</div>
              </div>
            </div>
            <a
              href="#"
              className="text-BrightBlue underline hover:no-underline mr-2"
            >
              Change
            </a>
          </div>
          <button className="bg-BrightBlue hover:bg-opacity-40 text-VeryPaleBlue hover:text-PaleBlue16 text-sm w-full rounded-md py-2 shadow-lg shadow-DesaturatedBlue">
            Proceed to Payment
          </button>
          <button className="text-xs hover:font-bold">Cancel Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
