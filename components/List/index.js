import useTranslation from "next-translate/useTranslation";
import { ICONS_LIST } from "config/common";
import Image from "next/image";

import styles from "./styles.module.scss";

const IconsList = () => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["list"]}>
      {ICONS_LIST.map(({ id, iconUrl, iconWidth, iconHeight }) => {
        return (
          <div key={id} className={styles["list-item"]}>
            <div className={styles["list-item__icon"]}>
              <Image
                src={iconUrl}
                width={iconWidth}
                height={iconHeight}
                alt={id}
                priority={true}
              />
            </div>
            <div className={styles["list-item__text"]}>
              {t(`listItems.${id}.text`)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default IconsList;
