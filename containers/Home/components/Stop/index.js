import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import Button from "components/ScrollButton";

import styles from "./styles.module.scss";

const Stop = () => {
  const { t } = useTranslation("index");

  return (
    <section className={styles["stop"]}>
      <div className="container">
        <Title
          firstTitle={t("stop.firstTitle")}
          secondTitle={t("stop.secondTitle")}
          level={2}
          size="h1"
          className={styles["stop__title"]}
        />

        <Button
          className={styles["stop__button"]}
          text={t("stop.buttonText")}
        />
      </div>
    </section>
  );
};

export default Stop;
