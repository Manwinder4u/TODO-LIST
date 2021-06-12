import React, { useState } from "react";
import {Form, Button} from 'react-bootstrap';

export default function Addtodo(props){
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc){
      alert("Title or Description can't be blank!")
    }
    props.addTodo(title, desc);
  }
  return (
    <div className="container mt-3">
      <h2>Add Todo</h2>
    <Form onSubmit={formSubmit}>
      <Form.Group controlId="formBasicText">
        <Form.Label>Title</Form.Label>
        <Form.Control placeholder="Enter Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control placeholder="Enter Description" value={desc} onChange={(e)=>setDesc(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></div>
  )
}