import React, { useState, useEffect } from "react";
import { Header, UserDetails } from "../../components";
import axios from "axios";

const UserDetail = (props) => {
  //   console.log("ini props", props);
  const [user, setUser] = useState({});
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
  useEffect(() => {
    userDetail();
  }, []);
  return (
    <>
      <Header />
      <UserDetails user={user} />
    </>
  );
};

export default UserDetail;
