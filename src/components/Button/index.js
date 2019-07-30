import React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px;
  border: none;
  background-color: pink;
  cursor: pointer;
  color: #333;
  outline: none;
`;

const Button = ({ children, onClick, ...restProps }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;
