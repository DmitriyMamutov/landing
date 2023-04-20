import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import Button from "components/Button";
import {
  START_CHECK,
  START_CARD_TOP_LIST,
  START_CARD_BOTTOM_LIST,
} from "config/home";
import Image from "next/image";
import cn from "classnames";

import styles from "./styles.module.scss";

const Start = () => {
  const { t } = useTranslation("index");

  return (
    <section className={styles["start"]}>
      <div className="container">
        <div className={styles["start__check"]}>
          <Image
            lazyBoundary="400px"
            src={START_CHECK}
            width={640}
            height={300}
            alt={t("start.title")}
          />
        </div>

        <Title
          className={styles["start__title"]}
          firstColor="white"
          firstTitle={t("start.title")}
        />

        <div className={cn(styles["start-card"], "price-card")}>
          <div className={styles["start-card-tag"]}>
            <div className={styles["start-card-tag__left"]}>
              {t("start.tag.leftText")}
            </div>
            <div
              className={styles["start-card-tag__right"]}
              dangerouslySetInnerHTML={{ __html: t("start.tag.rightText") }}
            />
          </div>
          <div className={styles["start-card-price"]}>
            <div className={styles["start-card-price__dollar"]}>
              {t("start.price.dollar")}
            </div>
            <div className={styles["start-card-price__integer"]}>
              {t("start.price.integer")}
            </div>
            <div className={styles["start-card-price__tenths"]}>
              {t("start.price.tenths")}
            </div>
            <div className={styles["start-card-price__days"]}>
              {t("start.price.days")}
            </div>
          </div>

          <Title
            level={4}
            size="h4"
            className={styles["start-card__top_subtitle"]}
            firstTitle={t("start.topSubtitle")}
          />
          <div className={styles["start-card-top_list"]}>
            {START_CARD_TOP_LIST.map(({ id, iconUrl }) => {
              return (
                <div key={id} className={styles["start-card-top_list-item"]}>
                  <div className={styles["start-card-top_list-item__icon"]}>
                    <Image
                      lazyBoundary="400px"
                      src={iconUrl}
                      alt={id}
                      width={40}
                      height={40}
                    />
                  </div>
                  <div className={styles["start-card-top_list-item__text"]}>
                    {t(`start.topItems.${id}.text`)}
                  </div>
                </div>
              );
            })}
          </div>

          <Button
            className={styles["start-card__button"]}
            text={t("start.buttonText")}
            size="medium"
          />

          <div className={styles["start-card__bottom_text"]}>
            {t("start.bottomText")}
          </div>

          <div className={styles["start-card-bottom_list"]}>
            {START_CARD_BOTTOM_LIST.map(
              ({ id, iconUrl, iconWidth, iconHeight }) => {
                return (
                  <div
                    key={id}
                    className={styles["start-card-bottom_list-item"]}
                  >
                    <div
                      className={cn(
                        styles["start-card-bottom_list-item__icon"],
                        styles[`start-card-bottom_list-item__icon--${id}`],
                      )}
                    >
                      <Image
                        lazyBoundary="400px"
                        src={iconUrl}
                        alt={id}
                        width={iconWidth}
                        height={iconHeight}
                      />
                    </div>
                    <div
                      className={styles["start-card-bottom_list-item__text"]}
                    >
                      {t(`start.bottomItems.${id}.text`)}
                    </div>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
