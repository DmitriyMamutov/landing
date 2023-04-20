import { WEBSITE_LOGO } from "config/common";
import Image from "next/image";
import dynamic from "next/dynamic";
const Sticky = dynamic(() => import("./Sticky"), {
  ssr: false,
});

import styles from "./styles.module.scss";

const Header = (props) => {
  const { isVisible } = props;

  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header-content"]}>
          <div className={styles["header-content__logo"]}>
            <Image
              priority={true}
              src={WEBSITE_LOGO}
              width={160}
              height={43}
              alt="logo"
            />
          </div>
        </div>
      </div>

      <Sticky isVisible={isVisible} />
    </header>
  );
};

export default Header;
