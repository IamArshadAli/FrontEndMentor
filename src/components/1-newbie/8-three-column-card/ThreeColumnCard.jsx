/* eslint-disable react/prop-types */
import {
  luxuryIcon,
  sedansIcon,
  suvsIcon,
} from "../../../assets/images/1-newbie/8-three-column-card";

const Card = ({ logo, title, content, text, bg }) => {
  return <div className={`flex-1 flex flex-col gap-4 p-8 ${bg}`}>
    <img src={logo} alt={title} className="w-16" />
    <div className="text-2xl text-bold text-VeryLightGray font-BigShouldersDisplay uppercase tracking-wide">{title}</div>
    <div className="text-TransparentWhite py-2">{content}</div>
    <button className={`${text} hover:text-TransparentWhite font-semibold px-6 py-2 bg-VeryLightGray hover:bg-transparent border-2 rounded-full w-fit my-4`}>Learn More</button>
  </div>;
};

const ThreeColumnCard = () => {
  return (
    <div className="w-screen min-h-screen bg-VeryLightGray flex justify-center items-center">
      <div className="flex flex-col md:flex-row max-w-xs md:max-w-2xl rounded-xl overflow-hidden shadow-xl my-20">
        <Card
          logo={sedansIcon}
          title="Sedans"
          content="Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip."
          text="text-BrightOrange"
          bg="bg-BrightOrange"
        />
        <Card
          logo={suvsIcon}
          title="SUVS"
          content="Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures."
          text="text-DarkCyan18"
          bg="bg-DarkCyan18"
        />
        <Card
          logo={luxuryIcon}
          title="Luxury"
          content="Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style."
          text="text-VeryDarkCyan"
          bg="bg-VeryDarkCyan"
        />
      </div>
    </div>
  );
};

export default ThreeColumnCard;
