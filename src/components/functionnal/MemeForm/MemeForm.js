import React from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

const MemeForm = () => (
  <div className={styles.MemeForm} data-testid="MemeForm">
    MemeForm Component
  </div>
);

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
