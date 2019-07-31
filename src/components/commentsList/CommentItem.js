import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { ButtonDanger, ButtonPrimary } from "../Button";
import Input from "../Input";

const StyledCommentItem = styled.div`
  padding: 12px;

  &:not(:last-child) {
    border-bottom: 1px solid ${props => props.theme.colorGreyLight2};
  }
`;

const StyledCommentImageWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 12px;
`;

const StyledCommnetImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: ${props => props.theme.borderRadiusCircle};
`;

const StyledCommenterName = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 600;
`;

const StyledComment = styled.div`
  font-size: 14px;
  color: #333;
  width: 60%;
  line-height: 20px;

  @media only screen and (max-width: ${props => props.theme.BP_MEDIUM}) {
    width: 100%;
  }
`;

const StyledCommentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: ${props => props.theme.BP_MEDIUM}) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const EditWrapper = styled.div`
  padding-bottom: 16px;
`;

const StyledButtonWrapper = styled.div`
  padding: 12px 0px;
  text-align: right;
`;

const CommentItem = ({ details, ...restProps }) => {
  const [editMode, setEditMode] = useState(false);

  if (!editMode) {
    return (
      <StyledCommentItem>
        <StyledCommentImageWrapper>
          <StyledCommnetImage src="https://jpoissonnier.gallerycdn.vsassets.io/extensions/jpoissonnier/vscode-styled-components/0.0.26/1553589418918/Microsoft.VisualStudio.Services.Icons.Default" />
          <StyledCommenterName>Default Name</StyledCommenterName>
        </StyledCommentImageWrapper>
        <StyledCommentWrapper>
          <StyledComment>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            perspiciatis nesciunt quasi hic facilis optio, sint atque. Quia
            obcaecati provident architecto, sunt ab ea voluptatem eum magni
            amet, voluptatibus sed.
          </StyledComment>
          <ButtonPrimary onClick={() => setEditMode(true)}>Edit</ButtonPrimary>
        </StyledCommentWrapper>
      </StyledCommentItem>
    );
  }

  return (
    <EditWrapper>
      <Input
        value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
    perspiciatis nesciunt quasi hic facilis optio, sint atque. Quia
    obcaecati provident architecto, sunt ab ea voluptatem eum magni amet,
    voluptatibus sed. VERY BAD"
      />

      <StyledButtonWrapper>
        <ButtonDanger onClick={() => setEditMode(false)}>Cancel</ButtonDanger>
        <ButtonPrimary onClick={() => alert("saving")}>Save</ButtonPrimary>
      </StyledButtonWrapper>
    </EditWrapper>
  );
};

CommentItem.propTypes = {
  details: PropTypes.object
};

CommentItem.defaultProps = {
  details: {}
};

export default CommentItem;
