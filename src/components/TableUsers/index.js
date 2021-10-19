import React, { useState, useEffect } from "react";
import TableBody from '../TableBody';
import axios from "axios";

const TableUsers = () => {
  const [users, setUsers] = useState([]);
  const api = "https://jsonplaceholder.typicode.com";

  const allUser = () => {
    axios.get(`${api}/users`).then((res) => {
      const datas = res.data;
      console.log("ini data", datas);
      setUsers(datas)
      console.log("ini datas", users);
    });
  };

  useEffect(() => {
    allUser();
  }, []);
  return (
    <>
      <div className="container mt-5">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email Address</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
              {users.map(userall => {
                  return <TableBody key={userall.id} user={userall} />
              })}
            {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableUsers;
