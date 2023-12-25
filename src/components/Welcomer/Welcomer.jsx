import Header from "../Header/Header";
import classes from "./Welcomer.module.css";
// import BgImage from "../assets/Landing background (Yellow).png";
import HeaderText from "../../assets/logo/Text.svg";
import { Paginator } from "primereact/paginator";
import animalsImg from "../../assets/Animals images.png";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import CardImageDog from "../../assets/Dog in card.png";
import CardImageCat from "../../assets/Cat in card.png";

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
            <p>
              Онлайн-магазин домашних животных - удобное решение, когда лень
              выходить из дома
            </p>
          </span>

          <Button>
            <button className={classes.btn}>
              <span className={classes.btnText}>Посмотреть друзей</span>
            </button>
          </Button>
        </div>
        <div className={classes.picture}>
          <img src={animalsImg} className={classes.img} alt="" />
        </div>
      </div>

      <div className={`${classes.flex} ${classes.card}`}>
        <Card>
          <div className={classes.petsCard}>
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
          </div>
        </Card>
        <Card>
          <div className={classes.petsCard}>
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
          </div>
        </Card>
      </div>

      <div>two buttons with select pet</div>
      <div></div>
      <div>Почему выбирают наших друзей,</div>
    </div>
  );
};
export default Welcomer;
