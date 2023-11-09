/* eslint-disable react/prop-types */
import {patternBottomBG, patternTopB, patternCardBG, victorImg} from "../../../assets/images/1-newbie/9-profile-card"

const Stats = ({value, name}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold">{value}</div>
      <div className="text-xs text-DarkGrayishBlue19 tracking-wider">{name}</div>
    </div>
  )
}

const ProfileCard = () => {
  return (
    <div className="w-screen min-h-screen bg-DarkCyan19 relative overflow-hidden">
        {/* BG Pattern */}
        <img src={patternTopB} alt="Pattern Left BG" className="absolute top-0 -left-1/2 md:-top-3/4 md:-left-1/2 md:translate-x-3/4 md:w-[50vw] md:translate-y-1/2" />
        <img src={patternBottomBG} alt="Pattern Left BG" className="absolute md:w-[50vw] bottom-0 -right-1/2 md:-bottom-3/4 md:-translate-x-3/4 md:-right-1/2 md:-translate-y-1/2 " />
        {/* Card */}
        <div className="max-w-[22rem] rounded-lg shadow-xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden bg-White flex flex-col justify-center items-center font-KumbhSans text-VeryDarkDesaturatedBlue">
            <img src={patternCardBG} alt="Background Pattern" />
            <img src={victorImg} alt="Victor Image" className="rounded-full w-24 md:w-[8rem] -mt-12 md:-mt-16 border-[5px] border-White" />
          <div className="mt-4 mb-1 font-bold">Victor Crest <span className="font-light text-DarkGrayishBlue19">26</span></div>
          <div className="text-DarkGrayishBlue19 text-sm mb-1">London</div>
          <div className="h-[1px] w-full my-4 bg-DarkGrayishBlue19"></div>
          <div className="flex justify-around items-center w-full pb-4 md:px-4">
            <Stats value="80K" name="Followers" />
            <Stats value="803K" name="Likes" />
            <Stats value="1.4K" name="Photos" />
          </div>
        </div>
    </div>
  )
}

export default ProfileCard