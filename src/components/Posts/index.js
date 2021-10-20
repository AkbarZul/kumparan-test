import React from "react";
import { Link } from "react-router-dom";

import "./posts.css";

const Posts = (props) => {
  const { post } = props;
  console.log("ini id", post.id);
  return (
    <>
      <Link
        to={{ pathname: `/posts/${post.id}` }}
        style={{ textDecoration: "none" }}
      >
        <p className="text_title">{post.title}</p>
      </Link>
      <p className="text_body">{post.body}</p>
      <div className="line" />
    </>
  );
};

export default Posts;
