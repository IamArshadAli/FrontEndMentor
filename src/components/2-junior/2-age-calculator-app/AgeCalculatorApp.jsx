import { useState } from "react";
import { arrowIcon } from "../../../assets/images/2-junior/2-age-calculator-app";

const AgeCalculatorApp = () => {
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [error, setError] = useState(false);
  const [age, setAge] = useState({});

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const calculateAge = () => {
    const dateOfBirth = new Date(formData.year, formData.month, formData.day);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - dateOfBirth.getFullYear();
    let months = currentDate.getMonth() - dateOfBirth.getMonth();
    let days = currentDate.getDate() - dateOfBirth.getDate();

    if (days < 0) {
      months--;
      const prevMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      days += prevMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({
      years: years,
      months: months,
      days: days,
    });
  };

  const validateInputs = () => {
    const newError = {};
    const currentYear = new Date().getFullYear();
    // handle Empty fields
    if (!formData.day) newError.day = "This field is required";
    if (!formData.month) newError.month = "This field is required";
    if (!formData.year) newError.year = "This field is required";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return false;
    }

    // handle Invalid inputs
    if (formData.day < 1 || formData.day > 31)
      newError.day = "Must be a valid day";
    if (formData.month < 1 || formData.month > 12)
      newError.month = "Must be a valid month";
    if (formData.year < 1700) newError.year = "Must be > 1700";
    else if (formData.year > currentYear) newError.year = "Must be in past";

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return false;
    }

    // handle Invalid Date
    if ([4, 6, 9, 11].includes(formData.month) && formData.day > 30)
      newError.invalid = "Must be a valid date";
    // handle Leap Year
    else if (
      (formData.month === 2 && formData.day > 29) ||
      (formData.month === 2 && formData.day > 28 && !isLeapYear(formData.year))
    )
      newError.invalid = "Invalid for a Non-Leap Year";

    if (Object.keys(newError).length === 0) return true;
    setError(newError);
    return false;
  };

  const isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAge({});
    const validInputs = validateInputs();
    if (!validInputs) return;
    setError(false);
    calculateAge();
  };

  return (
    <main className="w-screen h-screen bg-Offwhite grid place-items-center font-Poppins">
      <div className="px-4 py-10 md:pl-8 md:pr-28 rounded-3xl rounded-br-[5rem] md:rounded-br-[7rem] bg-White md:max-w-lg">
        <form className="flex flex-col md:max-w-sm" onSubmit={handleSubmit}>
          <div className="flex gap-4 text-xs md:max-w-xs">
            {/* DAY */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="day"
                className={`uppercase  font-bold tracking-widest ${
                  error ? "text-LightRed22" : "text-Smokeygrey"
                }`}
              >
                Day
              </label>
              <input
                type="number"
                name="day"
                id="day"
                placeholder="DD"
                value={formData.day}
                onChange={handleFormData}
                className={`no-spinner max-w-[5rem] md:max-w-[6rem] px-3 py-2 outline-none border rounded-md focus:border-Smokeygrey ${
                  error && "border-LightRed22"
                } font-bold text-base placeholder:font-bold`}
              />
              {error && <p className="text-LightRed22 italic">{error.day}</p>}
            </div>
            {/* MONTH */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="month"
                className={`uppercase  font-bold tracking-widest ${
                  error ? "text-LightRed22" : "text-Smokeygrey"
                }`}
              >
                Month
              </label>
              <input
                type="number"
                name="month"
                id="month"
                placeholder="MM"
                value={formData.month}
                onChange={handleFormData}
                className={`no-spinner max-w-[5rem] md:max-w-[6rem] px-3 py-2 outline-none border rounded-md focus:border-Smokeygrey ${
                  error && "border-LightRed"
                } font-bold text-base placeholder:font-bold`}
              />
              {error && <p className="text-LightRed22 italic">{error.month}</p>}
            </div>
            {/* YEAR */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="year"
                className={`uppercase  font-bold tracking-widest ${
                  error ? "text-LightRed22" : "text-Smokeygrey"
                }`}
              >
                Year
              </label>
              <input
                type="number"
                name="year"
                id="year"
                placeholder="YYYY"
                value={formData.year}
                onChange={handleFormData}
                className={`no-spinner max-w-[5rem] md:max-w-[6rem] px-3 py-2 outline-none border rounded-md focus:border-Smokeygrey ${
                  error && "border-LightRed"
                } font-bold text-base placeholder:font-bold`}
              />
              {error && <p className="text-LightRed22 italic">{error.year}</p>}
            </div>
          </div>
          {error.invalid && (
            <p className="text-LightRed22 text-xs italic">{error.invalid}</p>
          )}
          {/* Submit Button */}
          <div className="flex justify-center md:justify-end items-center relative my-4">
            <hr className="bg-Lightgrey w-full md:w-[110%] z-0 absolute left-0 h-[1px]" />
            <button
              type="submit"
              className="z-10 md:-mr-20 bg-Purple p-3 rounded-full hover:bg-Offblack"
            >
              <img src={arrowIcon} alt="Arrow Icon" className="h-6 md:h-8" />
            </button>
          </div>
        </form>
        {/* Show the Time Span */}
        <div className="text-5xl md:text-6xl text-Offblack font-extrabold italic">
          <p>
            <span className="text-Purple">{age.years ? age.years : "--"}</span>{" "}
            years
          </p>
          <p>
            <span className="text-Purple">
              {age.months ? age.months : "--"}
            </span>{" "}
            months
          </p>
          <p>
            <span className="text-Purple">{age.days ? age.days : "--"}</span>{" "}
            days
          </p>
        </div>
      </div>
    </main>
  );
};

export default AgeCalculatorApp;
