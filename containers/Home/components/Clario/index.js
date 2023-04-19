import { useEffect, useLayoutEffect, useState } from "react";
import { CLARIO_LIST } from "config/home";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";
import Title from "components/Title";
import Item from "./Item";

import styles from "./styles.module.scss";

const Clario = () => {
  const { t } = useTranslation("index");

  return (
    <section className={styles["clario"]}>
      <div className="container">
        <Title
          firstTitle={t("clario.title")}
          level={2}
          size="h2"
          className={styles["clario__title"]}
        />

        <div className={styles["clario-list"]}>
          {CLARIO_LIST.map(({ id, imageUrl, sublist }) => {
            return (
              <Item key={id} id={id} imageUrl={imageUrl} sublist={sublist} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Clario;
