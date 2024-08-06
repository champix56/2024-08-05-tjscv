import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeSvgViewer.module.css";

const MemeSvgViewer = (props) => {
  return (
    <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
      {props.children}
    </div>
  );
};

MemeSvgViewer.propTypes = {
  children: PropTypes.any.isRequired,
};

MemeSvgViewer.defaultProps = {
  children: 'MemeSvgViewer component'
};

export default MemeSvgViewer;
