import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import send from '../../assets/send.svg';
import 'react-quill/dist/quill.bubble.css';
import './Editor.scss';

const Editor = ({
  addComment,
  editComment,
  cancelEditing,
  commentText,
  comment
}) => {
  const [editorValue, setEditorValue] = useState(commentText);

  const reactQuillRef = useRef();

  const handleChange = html => {
    setEditorValue(html);
  };

  const submitHandler = event => {
    if (editComment) {
      editComment(event, editorValue, comment);
    } else {
      addComment(event, editorValue, reactQuillRef);
      setEditorValue('');
    }
  };

  const onKeyUp = event => {
    if (cancelEditing && event.keyCode === 27) {
      cancelEditing(comment);
    }
    if (event.keyCode === 13 && !event.shiftKey) {
      submitHandler(event);
    }
  };

  return (
    <>
      <div className="post-comment">
        <div className="image-container">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysqwVdNUKASMQcQau2kXUBBgpHjRz_YqRJwduBzCQfCIrSFvz&s"
            alt="profile"
            className="image"
          />
        </div>
        <div className="input-container">
          <form onSubmit={event => submitHandler(event)} className="input-form">
            <div className="input-quill">
              <ReactQuill
                theme="bubble"
                ref={reactQuillRef}
                onChange={handleChange}
                value={editorValue}
                modules={Editor.modules}
                formats={Editor.formats}
                placeholder="Write a comment..."
                onKeyUp={event => onKeyUp(event)}
              />
            </div>
            <button type="submit" className="send-button">
              <img src={send} alt="send" className="send-image" />
            </button>
          </form>
          {cancelEditing && (
            <div className="cancel-editing">
              Press Esc or
              <span className="text" onClick={() => cancelEditing(comment)}>
                cancel
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Editor.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }],

    ['bold', 'italic', 'underline', 'strike'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false
  }
};

Editor.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
];

Editor.defaultProps = {
  commentText: '',
  comment: null,
  editComment: null,
  cancelEditing: null
};

Editor.propTypes = {
  addComment: PropTypes.func.isRequired,
  editComment: PropTypes.func,
  commentText: PropTypes.any,
  comment: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  cancelEditing: PropTypes.func
};

export default Editor;
