import React, { useState, useEffect } from "react";
import { Header, Post, Comments } from "../../components";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

import './postdetail.css'

const Postdetail = (props) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const api = "https://jsonplaceholder.typicode.com";
  const detail = () => {
    axios
      .get(`${api}/posts/${props.match.params.id}`)
      .then((res) => {
        const datas = res.data;
        setPost(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const detailComment = () => {
    axios
      .get(`${api}/comments?postId=${props.match.params.id}`)
      .then((res) => {
        const datas = res.data;
        setComments(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    detail();
    detailComment();
  }, []);
  console.log(props);
  return (
    <>
      <Header />
      <Post detail={post} />
      <div className="container">
        <p className="postdetail_comment">Comments</p>
        <div className="postdetail_box">
          <p className="postdetail_text">Add</p>
          <FaPlus size={10} />
        </div>
          <div className="line" />
        <div>
          {comments.map((commentsall) => {
            return <Comments key={commentsall.id} comment={commentsall} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Postdetail;
