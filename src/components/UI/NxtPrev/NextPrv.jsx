import SlidePrevBtn from "../../../assets/logo/Slide button prev.svg";
import SlideNextBtn from "../../../assets/logo/Slide button next.svg";

import classes from "./NextPrv.module.css";

const NextBtn = () => {
  return (
    <button className={classes.btnNxtPrv}>
      <img src={SlideNextBtn} alt="" />
    </button>
  );
};
const PrevBtn = () => {
  return (
    <button className={classes.btnNxtPrv}>
      <img src={SlidePrevBtn} alt="" />
    </button>
  );
};
export { NextBtn, PrevBtn };
