import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
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

  const commentsList = comments.map(comment => (
    <Comment
      key={comment.id}
      deleteComment={deleteComment}
      ownerInfo={ownerInfo}
      comment={comment}
    />
  ));

  const addComment = e => {
    e.preventDefault();
    const text = e.target.input.value.trim();

    if (text !== '') {
      const myMessage = {
        userInfo: ownerInfo,
        context: text,
        postedTime: Date.now(),
        id: Math.random()
      };

      e.target.input.value = '';
      updateComments(prev => prev.concat(myMessage));

      // TODO  post comment
    }
  };

  return (
    <div className="comments-container">
      <div className="comments">{commentsList}</div>
      <div className="post-comment">
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysqwVdNUKASMQcQau2kXUBBgpHjRz_YqRJwduBzCQfCIrSFvz&s"
            alt="profile"
            className="image"
          />
        </div>
        <form onSubmit={e => addComment(e)} className="input-container">
          <input
            type="text"
            name="input"
            placeholder="Write a comment..."
            className="input"
          />
          <button type="submit" className="send-button">
            <img
              src="https://www.pinclipart.com/picdir/middle/201-2016537_send-message-icon-white-clipart-computer-icons-clip.png"
              alt="send"
              className="send-image"
            />
          </button>
        </form>
      </div>
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
