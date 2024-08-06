import React from "react";
import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.Footer} data-testid="Footer">
      {props.children}
    </div>
  );
};

Footer.propTypes = {
  children: PropTypes.any.isRequired,
};

Footer.defaultProps = {
  children: 'Footer component'
};

export default Footer;
