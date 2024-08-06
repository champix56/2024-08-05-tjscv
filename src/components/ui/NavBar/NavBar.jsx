import React from "react";
import PropTypes from "prop-types";
import styles from "./NavBar.module.css";

const NavBar = (props) => {
  return (
    <div className={styles.NavBar} data-testid="NavBar">
      {props.children}
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.any.isRequired,
};

NavBar.defaultProps = {
  children: 'NavBar component'
};

export default NavBar;
