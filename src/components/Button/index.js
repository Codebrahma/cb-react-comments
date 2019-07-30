import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: "12px";
`;

const ButtonDanger = styled(StyledButton)`
  color: tomato;
  background-color: transparent;
`;

const ButtonPrimary = styled(StyledButton)`
  color: blueviolet;
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
`;

const Button = ({ label, onClick, ...restProps }) => {
  return (
    <StyledButton onClick={onClick} {...restProps}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  label: "Button",
  onClick: () => {}
};

export { Button, ButtonDanger, ButtonPrimary };
