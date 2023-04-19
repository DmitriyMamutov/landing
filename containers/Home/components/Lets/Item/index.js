import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";

const Item = (props) => {
  const { id, iconUrl, iconWidth, iconHeight, color } = props;
  const { t } = useTranslation("index");

  return (
    <div key={id} className={cn(styles["item"], styles[`item--${color}`])}>
      <div className={cn(styles["item__icon"], styles[`item__icon--${color}`])}>
        <Image src={iconUrl} alt={id} width={iconWidth} height={iconHeight} />
      </div>

      <div
        className={cn(
          styles["item__description"],
          styles[`item__description--${color}`],
        )}
      >
        {t(`lets.items.${id}.description`)}
      </div>

      <div
        className={cn(
          styles["item__bottom_text"],
          styles[`item__bottom_text--${color}`],
        )}
      >
        {t(`lets.items.${id}.bottomText`)}
      </div>
    </div>
  );
};

export default Item;
