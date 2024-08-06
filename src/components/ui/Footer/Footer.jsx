import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer} data-testid="Footer">
      Copyright &copy; 2024 DESORBAIX
    </div>
  );
};


export default Footer;
