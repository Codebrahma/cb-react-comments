import React from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

const StyledAddComment = styled.div`
  padding: 32px;
  background: papayawhip;
`;

const StyledButtonWrapper = styled.div`
  padding: 12px 0px;
`;

// give a try to get value of input with refs **

const AddComment = ({ ...restProps }) => {
  return (
    <StyledAddComment>
      <Input />
      <StyledButtonWrapper>
        <Button onClick={() => alert("HELO")}>Add comment</Button>
      </StyledButtonWrapper>
    </StyledAddComment>
  );
};

export default AddComment;
