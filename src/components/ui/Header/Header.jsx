import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.Header} data-testid="Header">
      {props.children}
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.any.isRequired,
};

Header.defaultProps = {
  children: 'Header component'
};

export default Header;
