import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

import "./comments.css";

toast.configure();
const Comments = (props) => {
  const { comment } = props;
  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const api = "https://jsonplaceholder.typicode.com";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onDeleteModalOpen = () => {
    setDeleteModal(true);
  };
  const onDeleteModalClose = () => {
    setDeleteModal(false);
  };
  const id = comment.id;
  const uid = comment.userId;
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      name: name,
      email: email,
      body: body,
      userId: uid,
    };
    axios
      .put(`${api}/posts/${id}`, data, {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
      .then((res) => {
        toast.success(`comments id ${id} Edit successful!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Bounce,
        });
        console.log(res);
        setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onDeleteSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`${api}/comments/${id}`)
      .then((res) => {
        toast.success(`Post id ${id} deleted successfull!`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Bounce,
        });
        console.log(res);
        setDeleteModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <p className="comments_name">{comment.name}</p>
      <p className="comments_email">Comment By: {comment.email}</p>
      <p className="comments_body">{comment.body}</p>
      <div className="d-flex mb-2">
        <div className="comments_edit" onClick={handleShow}>
          Edit
        </div>
        <div className="comments_delete" onClick={onDeleteModalOpen}>
          Delete
        </div>
      </div>
      <div className="line" />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Edit Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>New Name</p>
          <input
            className="input_edit"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <p>New Email</p>
          <input
            className="input_edit"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>New Body</p>
          <input
            className="input_edit"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal delete */}
      <Modal
        show={deleteModal}
        onHide={onDeleteModalClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onDeleteModalClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={onDeleteSubmit}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Comments;
