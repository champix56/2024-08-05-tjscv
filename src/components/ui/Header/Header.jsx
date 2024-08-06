import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.Header} data-testid="Header">
      <span className={styles.meme}>Meme</span>.
      <span className={styles.js}>js</span>
    </div>
  );
};


export default Header;
