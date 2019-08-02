import React from "react";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({ children, type, onClick, ...restProps }) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  children: "Button",
  onClick: () => {},
  type: "primary"
};

export default Button;
