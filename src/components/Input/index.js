import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

const Input = ({ value, onChange, ...restProps }) => {
  return (
    <textarea
      className={styles.inputStyles}
      cols={40}
      rows={10}
      value={value}
      onChange={ev => onChange(ev.target.value)}
      {...restProps}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

Input.defaultProps = {
  value: "",
  onChange: () => {}
};

export default Input;
