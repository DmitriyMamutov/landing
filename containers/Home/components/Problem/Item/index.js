import cn from "classnames";

import styles from "./styles.module.scss";

const Item = (props) => {
  const { id, text } = props;

  return (
    <div key={id} className={cn(styles["item"], styles[`item--${id}`])}>
      <div
        className={cn(styles["item__number"], styles[`item__number--${id}`])}
      >
        {id.slice(1)}
      </div>
      <div
        className={cn(styles["item__text"], styles[`item__text--${id}`])}
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default Item;
