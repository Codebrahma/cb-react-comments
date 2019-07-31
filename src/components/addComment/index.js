import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "../Input";
import Button from "../Button";

import styles from "./AddComment.module.scss";

const AddComment = ({ onClick, buttonLabel, onChange, ...restProps }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentText = text => setCommentText(text);

  return (
    <div className={styles.wrapper} {...restProps}>
      <Input onChange={handleCommentText} value={commentText} />
      <div className={styles.buttonWrapper}>
        <Button type="primary" onClick={() => alert("Adding comment...")}>
          Add comment
        </Button>
      </div>
    </div>
  );
};

AddComment.propTypes = {
  onClick: PropTypes.func.isRequired,
  onChange: PropTypes.func
};

AddComment.defaultProps = {
  onClick: () => {},
  onChange: () => {}
};

export default AddComment;
