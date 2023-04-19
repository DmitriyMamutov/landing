import { useState, useRef } from "react";
import cn from "classnames";
import { ReactSVG } from "react-svg";
import { ARROW } from "config/home";

import styles from "./styles.module.scss";

const Accordion = (props) => {
  const { id, title, text } = props;

  const [listName, setListName] = useState("");
  const [height, setHeight] = useState("0px");

  const content = useRef(null);

  const handleOpenList = (name) => () => {
    if (listName === name) {
      setListName("");
      setHeight("0px");
    } else {
      setListName(name);
      setHeight(`${content.current.scrollHeight}px`);
    }
  };

  return (
    <div className={styles["accordion"]} key={id}>
      <div
        onClick={handleOpenList(id)}
        className={cn(styles["accordion-item"], {
          [styles["accordion-item--active"]]: listName === id,
        })}
      >
        <div
          className={cn(styles["accordion-item__number"], {
            [styles["accordion-item__number--active"]]: listName === id,
          })}
        >
          {id.slice(1)}
        </div>
        <div
          className={cn(styles["accordion-item__title"], {
            [styles["accordion-item__title--active"]]: listName === id,
          })}
        >
          {title}
        </div>

        <ReactSVG
          className={cn(styles["accordion-item__icon"], {
            [styles["accordion-item__icon--active"]]: listName === id,
          })}
          src={ARROW}
        />
      </div>
      <div
        style={{ height: `${height}` }}
        ref={content}
        key={id}
        className={cn(styles["accordion-hidden_content"], {
          [styles["accordion-hidden_content--active"]]: listName === id,
        })}
      >
        <div className={styles["accordion-hidden_content__text"]}>{text}</div>
      </div>
    </div>
  );
};

export default Accordion;
