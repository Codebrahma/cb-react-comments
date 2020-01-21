import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import parse from 'html-react-parser';
import Comment from '../comment/Comment';
import Editor from '../editor/Editor';
import './comments.scss';

const Comments = ({ data, ownerInfo }) => {
  const [comments, updateComments] = useState(data);
  const [loading, setLoading] = useState(false);

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

  const deleteComment = toDelcomment => {
    const updatedComments = comments.filter(
      comment => comment.id !== toDelcomment.id
    );
    updateComments(updatedComments);
    // TODO delete comment
  };

  const removeTailingEmptyLines = htmlToRemove => {
    const parsedContent = parse(htmlToRemove);
    for (let index = parsedContent.length - 1; index >= 0; index -= 1) {
      if (parsedContent[index].props.children.type === 'br') {
        parsedContent.pop();
      }
    }
    return parsedContent;
  };

  const addComment = (event, newCommentText, reactQuillRef) => {
    event.preventDefault();
    const editor = reactQuillRef.current.getEditor();
    const unprivilegedEditor = reactQuillRef.current.makeUnprivilegedEditor(
      editor
    );
    const text = unprivilegedEditor.getText().trim();
    const htmlContent = unprivilegedEditor.getHTML();
    const cleanedContent =
      htmlContent.length && removeTailingEmptyLines(htmlContent);
    if (text !== '') {
      const myMessage = {
        id: Math.random(), // TODO Change id generation method
        userInfo: ownerInfo,
        context: cleanedContent || htmlContent,
        postedTime: Date.now()
      };

      updateComments(prev => prev.concat(myMessage));

      // TODO  post comment
    }
  };

  const editComment = (event, text, commentToEdit) => {
    event.preventDefault();

    const editedComments = comments.map(comment => {
      if (comment.id === commentToEdit.id) {
        const tempComment = comment;
        tempComment.context = text.trim();
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

  const commentsList =
    typeof comments === 'object' &&
    comments.map(comment => {
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
      {loading ? (
        <div className="loader"> Loading... </div>
      ) : (
        <div className="comments">{commentsList}</div>
      )}
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
