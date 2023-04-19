import cn from "classnames";

import styles from "./styles.module.scss";

const Title = (props) => {
  const {
    size,
    firstTitle,
    secondTitle,
    className,
    firstColor,
    secondColor,
    level,
    font,
    weight,
    refProp,
  } = props;

  const titleClass = cn(
    styles["title"],
    {
      [styles["title--h1"]]: size === "h1",
      [styles["title--h2"]]: size === "h2",
      [styles["title--h3"]]: size === "h3",
      [styles["title--h4"]]: size === "h4",
      [styles["title--moderat"]]: font === "Moderat",
      [styles["title--dark_blue"]]: firstColor === "dark-blue",
      [styles["title--white"]]: firstColor === "white",
      [styles["title--300"]]: weight === 300,
      [styles["title--400"]]: weight === 400,
      [styles["title--500"]]: weight === 500,
      [styles["title--600"]]: weight === 600,
      [styles["title--700"]]: weight === 700,
      [styles["title--800"]]: weight === 800,
      [styles["title--900"]]: weight === 900,
    },
    className,
  );

  const secondTitleClass = cn(styles["title__second"], {
    [styles["title__second--violet"]]: secondColor === "violet",
    [styles["title__second--green"]]: secondColor === "green",
  });

  const CustomTag = `h${level}`;

  return (
    <div ref={refProp} className={titleClass}>
      <CustomTag>
        {firstTitle}

        {secondTitle && <span className={secondTitleClass}>{secondTitle}</span>}
      </CustomTag>
    </div>
  );
};

Title.defaultProps = {
  size: "h2",
  firstColor: "dark-blue",
  secondColor: "violet",
  level: 2,
  weight: 700,
  font: "Moderat",
};

export default Title;
