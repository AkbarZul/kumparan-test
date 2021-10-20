import React, { useState, useEffect } from "react";
import { Header, Post, Comments } from "../../components";
import { FaPlus } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import axios from "axios";

import "./postdetail.css";

toast.configure();
const Postdetail = (props) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [showInput, setShowInput] = useState(false);
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
  const uid = props.location.state.userId;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email,
      body: body,
      userId: uid,
    };
    axios
      .post(`${api}/comments`, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        toast.success("Pos added successful!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Bounce,
        });
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    detail();
    detailComment();
  }, []);
  return (
    <>
      <Header />
      <Post detail={post} />
      <div className="container">
        <p className="postdetail_comment">Comments</p>
        <div
          className="postdetail_box"
          onClick={() => setShowInput(!showInput)}
        >
          <p className="postdetail_text">Add</p>
          <FaPlus size={10} />
        </div>
        {showInput === true ? (
          <form onSubmit={handleSubmit}>
            <div className="input_container">
              <p>Name</p>
              <input
                className="input_text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <p>Email</p>
              <input
                className="input_text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>Body</p>
              <input
                className="input_text"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
              <button className="button_text" type="submit">
                Add
              </button>
            </div>
          </form>
        ) : null}
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
