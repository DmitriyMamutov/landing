import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import Slider from "react-slick";
import { LETS_SLIDER_LIST } from "config/home";
import Arrow from "./Arrow";
import Item from "./Item";

import styles from "./styles.module.scss";

const sliderSettings = {
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  adaptiveHeight: false,
  initialSlide: 1,
  arrows: true,
  nextArrow: <Arrow isNext />,
  prevArrow: <Arrow />,
};

const Lets = () => {
  const { t } = useTranslation("index");

  return (
    <section className={styles["lets"]}>
      <div className="container">
        <Title
          firstTitle={t("lets.title")}
          level={2}
          size="h2"
          className={styles["lets__title"]}
        />

        <Slider {...sliderSettings} className={styles["lets-slider"]}>
          {LETS_SLIDER_LIST.map(
            ({ id, iconUrl, iconWidth, iconHeight, color }) => {
              return (
                <Item
                  key={id}
                  id={id}
                  iconUrl={iconUrl}
                  iconWidth={iconWidth}
                  iconHeight={iconHeight}
                  color={color}
                />
              );
            },
          )}
        </Slider>
      </div>
    </section>
  );
};

export default Lets;
