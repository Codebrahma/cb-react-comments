import React from "react";
import styled from "styled-components";

const StyledInput = styled.textarea`
  width: 100%;
  //   padding: 8px;
  outline: none;
`;

const Input = () => {
  return <StyledInput cols={40} rows={10} />;
};

export default Input;
