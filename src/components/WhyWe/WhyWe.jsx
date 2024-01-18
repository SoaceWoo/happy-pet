import classes from "./WhyWe.module.css";

import SectionTitle from "../.././assets/logo/Section title.svg";
import WhyWeFirst from "../.././assets/logo/Why we section itemFirst Title.svg";
import WhyWeSecond from "../.././assets/logo/Why we section itemSecond Title.svg";
import WhyWeThird from "../.././assets/logo/Why we section itemThird Title.svg";

const WhyWe = () => {
  return (
    <div className={classes.test}>
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
    </div>
  );
};
export default WhyWe;
