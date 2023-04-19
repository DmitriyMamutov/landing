import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import Accordion from "./Accordion";

import styles from "./styles.module.scss";

const Steps = () => {
  const { t } = useTranslation("index");

  const list = t("steps.list", {}, { returnObjects: true });

  return (
    <section className={styles["steps"]}>
      <div className="container">
        <Title
          firstTitle={t("steps.firstTitle")}
          secondTitle={t("steps.secondTitle")}
          secondColor="green"
          level={2}
          size="h2"
          className={styles["steps__title"]}
        />

        <div className={styles["steps-list"]}>
          {list.map(({ id, title, text }) => {
            return <Accordion key={id} id={id} title={title} text={text} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
