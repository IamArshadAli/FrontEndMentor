/* eslint-disable react/prop-types */
import {
  calculatorIcon,
  karmaIcon,
  supervisorIcon,
  teamBuilderIcon,
} from "../../../assets/images/1-newbie/13-four-card-feature";

const FourCardFeature = () => {
  const Card = ({ title, description, icon, className }) => {
    return (
      <div
        className={`max-w-xs flex flex-col p-6 gap-4 rounded-lg shadow-xl bg-White border-4 border-x-0 border-b-0 ${className}`}
      >
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm md:text-xs text-GrayishBlue113">{description}</p>
        <img
          src={icon}
          alt={`${title} Icon`}
          className="w-16 h-16 self-end mt-2"
        />
      </div>
    );
  };
  return (
    <div className="w-screen h-screen grid place-items-center font-Poppins bg-VeryLightGray113">
      <div className="flex flex-col gap-4 justify-center items-center text-VeryDarkBlue113 px-4 py-14">
        <h2 className="font-light text-2xl text-GrayishBlue113">
          Reliable, efficient delivery
        </h2>
        <h2 className="font-semibold text-2xl -mt-3">Powered by Technology</h2>
        <p className="text-sm text-GrayishBlue113 text-center max-w-lg mb-6">
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 place-items-center">
          <Card
            title="Supervisor"
            description="Monitors activity to identify project roadblocks"
            icon={supervisorIcon}
            className="border-t-Cyan113"
          />
          <div className="grid gap-6">
            <Card
              title="Team Builder"
              description="Scans our talent network to create the optimal team for your project"
              icon={teamBuilderIcon}
              className="border-t-Red"
            />
            <Card
              title="Karma"
              description="Regularly evaluates our talent to ensure quality"
              icon={karmaIcon}
              className="border-t-Orange113"
            />
          </div>
          <Card
            title="Calculator"
            description="Uses data from past projects to provide better delivery estimates"
            icon={calculatorIcon}
            className="border-t-Blue"
          />
        </div>
      </div>
    </div>
  );
};

export default FourCardFeature;
