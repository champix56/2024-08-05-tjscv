import React from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";

const TemplateName = (props) => {
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
