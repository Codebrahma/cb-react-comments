import React from "react";
import styled from "styled-components";

import CommentItem from "./CommentItem";

const StyleCommentsList = styled.div`
  padding: 32px;
  backgound-color: papayawhip;
`;

const CommentsList = ({ comments = [1, 2, 2, 4, 5, 6] }) => {
  return (
    <StyleCommentsList>
      {comments.map(comment => (
        <CommentItem details={comment} />
      ))}
    </StyleCommentsList>
  );
};

export default CommentsList;
