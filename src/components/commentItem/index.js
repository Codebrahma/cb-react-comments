import React, { useState } from "react";
import PropTypes from "prop-types";

import Button from "../Button";
import Input from "../Input";

import styles from "./CommentItem.module.scss";

const CommentItem = ({ details, ...restProps }) => {
  const [editMode, setEditMode] = useState(false);
  const [
    commentText,
    setCommentText
  ] = useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
  perspiciatis nesciunt quasi hic facilis optio, sint atque. Quia
  obcaecati provident architecto, sunt ab ea voluptatem eum magni amet,
  voluptatibus sed. VERY BAD`);

  const handleCommentText = text => setCommentText(text);

  if (!editMode) {
    return (
      <div className={styles.item}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            alt="demo"
            src="https://jpoissonnier.gallerycdn.vsassets.io/extensions/jpoissonnier/vscode-styled-components/0.0.26/1553589418918/Microsoft.VisualStudio.Services.Icons.Default"
          />
          <div className={styles.name}>Default Name</div>
        </div>
        <div className={styles.commentWrapper}>
          <div className={styles.comment}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            perspiciatis nesciunt quasi hic facilis optio, sint atque. Quia
            obcaecati provident architecto, sunt ab ea voluptatem eum magni
            amet, voluptatibus sed.
          </div>
          <Button type="primary" onClick={() => setEditMode(true)}>
            Edit
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.editWrapper}>
      <Input value={`${commentText}`} onChange={handleCommentText} autoFocus />

      <div className={styles.buttonWrapper}>
        <Button type="danger" onClick={() => setEditMode(false)}>
          Cancel
        </Button>
        <Button type="primary" onClick={() => alert("saving")}>
          Save
        </Button>
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  details: PropTypes.object
};

CommentItem.defaultProps = {
  details: {}
};

export default CommentItem;
