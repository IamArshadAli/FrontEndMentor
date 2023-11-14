import { useMediaQuery } from "react-responsive";

import {
  bgIntroPC,
  bgIntroMobile,
  errorIcon,
} from "../../../assets/images/1-newbie/15-intro-component";

const IntroComponent = () => {
  const isMobile = useMediaQuery({ query: "(max-width:649px)" });

  return <div>IntroComponent</div>;
};

export default IntroComponent;
