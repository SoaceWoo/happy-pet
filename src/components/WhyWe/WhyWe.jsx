import classes from "./WhyWe.module.css";

import SectionTitle from "../.././assets/logo/Section title.svg";
import WhyWeFirst from "../.././assets/logo/Why we section itemFirst Title.svg";
import WhyWeSecond from "../.././assets/logo/Why we section itemSecond Title.svg";
import WhyWeThird from "../.././assets/logo/Why we section itemThird Title.svg";
import YellowBackgroundGreen from "../../assets/Title Section Background.png";
import React from "react";

const WhyWe = () => {
  return (
    <React.Fragment>
      <div className={`${classes.titleSection} ${classes.flex}`}>
        <img className={classes.whyWe} src={SectionTitle} alt="" />
        <div className={`${classes.flex} ${classes.titleSectionContainer}`}>
          <div className={classes.whyWeContainer}>
            <img className={classes.whyWeIcon} src={WhyWeFirst} alt="" />
          </div>
          <div className={classes.whyWeContainer}>
            <img className={classes.whyWeIcon} src={WhyWeSecond} alt="" />
          </div>
          <div className={classes.whyWeContainer}>
            <img className={classes.whyWeIcon} src={WhyWeThird} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.test1}>
        <div className={classes.img}></div>
        {/* <img className={classes.img} src={YellowBackgroundGreen} alt="" /> */}
      </div>
    </React.Fragment>
  );
};
export default WhyWe;
