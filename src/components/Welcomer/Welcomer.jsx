import Header from "../Header/Header";
import classes from "./Welcomer.module.css";
// import BgImage from "../assets/Landing background (Yellow).png";
import HeaderText from "../../assets/logo/Text.svg";
import Button from "../UI/Button";

const Welcomer = () => {
  return (
    <div className={classes.container}>
      <div>
        <Header />
      </div>
      <div className={classes.grid}>
        <div className={classes.mainText}>
          <img src={HeaderText} alt="" />
          <p>
            Онлайн-магазин домашних животных - удобное решение, когда лень
            выходить из дома
          </p>
          <Button> button</Button>
        </div>
        <div className={classes.petsCart}>
          <div>cart with picture</div>
          <div>two buttons with select pet</div>
          <div>paginnation</div>
          <div>Почему выбирают наших друзей,</div>
        </div>
        <div className={classes.picture}>picture</div>
      </div>
    </div>
  );
};
export default Welcomer;
