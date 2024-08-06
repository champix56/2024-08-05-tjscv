import React from "react";
import PropTypes from "prop-types";
import styles from "./FlexWFirstGrow.module.css";

const FlexWFirstGrow = (props) => {
  return (
    <div className={styles.FlexWFirstGrow} data-testid="FlexWFirstGrow">
      {props.children}
    </div>
  );
};

FlexWFirstGrow.propTypes = {
  children: PropTypes.any.isRequired,
};

FlexWFirstGrow.defaultProps = {
  children: 'FlexWFirstGrow component'
};

export default FlexWFirstGrow;
