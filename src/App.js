import React from "react";
import AddComment from "./components/addComment";
import CommentsList from "./components/commentsList";

import GlobalStyles from "./components/globalStyles";

function App() {
  return (
    <GlobalStyles>
      <AddComment />
      <CommentsList />
    </GlobalStyles>
  );
}

export default App;
