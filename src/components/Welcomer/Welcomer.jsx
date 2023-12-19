import Header from "../Header/Header";
import classes from "./Welcomer.module.css";
// import BgImage from "../assets/Landing background (Yellow).png";
import HeaderText from "../../assets/logo/Text.svg";
import Button from "../UI/Button/Button";

import animalsImg from "../../assets/Animals images.png";
import Card from "../UI/Card/Card";
import CardImageDog from "../../assets/Dog in card.png";
import CardImageCat from "../../assets/Cat in card.png";
import NextPrevBtn from "../UI/Button/NextPrevBtn";
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
      <NextPrevBtn>
        <div className={`${classes.buyPets} ${classes.flex}`}>
          <Card>
            <div className={classes.petsCard}>
              <div>
                <a href="#">Собаки</a>
              </div>
              <img src={CardImageDog} alt="Dog's img in card" />
            </div>
          </Card>
          <Card>
            <div className={classes.petsCard}>
              <div>
                <a href="#">Кошки</a>
              </div>
              <img src={CardImageCat} alt="Cat's img in card" />
            </div>
          </Card>
        </div>
      </NextPrevBtn>
      <div>two buttons with select pet</div>
      <div>paginnation</div>
      <div>Почему выбирают наших друзей,</div>
    </div>
  );
};
export default Welcomer;
