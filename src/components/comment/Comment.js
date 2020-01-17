import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './comment.scss';

const Comment = ({ deleteComment, ownerInfo, comment }) => {
  const { userInfo, context } = comment;
  const myId = ownerInfo.id;
  const uid = userInfo.id;
  const { name, profileImageURL, profileURL } = userInfo;
  const [showOptions, toggleOptions] = useState(false);
  const currentUserComment = myId === uid;
  return (
    <div className="comment">
      <div className="image-container">
        <img src={profileImageURL} className="image" alt="profile" />
      </div>
      <div className="context-container">
        <span className="name">
          <a href={profileURL}>{name}</a>
        </span>
        <span className="context">{context}</span>
      </div>

      <div className="options-container">
        <div className="options-description">
          {currentUserComment ? 'Edit or Delete' : 'Hide or Report'}
        </div>
        <div
          onClick={() => toggleOptions(prev => !prev)}
          className="options-icon"
        >
          &hellip;
        </div>
        <div
          style={{ visibility: showOptions ? 'visible' : 'hidden' }}
          className="options"
        >
          {currentUserComment ? (
            <>
              <div className="option">Edit</div>
              <div className="option" onClick={() => deleteComment(comment)}>
                Delete
              </div>
            </>
          ) : (
            <>
              <div className="option">Hide</div>
              <div className="option">Report</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Comment.propType = {
  deleteComment: PropTypes.func.isRequired,
  ownerInfo: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    profileImageURL: PropTypes.string
  }),
  comment: PropTypes.shape({
    id: PropTypes.any,
    userInfo: PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      profileImageURL: PropTypes.string
    }),
    context: PropTypes.string,
    postedTime: PropTypes.string
  })
};
export default Comment;
