import React from "react";
import styled from "styled-components";

import AddComment from "../addComment";
import CommentsList from "../commentsList";

const StyledHeading = styled.div`
  font-size: ${props => props.theme.headingPrimary};
  font-weight: 600;

  padding: 24px;
  border-bottom: 1px solid ${props => props.theme.colorGreyLight};
`;

const AppComments = ({ ...restProps }) => {
  return (
    <>
      <StyledHeading>Comments</StyledHeading>
      <CommentsList />
      <AddComment />
    </>
  );
};

export default AppComments;
