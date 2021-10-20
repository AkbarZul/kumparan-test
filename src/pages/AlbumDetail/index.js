import React, { useState, useEffect } from "react";
import { Header, Album, Photos } from "../../components";
import axios from "axios";

import "./albumdetail.css";

const AlbumDetail = (props) => {
  const [albums, setAlbums] = useState({});
  const [photo, setPhoto] = useState([]);
  const api = "https://jsonplaceholder.typicode.com";
  const albumDetails = () => {
    axios
      .get(`${api}/albums/${props.match.params.id}`)
      .then((res) => {
        const datas = res.data;
        setAlbums(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const photoDetails = () => {
    axios
      .get(`${api}/photos?albumId=${props.match.params.id}`)
      .then((res) => {
        const datas = res.data;
        setPhoto(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    albumDetails();
    photoDetails();
  }, []);
  return (
    <>
      <Header />
      <Album albumtitle={albums} />
      {photo.map((photoall) => {
        return <Photos key={photoall.id} photo={photoall} />;
      })}
    </>
  );
};

export default AlbumDetail;
