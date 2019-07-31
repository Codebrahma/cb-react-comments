import React from "react";
import PropTypes from "prop-types";

import CommentItem from "../commentItem";
import styles from "./CommentsList.module.scss";

const CommentsList = ({ comments }) => {
  return (
    <div className={styles.wrapper}>
      {comments.map(comment => (
        <CommentItem details={comment} />
      ))}
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array
};

CommentsList.defaultProps = {
  comments: [1, 2, 3, 5, 6, 4, 7, 8]
};

export default CommentsList;
