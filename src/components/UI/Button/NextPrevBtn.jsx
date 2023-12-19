import classes from "./NextPrevBtn.module.css";

const NextPrevBtn = (props) => {
  return (
    <div className={classes.flex}>
      <button className={classes.btn}>right</button>
      {props.children}
      <button className={classes.btn}>left</button>
    </div>
  );
};
export default NextPrevBtn;
