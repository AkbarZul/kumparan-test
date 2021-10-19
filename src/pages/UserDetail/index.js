import React, { useState, useEffect } from "react";
import { Header, UserDetails, Posts, Albums } from "../../components";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

import "./userdetails.css";

const UserDetail = (props) => {
  const [user, setUser] = useState({});
  const [postUser, setPostUser] = useState([]);
  const [albums, setAlbums] = useState([]);
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

  useEffect(() => {
    userDetail();
    postUsers();
    getAlbums();
  }, [userDetail, postUsers, getAlbums]);
  return (
    <>
      <Header />
      <UserDetails user={user} />
      <div className="container d-flex flex-row">
        <div className="box">
          <p>List Post By {user.name} </p>
          <div className="text_box">
            <p className="text_add">Add</p>
            <FaPlus size={10} />
          </div>
          <div className="line" />
          <div>
            {postUser.map((postall) => {
              return <Posts key={postall.id} post={postall} />;
            })}
          </div>
        </div>
        <div className="box_albums">
        <p>List Post By {user.name} </p>
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
