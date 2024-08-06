import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./TemplateName.module.css";
export const templateNameInitialState = {};
const TemplateName = (props) => {
  const [state, setstate] = useState(templateNameInitialState);
  useEffect(() => {
    //mount & update de state
  }, [state]);
  useEffect(() => {
    //mount
    return () => {
      //unmount
    };
  }, []);
  return (
    <div className={styles.TemplateName} data-testid="TemplateName">
      TemplateName Component
      <br />
      {JSON.stringify(state)}
    </div>
  );
};

TemplateName.propTypes = {};

TemplateName.defaultProps = {};

export default TemplateName;
