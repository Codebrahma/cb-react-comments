import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './comment.scss';

const Comment = ({ userInfo, context, postedTime }) => {
  const { name, profileImageURL } = userInfo;
  const [showOptions, toggleOptions] = useState(false);
  return (
    <div className="comment">
      <div className="image-container">
        <img src={profileImageURL} className="image" alt="profile" />
      </div>
      <div className="context-container">
        <span className="name">{name}</span>
        <span className="context">{context}</span>
      </div>

      <div className="options-container">
        <div className="options">edit or delete</div>
        <div onClick={() => toggleOptions(prev => !prev)}>&hellip;</div>
        <div style={{ display: showOptions ? 'block' : 'none' }}>
          <div>Edit</div>
          <div>Delete</div>
        </div>
      </div>
    </div>
  );
};

Comment.propType = {
  userInfo: PropTypes.shape({
    name: PropTypes.string,
    profileImageURL: PropTypes.string
  }).isRequired,
  context: PropTypes.any,
  postedTime: PropTypes.string
};
export default Comment;
