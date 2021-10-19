import React from "react";

import "./posts.css";

const Posts = (props) => {
  const { post } = props;
  return (
    <>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <div className="line" />
    </>
  );
};

export default Posts;
