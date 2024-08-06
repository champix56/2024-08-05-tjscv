import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeSVGViewer.module.css";

const MemeSVGViewer = (props) => {
  return (
    <div className={styles.MemeSVGViewer} data-testid="MemeSvgViewer">
      MemeSvgViewer Component
    </div>
  );
};

MemeSVGViewer.propTypes = {};

MemeSVGViewer.defaultProps = {};

export default MemeSVGViewer;
