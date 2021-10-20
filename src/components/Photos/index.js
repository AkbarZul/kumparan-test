import React from "react";

import "./photos.css";

const Photos = (props) => {
  const { photo } = props;
  return (
    <>
      <div className="container d-flex align-items-center">
        <img src={photo.thumbnailUrl} className="image_photo" />
        <div className="image_container">
          <p className="image_title">{photo.title}</p>
          <p className="image_subtitle">
            <a href={photo.url} target="blank">{photo.url}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Photos;
