import React, { useState } from "react";
import cx from "classnames";
import ScrollDownBtn from "../ScrollDownBtn";
import * as styles from "./Utils.module.scss";
import { useWindowScroll } from "../../hooks/useWindowScroll";

const Utils = () => {
  const [hidden, setHidden] = useState(false);
  const onScroll = useWindowScroll();

  onScroll(() => {
    if (hidden && window.scrollY < 300) {
      setHidden(false);
    }
    if (!hidden && window.scrollY > 300) {
      setHidden(true);
    }
  });

  return (
    <div
      aria-label="This section contains utilities"
      className={cx(styles.container, { [styles.hidden]: hidden })}
    >
      <ScrollDownBtn />
    </div>
  );
};

export default Utils;
