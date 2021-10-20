import React from "react";

import "./comments.css";

const Comments = (props) => {
  const { comment } = props;
  return (
    <>
      <p className="comments_name">{comment.name}</p>
      <p className="comments_email">Comment By: {comment.email}</p>
      <p className="comments_body">{comment.body}</p>
      <div className="d-flex mb-2">
        <div className="comments_edit">Edit</div>
        <div className="comments_delete">Delete</div>
      </div>
      <div className="line" />
    </>
  );
};

export default Comments;
