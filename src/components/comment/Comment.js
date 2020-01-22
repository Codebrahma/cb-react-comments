import React, { useState } from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import './comment.scss';

const Comment = ({
  deleteComment,
  openCommentInEditor,
  ownerInfo,
  comment
}) => {
  const { userInfo, context } = comment;
  const myId = ownerInfo.id;
  const uid = userInfo.id;
  const { name, profileImageURL, profileURL } = userInfo;
  const [showOptions, toggleOptions] = useState(false);
  const currentUserComment = myId === uid;

  return (
    <div className="comment-container">
      <div className="image-container">
        <img className="image" src={profileImageURL} alt="profile" />
      </div>
      <div className="comment">
        <div className="header">
          <div className="info">
            <div className="name">
              <a href={profileURL}>{name}</a>
            </div>
          </div>
          <div className="options-container">
            <div
              className="options-icon"
              onClick={() => toggleOptions(prev => !prev)}
            >
              &hellip;
            </div>
            {showOptions && (
              <div className="options">
                {currentUserComment ? (
                  <>
                    <div
                      className="option"
                      onClick={() => openCommentInEditor(comment)}
                    >
                      Edit
                    </div>
                    <div
                      className="option"
                      onClick={() => deleteComment(comment)}
                    >
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
            )}
          </div>
        </div>
        <div className="comment-text">{parse(context)}</div>
      </div>
    </div>
  );
};

Comment.propTypes = {
  deleteComment: PropTypes.func.isRequired,
  openCommentInEditor: PropTypes.func.isRequired,
  ownerInfo: PropTypes.shape({
    id: PropTypes.any,
    name: PropTypes.string,
    profileURL: PropTypes.string,
    profileImageURL: PropTypes.string
  }).isRequired,
  comment: PropTypes.shape({
    id: PropTypes.any,
    userInfo: PropTypes.shape({
      id: PropTypes.any,
      name: PropTypes.string,
      profileURL: PropTypes.string,
      profileImageURL: PropTypes.string
    }),
    context: PropTypes.any,
    postedTime: PropTypes.any
  }).isRequired
};
export default Comment;
