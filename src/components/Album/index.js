import React from "react";

import "./album.css";

const Album = (props) => {
  const { albumtitle } = props;
  return (
    <>
      <div className="container">
        <p className="album_title">{albumtitle.title}</p>
      </div>
    </>
  );
};

export default Album;
