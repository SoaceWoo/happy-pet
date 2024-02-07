import classes from "./WhyLovePlay.module.css";
import TitleText from "../../assets/We love play Title.png";
import DogImg from "../../assets/We love play img dog.png";
import Parrot from "../../assets/We love play img parrot.png";
import LittleDogImg from "../../assets/We love play img little dog.png";
import Rabbits from "../../assets/We love play img rabbits.png";
import LittleCat from "../../assets/We love play img little cat.png";
import Squire from "../../assets/We love play img squire.png";
import React from "react";
import Button from "../UI/Button/Button";

const WeLovePlay = () => {
  return (
    <React.Fragment>
      <div>
        <img src={TitleText} alt="" />
      </div>
      <div className={`${classes.flex2} ${classes.card}`}>
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
      <div className={`${classes.flex} ${classes.catalog}`}>
        <div className={classes.linkButtonContainer}>
          <Button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
            >
              <path
                d="M8 3.5C8.26522 3.5 8.51957 3.60536 8.70711 3.79289C8.89464 3.98043 9 4.23478 9 4.5C9 4.76522 8.89464 5.01957 8.70711 5.20711C8.51957 5.39464 8.26522 5.5 8 5.5H2V16.5H13V10.5C13 10.2348 13.1054 9.98043 13.2929 9.79289C13.4804 9.60536 13.7348 9.5 14 9.5C14.2652 9.5 14.5196 9.60536 14.7071 9.79289C14.8946 9.98043 15 10.2348 15 10.5V16.5C15 17.0304 14.7893 17.5391 14.4142 17.9142C14.0391 18.2893 13.5304 18.5 13 18.5H2C1.46957 18.5 0.960859 18.2893 0.585786 17.9142C0.210714 17.5391 0 17.0304 0 16.5V5.5C0 4.96957 0.210714 4.46086 0.585786 4.08579C0.960859 3.71071 1.46957 3.5 2 3.5H8ZM17 0.5C17.2652 0.5 17.5196 0.605357 17.7071 0.792893C17.8946 0.98043 18 1.23478 18 1.5V6.5C18 6.76522 17.8946 7.01957 17.7071 7.20711C17.5196 7.39464 17.2652 7.5 17 7.5C16.7348 7.5 16.4804 7.39464 16.2929 7.20711C16.1054 7.01957 16 6.76522 16 6.5V3.914L7.707 12.207C7.5184 12.3892 7.2658 12.49 7.0036 12.4877C6.7414 12.4854 6.49059 12.3802 6.30518 12.1948C6.11977 12.0094 6.0146 11.7586 6.01233 11.4964C6.01005 11.2342 6.11084 10.9816 6.293 10.793L14.586 2.5H12C11.7348 2.5 11.4804 2.39464 11.2929 2.20711C11.1054 2.01957 11 1.76522 11 1.5C11 1.23478 11.1054 0.98043 11.2929 0.792893C11.4804 0.605357 11.7348 0.5 12 0.5H17Z"
                fill="white"
              />
            </svg>
            Посмотреть полный каталог
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};
export default WeLovePlay;
