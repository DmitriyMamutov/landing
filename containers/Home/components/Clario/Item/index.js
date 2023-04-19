import { useEffect, useRef } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import useIsVisible from "hooks/useIsVisible";

import styles from "./styles.module.scss";

const Item = (props) => {
  const { id, sublist, imageUrl } = props;
  const { t } = useTranslation("index");

  const ref = useRef();
  const isVisible = useIsVisible(ref);

  useEffect(() => {
    if (isVisible) {
      console.log("Feature Shown:", t(`clario.items.${id}.title`));
    }
  }, [isVisible, t, id]);

  return (
    <div className={styles["item"]} key={id}>
      <div className={styles["item__image"]}>
        <Image src={imageUrl} width={544} height={744} alt={id} />
      </div>
      <Title
        refProp={ref}
        firstTitle={t(`clario.items.${id}.title`)}
        className={styles["item__title"]}
        level={3}
        size="h3"
      />
      <div className={styles["item__description"]}>
        {t(`clario.items.${id}.description`)}
      </div>

      <div className={styles["item-sublist"]}>
        {sublist.map(({ idx, iconUrl }) => {
          return (
            <div key={idx} className={styles["item-sublist-element"]}>
              <div className={styles["item-sublist-element__icon"]}>
                <Image src={iconUrl} width={48} height={49} alt={idx} />
              </div>

              <div className={styles["item-sublist-element__text"]}>
                {t(`clario.items.${id}.subitems.${idx}.text`)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Item;
