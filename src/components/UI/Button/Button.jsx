import classes from "./Button.module.css";

const Button = (props) => {
  return <button className={classes.button}>{props.children}</button>;
};
export default Button;
/**
 *
 * <div> <button>props.children</button></div>
 * div - style red gradient
 * button - style transparent
 *
 */
