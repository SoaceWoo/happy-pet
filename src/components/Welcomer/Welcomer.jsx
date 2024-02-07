import classes from "./Welcomer.module.css";
import Header from "../Header/Header";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import { NextBtn, PrevBtn } from "../UI/NxtPrev/NextPrv";
import HeaderText from "../../assets/logo/Text.svg";

import animalsImg from "../../assets/Animals images.png";
import CardImageDog from "../../assets/Dog in card.png";
import CardImageCat from "../../assets/Cat in card.png";
import Pagination from "../UI/Pagination/Pagination";

const Welcomer = () => {
  return (
    <div className={classes.headerContainer}>
      <div>
        <Header />
      </div>

      <div className={`${classes.flex} ${classes.container}`}>
        <div className={`${classes.flex} ${classes.mainContent}`}>
          <div className={`${classes.mainText} ${classes.flex}`}>
            <img src={HeaderText} alt="" />
            <div className={classes.textOdd}>
              <p className={classes.paragraph}>
                Онлайн-магазин домашних животных - удобное решение, когда лень
                выходить из дома
              </p>
            </div>
            <div className={classes.btnContainer}>
              <Button>Посмотреть друзей</Button>
            </div>
          </div>

          <div className={classes.flex}>
            <div className={`${classes.petCard} ${classes.flex}`}>
              <div className={classes.flex}>
                <PrevBtn />
                <Card>
                  <div className={classes.card}>
                    <div className={classes.petContent}>
                      Собаки
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-slot="icon"
                        className={classes.svg}
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
              </div>
            </div>
            <div
              className={`${classes.petCard} ${classes.cat} ${classes.flex}`}
            >
              <div className={classes.flex}>
                <Card>
                  <div className={classes.card}>
                    <div className={classes.petContent}>
                      Кошки
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        data-slot="icon"
                        className={classes.svg}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </div>
                    <div className={classes.cardImg}>
                      <img src={CardImageCat} alt="Dog's img in card" />
                    </div>
                  </div>
                </Card>
                <NextBtn />
              </div>
            </div>
          </div>
          <div className={`${classes.paginationContainer} ${classes.flex}`}>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}>
              <Pagination />
            </div>
            <div className={classes.pagination}></div>
          </div>
        </div>
        <div className={classes.picture}>
          <img src={animalsImg} className={classes.img} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Welcomer;
