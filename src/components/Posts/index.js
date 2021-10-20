import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import { Bounce, toast } from "react-toastify";
import axios from "axios";

import "./posts.css";

toast.configure();
const Posts = (props) => {
  const { post } = props;
  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [title, setTitle] = useState("");
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
  const id = post.id;
  const uid = post.userId;
  const onDeleteSubmit = (e) => {
    e.preventDefault();
    axios
      .delete(`${api}/posts/${id}`)
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      title: title,
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
        toast.success("Pos Edit successful!", {
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

  // console.log(post);
  return (
    <>
      <Link
        to={{ pathname: `/posts/${post.id}`, state: {id: post.id, userId: post.userId} }}
        style={{ textDecoration: "none" }}
      >
        <p className="text_title">{post.title}</p>
      </Link>
      <p className="text_body">{post.body}</p>
      <div className="d-flex mb-2">
        <div className="post_edit" onClick={handleShow}>
          Edit
        </div>
        <div className="post_delete" onClick={onDeleteModalOpen}>
          Delete
        </div>
      </div>
      <div className="line" />

      {/* Modal edit */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>New Title</p>
          <input
            className="input_edit"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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

export default Posts;
