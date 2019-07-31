import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Input from "../Input";
import { ButtonPrimary } from "../Button";

const StyledAddComment = styled.div`
  padding: 32px;
  background: ${props => props.theme.colorWhite};
`;

const StyledButtonWrapper = styled.div`
  padding: 12px 0px;
  text-align: right;
`;

const AddComment = ({ onClick, buttonLabel, onChange, ...restProps }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentText = text => setCommentText(text);

  return (
    <StyledAddComment {...restProps}>
      <Input onChange={handleCommentText} value={commentText} />
      <StyledButtonWrapper>
        <ButtonPrimary onClick={() => alert("Adding comment...")}>
          Add comment
        </ButtonPrimary>
      </StyledButtonWrapper>
    </StyledAddComment>
  );
};

AddComment.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func,
  buttonLabel: PropTypes.string
};

AddComment.defaultProps = {
  onClick: () => {},
  onChange: () => {},
  buttonLabel: "Button"
};

export default AddComment;
