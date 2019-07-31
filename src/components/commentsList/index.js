import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import CommentItem from "../commentItem";

const StyleCommentsList = styled.div`
  padding: 32px;
  background-color: ${props => props.theme.colorWhite};
`;

const CommentsList = ({ comments }) => {
  return (
    <StyleCommentsList>
      {comments.map(comment => (
        <CommentItem details={comment} />
      ))}
    </StyleCommentsList>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array
};

CommentsList.defaultProps = {
  comments: [1, 2, 3, 5, 6, 4, 7, 8]
};

export default CommentsList;
