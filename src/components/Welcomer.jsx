import Header from "./Header/Header";
import classes from "./Welcomer.module.css";
// import BgImage from "../assets/Landing background (Yellow).png";
const Welcomer = () => {
  return (
    <div className={classes.container}>
      {/* <img src={BgImage} alt="" /> */}
      <div className={classes.content}>
        <Header />
      </div>
    </div>
  );
};
export default Welcomer;
