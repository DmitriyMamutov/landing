import {
  PROBLEM_CLOCK,
  PROBLEM_PHONE,
  PROBLEM_BUBBLE,
  FIRST_LINE,
  SECOND_LINE,
} from "config/home";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import Button from "components/ScrollButton";
import Item from "./Item";

import styles from "./styles.module.scss";

const Clario = () => {
  const { t } = useTranslation("index");

  const list = t("problem.list", {}, { returnObjects: true });

  return (
    <section className={styles["problem"]}>
      <div className="container">
        <Title
          firstTitle={t("problem.title")}
          level={2}
          size="h2"
          className={styles["problem__title"]}
        />

        <div className={styles["problem__description"]}>
          {t("problem.description")}
        </div>
        <div className={styles["problem-tag"]}>
          <div className={styles["problem-tag__clock"]}>
            <Image
              src={PROBLEM_CLOCK}
              alt={t("problem.tagText")}
              width={26}
              height={38}
            />
          </div>
          <div
            className={styles["problem-tag__text"]}
            dangerouslySetInnerHTML={{ __html: t("problem.tagText") }}
          />
        </div>

        <div className={styles["problem-content"]}>
          <div className={styles["problem-content__phone"]}>
            <Image
              src={PROBLEM_PHONE}
              alt={t(`problem.list.${[0]}.text`)}
              width={544}
              height={972}
            />
          </div>

          <div className={styles["problem-content__bubble"]}>
            <Image
              src={PROBLEM_BUBBLE}
              alt={t("problem.title")}
              width={182}
              height={216}
            />
          </div>

          <div className={styles["problem-content__first_line"]}>
            <Image
              src={FIRST_LINE}
              alt={t("problem.title")}
              width={192}
              height={154}
            />
          </div>

          <div className={styles["problem-content__second_line"]}>
            <Image
              src={SECOND_LINE}
              alt={t("problem.title")}
              width={378}
              height={214}
            />
          </div>

          <div className={styles["problem-content-list"]}>
            {list.map(({ id, text }) => {
              return <Item key={id} id={id} text={text} />;
            })}
          </div>
        </div>

        <Button
          size="small"
          className={styles["problem__button"]}
          text={t("problem.buttonText")}
        />
      </div>
    </section>
  );
};

export default Clario;
