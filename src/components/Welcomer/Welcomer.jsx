import Header from "../Header/Header";
import classes from "./Welcomer.module.css";
// import BgImage from "../assets/Landing background (Yellow).png";
import HeaderText from "../../assets/logo/Text.svg";
import Button from "../UI/Button/Button";

import animalsImg from "../../assets/Animals images.png";
import Card from "../UI/Card/Card";

const Welcomer = () => {
  return (
    <div className={classes.container}>
      <div>
        <Header />
      </div>
      <div className={classes.flexContainer}>
        <div className={classes.mainText}>
          <img src={HeaderText} alt="" />
          <span className={classes.textOdd}>
            <h4>
              Онлайн-магазин домашних животных - удобное решение, когда лень
              выходить из дома
            </h4>
          </span>
          <Button> button</Button>
        </div>
        <div className={classes.picture}>
          <img src={animalsImg} alt="" />
        </div>
      </div>
      <div className={`${classes.buyPets} ${classes.flex}`}>
        <div>
          <Card className={classes.petsCard}>cart with picture</Card>
          <Card className={classes.petsCard}>cart with picture</Card>
        </div>
        <div>two buttons with select pet</div>
        <div>paginnation</div>
        <div>Почему выбирают наших друзей,</div>
      </div>
    </div>
  );
};
export default Welcomer;