import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Comment from '../comment/Comment';
import './comments.scss';

const Comments = ({ data, userInfo }) => {
  const [comments, updateComments] = useState(data);

  const commentsList = comments.map((comment, index) => (
    <Comment key={index} {...comment} />
  ));

  const addComment = e => {
    e.preventDefault();
    const text = e.target.input.value.trim();
    if (text !== '') {
      const myMessage = {
        userInfo,
        context: text,
        postedTime: Date.now()
      };
      e.target.input.value = '';
      updateComments(prev => prev.concat(myMessage));
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
          <img
            src="https://www.pinclipart.com/picdir/middle/201-2016537_send-message-icon-white-clipart-computer-icons-clip.png"
            alt="send"
            className="send"
          />
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
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    profileImageURL: PropTypes.string
  }).isRequired
};
export default Comments;
