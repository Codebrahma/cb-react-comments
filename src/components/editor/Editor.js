import React from 'react';
import PropTypes from 'prop-types';
import './Editor.scss';

const Editor = ({ addComment, editComment, commentText, comment }) => (
  <div className="post-comment">
    <div className="image-container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysqwVdNUKASMQcQau2kXUBBgpHjRz_YqRJwduBzCQfCIrSFvz&s"
        alt="profile"
        className="image"
      />
    </div>
    <form
      onSubmit={event =>
        editComment ? editComment(event, comment) : addComment(event)
      }
      className="input-container"
    >
      <input
        type="text"
        name="input"
        placeholder="Write a comment..."
        className="input"
        defaultValue={commentText}
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
);

Editor.defaultProps = {
  commentText: '',
  comment: null,
  editComment: null
};

Editor.propTypes = {
  addComment: PropTypes.func.isRequired,
  editComment: PropTypes.func,
  commentText: PropTypes.string,
  comment: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Editor;
