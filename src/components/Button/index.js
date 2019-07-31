import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: "12px";
`;

const ButtonDanger = styled(StyledButton)`
  color: ${props => props.theme.colorRedLight};
`;

const ButtonPrimary = styled(StyledButton)`
  color: ${props => props.theme.colorPrimary};

  font-weight: 400;
  font-size: 14px;
`;

const Button = ({ children, onClick, ...restProps }) => {
  return (
    <StyledButton onClick={onClick} {...restProps}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

Button.defaultProps = {
  children: "Button",
  onClick: () => {}
};

export { Button, ButtonDanger, ButtonPrimary };
