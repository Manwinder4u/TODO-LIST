import React from 'react'
import {Jumbotron, Button} from 'react-bootstrap';

export default function TodoItem({todo, onDelete}) {
  return (
    <div className="container mt-5">
        <Jumbotron>
        <h1>{todo.title}</h1>
          <p>
            {todo.desc}
          </p>
          <p>
            <Button variant="danger" onClick={() => {onDelete(todo)} }>Delete</Button>
          </p>
        </Jumbotron>
    </div>
  )
}