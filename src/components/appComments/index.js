import React from "react";

import AddComment from "../addComment";
import CommentsList from "../commentsList";

const AppComments = ({ ...restProps }) => {
  return (
    <>
      <div
        style={{
          padding: "24px",
          borderBottom: "1px solid #ccc"
        }}
      >
        <div className="headingPrimary">Comments</div>
      </div>
      <CommentsList />
      <AddComment />
    </>
  );
};

export default AppComments;
