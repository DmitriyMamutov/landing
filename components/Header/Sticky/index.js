import useTranslation from "next-translate/useTranslation";
import cn from "classnames";
import { WEBSITE_LOGO } from "config/common";
import Image from "next/image";
import ScrollButton from "components/ScrollButton";

import styles from "./styles.module.scss";

const Sticky = (props) => {
  const { isVisible } = props;
  const { t } = useTranslation("common");

  const stickyClass = cn(styles["sticky"], {
    [styles["sticky--active"]]: !isVisible,
  });

  return (
    <div className={stickyClass}>
      <div className="container">
        <div className={styles["sticky-wrapper"]}>
          <div className={styles["sticky-wrapper__logo"]}>
            <Image
              src={WEBSITE_LOGO}
              width={160}
              height={43}
              alt="sticky-logo"
            />
          </div>

          <ScrollButton size="smallest" text={t("header.buttonText")} />
        </div>
      </div>
    </div>
  );
};

export default Sticky;
