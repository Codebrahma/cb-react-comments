import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import send from '../../assets/send.svg';
import 'react-quill/dist/quill.bubble.css';
import './Editor.scss';

const Editor = ({ addComment, editComment, commentText, comment }) => {
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

  return (
    <div className="post-comment">
      <div className="image-container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysqwVdNUKASMQcQau2kXUBBgpHjRz_YqRJwduBzCQfCIrSFvz&s"
          alt="profile"
          className="image"
        />
      </div>
      <form
        onSubmit={event => submitHandler(event)}
        className="input-container"
      >
        <div className="input-quill">
          <ReactQuill
            theme="bubble"
            ref={reactQuillRef}
            onChange={handleChange}
            value={editorValue}
            modules={Editor.modules}
            formats={Editor.formats}
            placeholder="Write a comment..."
          />
        </div>
        <button type="submit" className="send-button">
          <img src={send} alt="send" className="send-image" />
        </button>
      </form>
    </div>
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
  editComment: null
};

Editor.propTypes = {
  addComment: PropTypes.func.isRequired,
  editComment: PropTypes.func,
  commentText: PropTypes.any,
  comment: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default Editor;
