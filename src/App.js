import React from 'react';
import Comments from './components/comments/Comments';
import data from './data';

function App() {
  const userInfo = {
    name: 'naveen',
    profileImageURL:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQysqwVdNUKASMQcQau2kXUBBgpHjRz_YqRJwduBzCQfCIrSFvz&s'
  };
  return <Comments userInfo={userInfo} data={data} />;
}

export default App;
