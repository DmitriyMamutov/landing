import { CHECK_ICON } from "config/home";
import Image from "next/image";

import styles from "./styles.module.scss";

const Item = (props) => {
  const { id, text } = props;
  return (
    <div key={id} className={styles["item"]}>
      <div className={styles["item__icon"]}>
        <Image src={CHECK_ICON} width={32} height={36} alt={id} />
      </div>
      <div className={styles["item__text"]}>{text}</div>
    </div>
  );
};

export default Item;
