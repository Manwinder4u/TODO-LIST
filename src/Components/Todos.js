import React from "react";
import {Alert} from 'react-bootstrap';
import TodoItem from "../Components/TodoItem";

export default function Todos(props){
  return (
    <>
    {props.todos.length <1 ? <div className="container mt-5" style={{'min-height':'300px'}}><Alert variant="danger">No Todos!</Alert></div> : props.todos.map((todo) => {
      return <TodoItem todo={todo} key={todo.srno} onDelete={props.delete}/>
    })}
    </>
  )
}