/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import { AppData } from "../../utils/app/data";
import { CodeIcon } from "../../utils/app/svg";

const Cards = () => {
  const ReversedData = AppData.slice().reverse();
  const Chip = ({ style, name }) => {
    return (
      <div
        className={`${style} bg-opacity-10 px-3 py-1 rounded font-semibold uppercase text-xs`}
      >
        {name}
      </div>
    );
  };
  return (
    <>
      {ReversedData.map((data, index) => (
        <div
          key={index}
          className="max-w-sm overflow-hidden shadow-lg rounded-xl bg-neutral-50"
        >
          {/* image */}
          <Link to={data.link}>
            <img src={data.image} alt={data.name} />
          </Link>
          {/* name */}
          <div className="p-4 text-DarkGrayishBlue">
            <div className="flex justify-between items-center">
              <NavLink
                to={data.link}
                className="hover:underline hover:underline-offset-2 text-lg font-HankenGrotesk font-semibold"
              >
                {data.name}
              </NavLink>  
              <a href={data.code} target="_blank" rel="noopener noreferrer">
                <CodeIcon />
              </a>
            </div>
            {/* tags | level */}
            <div className="flex justify-between pt-3">
              <div className="flex space-x-3">
                {data.tags.map((tag, index) => (
                  <Chip key={index} style={tag.style} name={tag.name} />
                ))}
              </div>
              <Chip style={data.level.style} name={data.level.name} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

const FrontEndMentor = () => {
  return (
    <main className="max-w-screen min-h-screen bg-PaleBlue pb-10">
      <div className="container mx-auto">
        <header className="text-center">
          <div className="text-3xl text-DarkGrayishBlue font-bold tracking-wide font-Fraunces py-4">
            FrontEndMentor Designs
          </div>
        </header>
        <section className="py-4 px-6 flex flex-col md:flex-row flex-wrap gap-6 md:gap-12 justify-center items-center">
          <Cards />
        </section>
      </div>
    </main>
  );
};

export default FrontEndMentor;
