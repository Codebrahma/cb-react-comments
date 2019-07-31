import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledInput = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: ${props => props.theme.borderRadius};
  border-color: ${props => props.theme.colorGreyLight};
`;

const Input = ({ value, onChange }) => {
  return (
    <StyledInput
      cols={40}
      rows={10}
      value={value}
      onChange={ev => onChange(ev.target.value)}
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
