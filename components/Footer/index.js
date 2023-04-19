import useTranslation from "next-translate/useTranslation";
import { WEBSITE_LOGO } from "config/common";
import Image from "next/image";

import styles from "./styles.module.scss";

const Footer = () => {
  const { t } = useTranslation("common");
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer__logo"]}>
          <Image src={WEBSITE_LOGO} width={160} height={43} alt="footer-logo" />
        </div>

        <div className={styles["footer__text"]}>{t("footer.text")}</div>
      </div>
    </footer>
  );
};

export default Footer;
