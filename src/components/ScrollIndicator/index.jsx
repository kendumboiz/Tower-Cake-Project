import React, { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";
import styles from "./Scroll.module.css";

function ScrollIndicator(props) {
  const { x, y } = useWindowScroll();
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    setScrolled((y / height) * 100);
  }, [y]);
  return (
    <div className={styles.scroll_container}>
      <div className={styles.indicator} style={{ width: `${scrolled}%` }}></div>
    </div>
  );
}

export default ScrollIndicator;