/* eslint-disable react/prop-types */
import {
  headerImageMobile,
  headerImagePC,
} from "../../../assets/images/1-newbie/5-stats-card";

const StatsCard = () => {
  const Stats = ({ value, legend }) => {
    return (
      <div className="flex flex-col">
        <div className="text-lg font-bold text-SlightlyTransparentWhiteMainParagraph">
          {value}
        </div>
        <div className="text-xs uppercase tracking-wide text-SlightlyTransparentWhiteStatHeadings font-LexendDeca">
          {legend}
        </div>
      </div>
    );
  };
  return (
    <div className="w-screen h-screen bg-VeryDarkBlueMainBg15 flex justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-xs md:max-w-3xl rounded-lg overflow-hidden font-Inter bg-DarkDesaturatedBlueCardBg shadow-xl">
        {/* Image */}
        <div className="relative flex-1 md:order-2">
          <img
            src={headerImageMobile}
            alt="Header Image"
            className="md:hidden"
          />
          <img
            src={headerImagePC}
            alt="Header Image"
            className="object-cover h-full hidden md:block"
          />
          <div className="absolute inset-0 bg-SoftVioletAccent bg-opacity-70"></div>
        </div>
        {/* Stats */}
        <div className="flex-1 flex flex-col text-center md:text-left p-6 md:p-8 gap-4 md:mr-6">
          <div className="text-xl font-bold text-SlightlyTransparentWhiteMainParagraph">
            Get <span className="text-SoftVioletAccent">insights</span> that
            help your business grow.
          </div>
          <div className="text-SlightlyTransparentWhiteStatHeadings text-sm">
            Discover the benefits of data analytics and make better decisions
            regarding revenue, customer experience, and overall efficiency.
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-2 md:mt-4">
            <Stats value="10k+" legend="companies" />
            <Stats value="314" legend="templates" />
            <Stats value="12M+" legend="queries" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
