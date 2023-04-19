import { LETS_ARROW } from "config/home";
import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";

const Arrow = (props) => {
  const { isNext, onClick } = props;

  const arrowClass = cn(styles["arrow"], "arrow", {
    ["arrow--next"]: isNext,
    ["arrow--prev"]: !isNext,
  });

  const arrowIconClass = cn(styles["arrow__icon"], {
    [styles["arrow__icon--next"]]: isNext,
  });

  return (
    <div className={arrowClass} onClick={onClick}>
      <div className={arrowIconClass}>
        <Image src={LETS_ARROW} width={48} height={48} alt="arrow" />
      </div>
    </div>
  );
};

export default Arrow;
