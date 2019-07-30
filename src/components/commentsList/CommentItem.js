import React from "react";
import styled from "styled-components";

const StyledCommentItem = styled.div`
  padding: 12px;

  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
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
  border-radius: 100px;
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
`;

const CommentItem = ({ ...restProps }) => {
  return (
    <StyledCommentItem>
      <StyledCommentImageWrapper>
        <StyledCommnetImage src="https://jpoissonnier.gallerycdn.vsassets.io/extensions/jpoissonnier/vscode-styled-components/0.0.26/1553589418918/Microsoft.VisualStudio.Services.Icons.Default" />
        <StyledCommenterName>Default Name</StyledCommenterName>
      </StyledCommentImageWrapper>
      <StyledComment>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
        perspiciatis nesciunt quasi hic facilis optio, sint atque. Quia
        obcaecati provident architecto, sunt ab ea voluptatem eum magni amet,
        voluptatibus sed.
      </StyledComment>
    </StyledCommentItem>
  );
};

export default CommentItem;
