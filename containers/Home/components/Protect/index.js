import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import List from "components/List";

import styles from "./styles.module.scss";

const Protect = () => {
  const { t } = useTranslation("index");

  return (
    <section className={styles["protect"]}>
      <div className="container">
        <Title
          firstTitle={t("protect.title")}
          level={2}
          size="h2"
          className={styles["protect__title"]}
        />
        <div className={styles["protect__description"]}>
          {t("protect.description")}
        </div>

        <List />
      </div>
    </section>
  );
};

export default Protect;
