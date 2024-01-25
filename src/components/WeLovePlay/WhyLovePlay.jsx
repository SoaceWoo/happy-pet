import classes from "./WhyLovePlay.module.css";
import TitleText from "../../assets/We love play Title.png";
import DogImg from "../../assets/We love play img dog.png";
import Parrot from "../../assets/We love play img parrot.png";
import LittleDogImg from "../../assets/We love play img little dog.png";
import Rabbits from "../../assets/We love play img rabbits.png";
import LittleCat from "../../assets/We love play img little cat.png";
import Squire from "../../assets/We love play img squire.png";
import React from "react";

const WeLovePlay = () => {
  return (
    <React.Fragment>
      <div>
        <img src={TitleText} alt="" />
      </div>
      <div className={classes.flex2}>
        <div className={classes.flex1}>
          <div className={classes.catalog}>
            <img className={classes.img} src={DogImg} alt="" />
          </div>
          <div className={classes.catalog}>
            <img className={classes.img} src={Rabbits} alt="" />
          </div>
        </div>
        <div className={classes.flex1}>
          <div className={classes.catalog}>
            <img className={classes.img} src={Parrot} alt="" />
          </div>
          <div className={classes.catalog}>
            <img className={classes.img} src={LittleCat} alt="" />
          </div>
        </div>
        <div className={classes.flex1}>
          <div className={classes.catalog}>
            <img className={classes.img} src={LittleDogImg} alt="" />
          </div>
          <div className={classes.catalog}>
            <img className={classes.img} src={Squire} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WeLovePlay;
