import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.textarea`
  width: 100%;
  outline: none;
  border-color: "#eee";
`;

const Input = ({ value }) => {
  return <StyledInput cols={40} rows={10} value={value} />;
};

Input.propTypes = {
  value: PropTypes.string
};

Input.defaultProps = {
  value: ""
};

export default Input;
