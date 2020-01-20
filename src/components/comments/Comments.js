import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import Editor from '../editor/Editor';
import './comments.scss';

const Comments = ({ data, ownerInfo }) => {
  const [comments, updateComments] = useState(data);

  const deleteComment = toDelcomment => {
    const updatedComments = comments.filter(
      comment => comment.id !== toDelcomment.id
    );
    updateComments(updatedComments);
    // TODO delete comment
  };

  const addComment = e => {
    e.preventDefault();
    const text = e.target.input.value.trim();

    if (text !== '') {
      const myMessage = {
        id: Math.random(), // TODO Change id generation method
        userInfo: ownerInfo,
        context: text,
        postedTime: Date.now()
      };

      e.target.input.value = '';
      updateComments(prev => prev.concat(myMessage));

      // TODO  post comment
    }
  };
  const editComment = (e, commentToEdit) => {
    e.preventDefault();
    const text = e.target.input.value.trim();

    const editedComments = comments.map(comment => {
      if (comment.id === commentToEdit.id) {
        const tempComment = comment;
        tempComment.context = text;
        return tempComment;
      }
      return comment;
    });
    updateComments(editedComments);
  };

  const openCommentInEditor = commentToOpen => {
    const editedComments = comments.map(comment => {
      if (comment.id === commentToOpen.id) {
        return (
          <Editor
            key={comment.id}
            commentText={comment.context}
            comment={comment}
            addComment={addComment}
            editComment={editComment}
          />
        );
      }
      return comment;
    });
    updateComments(editedComments);
  };

  const commentsList = comments.map(comment => {
    if (Object.prototype.hasOwnProperty.call(comment, '$$typeof')) {
      return comment;
    }
    return (
      <Comment
        key={comment.id}
        deleteComment={deleteComment}
        openCommentInEditor={openCommentInEditor}
        ownerInfo={ownerInfo}
        comment={comment}
      />
    );
  });

  return (
    <div className="comments-container">
      <div className="comments">{commentsList}</div>
      <Editor addComment={addComment} />
    </div>
  );
};

Comments.defaultProps = {
  data: []
};

Comments.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  ownerInfo: PropTypes.shape({
    name: PropTypes.string,
    profileImageURL: PropTypes.string
  }).isRequired
};
export default Comments;
