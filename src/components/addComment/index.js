import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "../Input";
import { ButtonPrimary } from "../Button";

const StyledAddComment = styled.div`
  padding: 32px;
  background: papayawhip;
`;

const StyledButtonWrapper = styled.div`
  padding: 12px 0px;
`;

// give a try to get value of input with refs **

const AddComment = ({ onClick, buttonLabel, ...restProps }) => {
  return (
    <StyledAddComment>
      <Input />
      <StyledButtonWrapper>
        <ButtonPrimary onClick={() => alert("HELLO")} label={buttonLabel} />
      </StyledButtonWrapper>
    </StyledAddComment>
  );
};

AddComment.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string
};

AddComment.defaultProps = {
  onClick: () => {},
  buttonLabel: "Button"
};

export default AddComment;
