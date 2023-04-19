import { HERO_VIDEO } from "config/home";
import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import Button from "components/ScrollButton";
import Video from "./Video";
import TopList from "components/List";
import BottomItem from "./BottomItem";

import styles from "./styles.module.scss";

const Hero = (props) => {
  const { refProp } = props;
  const { t } = useTranslation("index");

  const list = t("hero.bottomList", {}, { returnObjects: true });

  return (
    <section className={styles["hero"]}>
      <div className="container">
        <Title
          firstTitle={t("hero.firstTitle")}
          secondTitle={t("hero.secondTitle")}
          level={1}
          size="h1"
          className={styles["hero__title"]}
        />
        <div className={styles["hero__description"]}>
          {t("hero.description")}
        </div>

        <div ref={refProp}>
          <Button
            className={styles["hero__button"]}
            text={t("hero.buttonText")}
          />
        </div>

        <TopList />

        <div className={styles["hero__video"]}>
          <Video src={HERO_VIDEO} />
        </div>

        <Title
          className={styles["hero__bottom_title"]}
          firstTitle={t("hero.bottomTitle")}
          size="h4"
          level={4}
        />
        <div className={styles["hero-bottom_list"]}>
          {list.map(({ id, text }) => {
            return <BottomItem id={id} key={id} text={text} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
