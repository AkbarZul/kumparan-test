import React, { useState, useEffect } from "react";
import { Header, UserDetails, Posts, Albums } from "../../components";
import { FaPlus } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

import "./userdetails.css";

toast.configure();
const UserDetail = (props) => {
  const [user, setUser] = useState({});
  const [postUser, setPostUser] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [title, SetTitle] = useState("");
  const [body, setBody] = useState("");
  const [showInput, setShowInput] = useState(false);
  const api = "https://jsonplaceholder.typicode.com";

  const userDetail = () => {
    axios
      .get(`${api}/users/${props.match.params.id}`)
      .then((res) => {
        const datas = res.data;
        setUser(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const postUsers = () => {
    axios
      .get(`${api}/posts?userId=${props.match.params.id}`)
      .then((res) => {
        const datas = res.data;
        setPostUser(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAlbums = () => {
    axios
      .get(`${api}/albums?userId=${props.match.params.id}`)
      .then((res) => {
        const datas = res.data;
        setAlbums(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const id = user.id;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      body: body,
      userId: id,
    };
    axios
      .post(`${api}/posts`, data, {
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
        })
        console.log(res)
        postUsers();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    userDetail();
    postUsers();
    getAlbums();
  }, []);
  return (
    <>
      <Header />
      <UserDetails user={user} />
      <div className="container d-flex flex-row">
        <div className="box">
          <p>List Post By {user.name} </p>
          <div className="text_box" onClick={() => setShowInput(!showInput)}>
            <p className="text_add">Add</p>
            <FaPlus size={10} />
          </div>
          {showInput === true ? (
            <form onSubmit={handleSubmit}>
              <div className="input_container">
                <p>Title</p>
                <input
                  className="input_text"
                  value={title}
                  onChange={(e) => SetTitle(e.target.value)}
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
            {postUser.map((postall) => {
              return <Posts key={postall.id} post={postall} />;
            })}
          </div>
        </div>
        <div className="box_albums">
          <p>Album By {user.name} </p>
          <div>
            {albums.map((albumsall) => {
              return <Albums key={albumsall.id} albums={albumsall} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
