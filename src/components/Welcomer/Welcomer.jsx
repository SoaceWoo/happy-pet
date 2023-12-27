import Header from "../Header/Header";
import classes from "./Welcomer.module.css";
// import BgImage from "../assets/Landing background (Yellow).png";
import HeaderText from "../../assets/logo/Text.svg";
import animalsImg from "../../assets/Animals images.png";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import CardImageDog from "../../assets/Dog in card.png";
import CardImageCat from "../../assets/Cat in card.png";

const Welcomer = () => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div className={classes.flex}>
        <div className={`${classes.flex} ${classes.mainContent}`}>
          <div className={`${classes.mainText} ${classes.flex}`}>
            <img src={HeaderText} alt="" />
            <div className={classes.textOdd}>
              <p className={classes.paragraph}>
                Онлайн-магазин домашних животных - удобное решение, когда лень
                выходить из дома
              </p>
            </div>
            <Button>
              <div className={classes.btn}>Посмотреть друзей</div>
            </Button>
          </div>

          <div className={`${classes.flex} ${classes.petsContainer}`}>
            <div className={classes.petsCard}>
              <Card>
                <div className={`${classes.petsContent} ${classes.flex}`}>
                  <ul>
                    <li>Собаки</li>
                  </ul>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
                <div className={classes.cardImg}>
                  <img src={CardImageDog} alt="Dog's img in card" />
                </div>
              </Card>
            </div>
            <div className={classes.petsCard}>
              <Card>
                <div className={`${classes.petsContent} ${classes.flex}`}>
                  <ul>
                    <li>Кошки</li>
                  </ul>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    data-slot="icon"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
                <div className={classes.cardImg}>
                  <img src={CardImageCat} alt="Cat's img in card" />
                </div>
              </Card>
            </div>
          </div>

          <div>two buttons with select pet</div>
          <div></div>
          <div>Почему выбирают наших друзей,</div>
        </div>

        <div className={classes.picture}>
          <img src={animalsImg} className={classes.img} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Welcomer;
