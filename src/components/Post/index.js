import React from "react";

import './post.css'

const Post = (props) => {
  const { detail } = props;
  return (
    <>
      <div className="container">
        <p className='detail_title'>{detail.title}</p>
        <p className='detail_body'>{detail.body}</p>
        <div className="line" />
      </div>
    </>
  );
};

export default Post;
