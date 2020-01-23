import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import styled, { ThemeProvider } from 'styled-components';
import Comment from '../comment/Comment';
import Editor from '../editor/Editor';
import './comments.scss';

const Comments = ({ data, ownerInfo, height, width, theme }) => {
  const [comments, updateComments] = useState(data);
  const [loading, setLoading] = useState(false);
  const [userTheme, setTheme] = useState(theme);
  const [currentCommentToEdit, setCurrentComment] = useState({});

  // Themes
  const primary = {
    commentsContainerBackground: '#63b7af',
    commentBackground: '#ffffff',
    sendButton: '#333333'
  };

  const validateURL = myURL => {
    const pattern = new RegExp(
      '^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$',
      'i'
    );
    return pattern.test(myURL);
  };

  useEffect(() => {
    // If data is URL
    if (typeof data === 'string' && validateURL(data)) {
      setLoading(true);
      axios
        .get(data)
        .then(response => {
          updateComments(response.data);
          setLoading(false);
        })
        .catch(err => {
          throw new Error(err);
        });
    }
  }, []);

  // TODO change theme

  useEffect(() => {
    // Setting up theme
    switch (theme) {
      case 'primary':
        setTheme({ ...primary });
        break;
      default:
    }
  }, [theme]);

  const removeBothEndBreaks = htmlText => {
    let tempText = htmlText;

    while (tempText.endsWith('<p><br></p>')) {
      const len = tempText.length;
      tempText = tempText.substring(0, len - 11);
    }

    while (tempText.startsWith('<p><br></p>')) {
      tempText = tempText.substring(11);
    }
    return tempText;
  };

  const addComment = (event, newCommentText, reactQuillRef) => {
    event.preventDefault();

    const editor = reactQuillRef.current.getEditor();
    const unprivilegedEditor = reactQuillRef.current.makeUnprivilegedEditor(
      editor
    );

    let text = unprivilegedEditor.getText().trim();

    if (text !== '') {
      text = removeBothEndBreaks(newCommentText);
      const myMessage = {
        id: Math.random(), // TODO Change id generation method
        userInfo: ownerInfo,
        context: text,
        postedTime: Date.now()
      };

      updateComments(prev => [...prev, myMessage]);

      // TODO  post comment
    }
  };

  const deleteComment = toDelcomment => {
    const updatedComments = comments.filter(
      comment => comment.id !== toDelcomment.id
    );
    updateComments(updatedComments);

    // TODO delete comment
  };

  const editComment = (event, text, commentToEdit) => {
    event.preventDefault();

    const editedComments = comments.map(comment => {
      if (comment.id === commentToEdit.id) {
        const tempComment = comment;
        tempComment.context = removeBothEndBreaks(text).trim();
        return tempComment;
      }
      return comment;
    });
    updateComments(editedComments);

    // TODO  post comment
  };

  const cancelEditing = commentToCancel => {
    updateComments(prev => {
      const updatedComments = prev.map(comment =>
        Object.prototype.hasOwnProperty.call(comment, '$$typeof') &&
        comment.props.comment.id === commentToCancel.id
          ? commentToCancel
          : comment
      );
      return updatedComments;
    });
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
            cancelEditing={cancelEditing}
          />
        );
      }
      return comment;
    });

    updateComments(editedComments);
    setCurrentComment(commentToOpen);
  };

  const commentsList =
    typeof comments === 'object' &&
    comments.map(comment => {
      if (Object.prototype.hasOwnProperty.call(comment, '$$typeof')) {
        if (comment.props.comment.id === currentCommentToEdit.id) {
          return comment;
        }

        cancelEditing(comment.props.comment);
      }

      return (
        <Comment
          key={comment.id}
          deleteComment={deleteComment}
          openCommentInEditor={openCommentInEditor}
          ownerInfo={ownerInfo}
          comment={comment}
          theme={userTheme}
        />
      );
    });

  const CustomCommentsContainer = styled.div`
    background-color: ${props =>
      props.theme.userTheme.commentsContainerBackground};
  `;

  return (
    <ThemeProvider theme={{ userTheme }}>
      <CustomCommentsContainer className="comments-container" style={{ width }}>
        {loading ? (
          <div className="loader"> Loading... </div>
        ) : (
          <div className="comments" style={{ height }}>
            {commentsList}
          </div>
        )}
        <Editor addComment={addComment} />
      </CustomCommentsContainer>
    </ThemeProvider>
  );
};

Comments.defaultProps = {
  data: [],
  height: null,
  width: null,
  theme: {}
};

Comments.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  ownerInfo: PropTypes.shape({
    name: PropTypes.string,
    profileImageURL: PropTypes.string
  }).isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  theme: PropTypes.oneOf(['primary', 'secondary'])
};
export default Comments;
