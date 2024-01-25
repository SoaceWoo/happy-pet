import classes from "./ChooseYourFriend.module.css";
import HeaderText from "../../assets/logo/Choose Your Friend Section title .svg";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import DobermanCardImg from "../../assets/Animal imageDoberman Card .png";
import CatMyauCardImg from "../../assets/Animal imageCat _Myau_.png";
import MonkeyCardImg from "../../assets/Animal imageMonkey.png";
import Pagination from "../UI/Pagination/Pagination";
import React from "react";
import { NextBtn, PrevBtn } from "../UI/NxtPrev/NextPrv";
const ChooseYourFriend = () => {
  return (
    <React.Fragment>
      <div className={classes.padding}>
        <div className={`${classes.flex} ${classes.headerTitle}`}>
          <img src={HeaderText} alt="" />
        </div>
        <div className={`${classes.flex} ${classes.btnContainer}`}>
          <button className={classes.btn}>Все</button>
          <button className={classes.btn}>Собаки</button>
          <button className={classes.btn}>Кошки</button>
          <button className={classes.btn}>Обезьяни</button>
          <button className={classes.btn}>Птицы</button>
          <button className={classes.btn}>Мыши</button>
          <button className={classes.btn}>Попугаи</button>
        </div>
      </div>

      <div className={`${classes.flex} ${classes.cardContainer}`}>
        <div className={classes.card}>
          <div className={classes.flex}>
            <PrevBtn />
            <Card>
              <div className={classes.cardContent}>
                <div className={classes.cardImg}>
                  <img src={DobermanCardImg} alt="" />
                </div>
                <div className={classes.title}>
                  <span>Доберман</span>
                  <p>Отличный друг и хороший помощник, дресирован в цирке</p>
                </div>
                <div className={`${classes.category} ${classes.flex}`}>
                  Собаки
                  <a className={classes.pagination} href="#">
                    <div className={classes.circle}></div>
                  </a>
                  Домашние животные
                </div>
                <div className={`${classes.flex} ${classes.priceWithButton}`}>
                  <p className={classes.price}>14.235 RUB</p>
                  <div className={classes.buttonContainer}>
                    <Button>
                      <button className={classes.buyButton}>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.13717 0.518321C4.90104 0.405084 5.71023 1.26435 5.94328 2.45001C6.17632 3.62901 5.75555 4.68145 4.99167 4.80135C4.23427 4.92125 3.41861 4.06198 3.17909 2.87632C2.93957 1.69732 3.3733 0.64488 4.13717 0.518321ZM8.76573 0.518321C9.53608 0.64488 9.96333 1.69732 9.73675 2.87632C9.49076 4.06198 8.68157 4.92125 7.9177 4.80135C7.14735 4.68145 6.72657 3.62901 6.96609 2.45001C7.19914 1.26435 8.00833 0.405084 8.76573 0.518321ZM0.673842 3.58239C1.41182 3.256 2.41522 3.84883 2.93957 4.88128C3.43156 5.93372 3.26325 7.03945 2.53174 7.36584C1.80023 7.69223 0.803312 7.10606 0.291905 6.06028C-0.219502 5.0145 -0.0382442 3.90211 0.673842 3.58239ZM12.3262 3.58239C13.0382 3.90211 13.2195 5.0145 12.7081 6.06028C12.1967 7.10606 11.1998 7.69223 10.4683 7.36584C9.73675 7.03945 9.56844 5.93372 10.0604 4.88128C10.5848 3.84883 11.5882 3.256 12.3262 3.58239ZM11.2451 10.763C11.271 11.3891 10.8049 12.0818 10.2482 12.3416C9.0894 12.8878 7.71702 11.7554 6.42879 11.7554C5.14056 11.7554 3.75523 12.9344 2.61589 12.3416C1.96854 12.0152 1.52187 11.1493 1.60603 10.4299C1.72255 9.43741 2.88131 8.90453 3.5675 8.17848C4.48027 7.23928 5.12762 5.47411 6.42879 5.47411C7.72349 5.47411 8.40969 7.21264 9.28361 8.17848C10.0022 8.99113 11.1998 9.67721 11.2451 10.763Z"
                            fill="white"
                          />
                        </svg>
                        Приютить
                      </button>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className={classes.card}>
          <Card>
            <div className={classes.cardContent}>
              <div className={classes.cardImg}>
                <img src={CatMyauCardImg} alt="" />
              </div>
              <div className={classes.title}>
                <span>Кошка “Мяу”</span>
                <p>Ленивый по дням и активный по ночам</p>
              </div>
              <div className={`${classes.category} ${classes.flex}`}>
                Кошки
                <a className={classes.pagination} href="#">
                  <div className={classes.circle}></div>
                </a>
                Домашние животные
              </div>
              <div className={`${classes.flex} ${classes.priceWithButton}`}>
                <p className={classes.price}>14.235 RUB</p>
                <div className={classes.buttonContainer}>
                  <Button>
                    <button className={classes.buyButton}>
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.13717 0.518321C4.90104 0.405084 5.71023 1.26435 5.94328 2.45001C6.17632 3.62901 5.75555 4.68145 4.99167 4.80135C4.23427 4.92125 3.41861 4.06198 3.17909 2.87632C2.93957 1.69732 3.3733 0.64488 4.13717 0.518321ZM8.76573 0.518321C9.53608 0.64488 9.96333 1.69732 9.73675 2.87632C9.49076 4.06198 8.68157 4.92125 7.9177 4.80135C7.14735 4.68145 6.72657 3.62901 6.96609 2.45001C7.19914 1.26435 8.00833 0.405084 8.76573 0.518321ZM0.673842 3.58239C1.41182 3.256 2.41522 3.84883 2.93957 4.88128C3.43156 5.93372 3.26325 7.03945 2.53174 7.36584C1.80023 7.69223 0.803312 7.10606 0.291905 6.06028C-0.219502 5.0145 -0.0382442 3.90211 0.673842 3.58239ZM12.3262 3.58239C13.0382 3.90211 13.2195 5.0145 12.7081 6.06028C12.1967 7.10606 11.1998 7.69223 10.4683 7.36584C9.73675 7.03945 9.56844 5.93372 10.0604 4.88128C10.5848 3.84883 11.5882 3.256 12.3262 3.58239ZM11.2451 10.763C11.271 11.3891 10.8049 12.0818 10.2482 12.3416C9.0894 12.8878 7.71702 11.7554 6.42879 11.7554C5.14056 11.7554 3.75523 12.9344 2.61589 12.3416C1.96854 12.0152 1.52187 11.1493 1.60603 10.4299C1.72255 9.43741 2.88131 8.90453 3.5675 8.17848C4.48027 7.23928 5.12762 5.47411 6.42879 5.47411C7.72349 5.47411 8.40969 7.21264 9.28361 8.17848C10.0022 8.99113 11.1998 9.67721 11.2451 10.763Z"
                          fill="white"
                        />
                      </svg>
                      Приютить
                    </button>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className={classes.card}>
          <div className={classes.flex}>
            <Card>
              <div className={classes.cardContent}>
                <div className={classes.cardImg}>
                  <img src={MonkeyCardImg} alt="" />
                </div>
                <div className={classes.title}>
                  <span>Обезьяна “Я”</span>
                  <p>
                    Прямиком из индии, дикий, но мухи не обидет, дресирован в
                    цирке
                  </p>
                </div>
                <div className={`${classes.category} ${classes.flex}`}>
                  Обезьяны
                  <a className={classes.pagination} href="#">
                    <div className={classes.circle}></div>
                  </a>
                  Домашние животные
                </div>
                <div className={`${classes.flex} ${classes.priceWithButton}`}>
                  <p className={classes.price}>14.235 RUB</p>
                  <div className={classes.buttonContainer}>
                    <Button>
                      <button className={classes.buyButton}>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.13717 0.518321C4.90104 0.405084 5.71023 1.26435 5.94328 2.45001C6.17632 3.62901 5.75555 4.68145 4.99167 4.80135C4.23427 4.92125 3.41861 4.06198 3.17909 2.87632C2.93957 1.69732 3.3733 0.64488 4.13717 0.518321ZM8.76573 0.518321C9.53608 0.64488 9.96333 1.69732 9.73675 2.87632C9.49076 4.06198 8.68157 4.92125 7.9177 4.80135C7.14735 4.68145 6.72657 3.62901 6.96609 2.45001C7.19914 1.26435 8.00833 0.405084 8.76573 0.518321ZM0.673842 3.58239C1.41182 3.256 2.41522 3.84883 2.93957 4.88128C3.43156 5.93372 3.26325 7.03945 2.53174 7.36584C1.80023 7.69223 0.803312 7.10606 0.291905 6.06028C-0.219502 5.0145 -0.0382442 3.90211 0.673842 3.58239ZM12.3262 3.58239C13.0382 3.90211 13.2195 5.0145 12.7081 6.06028C12.1967 7.10606 11.1998 7.69223 10.4683 7.36584C9.73675 7.03945 9.56844 5.93372 10.0604 4.88128C10.5848 3.84883 11.5882 3.256 12.3262 3.58239ZM11.2451 10.763C11.271 11.3891 10.8049 12.0818 10.2482 12.3416C9.0894 12.8878 7.71702 11.7554 6.42879 11.7554C5.14056 11.7554 3.75523 12.9344 2.61589 12.3416C1.96854 12.0152 1.52187 11.1493 1.60603 10.4299C1.72255 9.43741 2.88131 8.90453 3.5675 8.17848C4.48027 7.23928 5.12762 5.47411 6.42879 5.47411C7.72349 5.47411 8.40969 7.21264 9.28361 8.17848C10.0022 8.99113 11.1998 9.67721 11.2451 10.763Z"
                            fill="white"
                          />
                        </svg>
                        Приютить
                      </button>
                    </Button>
                  </div>
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
      </div>
      <div className={`${classes.linkButtonContainer} ${classes.flex}`}>
        <Button>
          <button className={classes.linkButton}>
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
          </button>
        </Button>
      </div>
    </React.Fragment>
  );
};
export default ChooseYourFriend;
