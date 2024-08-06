import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
export const memeFormInitialState = {};
const MemeForm = (props) => {
  const [state, setstate] = useState(memeFormInitialState);
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
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
      <br />
      {JSON.stringify(state)}
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
