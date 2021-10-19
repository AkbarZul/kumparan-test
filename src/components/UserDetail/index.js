import React from "react";

import "./userdetail.css";

const UserDetails = (props) => {
    const {user} = props;
    // console.log(user);
  return (
    <>
      <div className="container">
        <p className="user_text">Detail User</p>
        <div className="line" />
        <p className="user_subtext">Name : {user.name}</p>
        <p className="user_subtext">Username : {user.username}</p>
        <p className="user_subtext">Email : {user.email}</p>
        <p className="user_subtext">Phone : {user.phone}</p>
        <p className="user_subtext">Website : {user.website}</p>
        <div className="line" />
      </div>
    </>
  );
};

export default UserDetails;
