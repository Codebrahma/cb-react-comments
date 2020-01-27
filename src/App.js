import React from 'react';
import Comments from './components/comments/Comments';
import data from './data';
import theme from './theme/theme';

function App() {
  const dataUrl = 'https://api.myjson.com/bins/1a6qaq';
  const userInfo = {
    id: 0,
    name: 'naveen',
    profileImageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysqwVdNUKASMQcQau2kXUBBgpHjRz_YqRJwduBzCQfCIrSFvz&s',
    profileURL: '/'
  };
  return <Comments ownerInfo={userInfo} data={data} theme={theme} />;
}

export default App;
