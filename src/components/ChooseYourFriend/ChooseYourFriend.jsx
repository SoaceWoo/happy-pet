import classes from "./ChooseYourFriend.module.css";
import HeaderText from "../../assets/logo/Choose Your Friend Section title .svg";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import DobermanCardImg from "../../assets/Animal imageDoberman Card .png";
import CatMyauCardImg from "../../assets/Animal imageCat _Myau_.png";
import MonkeyCardImg from "../../assets/Animal imageMonkey.png";
const ChooseYourFriend = () => {
  return (
    <div className={classes.container}>
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
      <div>
        <div className={classes.flex}>
          <div className={classes.card}>
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
          </div>{" "}
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChooseYourFriend;
