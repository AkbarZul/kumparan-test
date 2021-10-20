import React from "react";
import { Link } from "react-router-dom";

const Albums = (props) => {
  const { albums } = props;
  return (
    <>
      <Link
        to={{ pathname: `/album/${albums.id}` }}
        style={{ textDecoration: "none" }}
      >
        <p>{albums.title}</p>
      </Link>
    </>
  );
};

export default Albums;
