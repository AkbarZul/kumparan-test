import React from "react";
import { Link } from "react-router-dom";

const TableBody = (props) => {
  const { user } = props;
  console.log("ini user", user.id);
  return (
    <>
      <tr>
        <td>{user.id}</td>
        <Link to={{ pathname: `/user/${user.id}` }} style={{textDecoration: 'none', color: 'black'}}>
          <td>{user.name}</td>
        </Link>
        <td>{user.username}</td>
        <td>{user.email}</td>
        <td>{user.address.street}</td>
        <td>{user.phone}</td>
      </tr>
    </>
  );
};

export default TableBody;
