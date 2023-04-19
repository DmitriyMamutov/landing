import cn from "classnames";
import styles from "./styles.module.scss";

const Button = (props) => {
  const { size, className, onClick, text } = props;

  const buttonClass = cn(
    styles["button"],
    "button",
    {
      [styles["button--small"]]: size === "small",
      [styles["button--smallest"]]: size === "smallest",
      [styles["button--medium"]]: size === "medium",
      [styles["button--large"]]: size === "large",
    },
    className,
  );

  return (
    <button onClick={onClick} className={buttonClass}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  size: "large",
};

export default Button;
