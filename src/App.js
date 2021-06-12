import './App.css';
import Header from './Components/Header'
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import Addtodo from "./Components/Addtodo";
import About from "./Components/About";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState , useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = []
  }else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const[todos, setTodos] = useState(initTodo);
  useEffect(()=> {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = (todo) => {
    setTodos(todos.filter(el => el !==todo))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const willAddTodo = (title, desc) => {
    console.log("adding todo", title, desc);
    let srno;
    if (todos.length===0){
      srno = 0;
    }else {
      srno = todos[todos.length -1].srno +1;
    }
    const myTodo = {
      srno: srno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  return (
    <>
      <Router>
        <Header searchBar ={true} />
          <Switch>
            <Route exact path="/">
              <Addtodo addTodo={willAddTodo}/>
              <Todos todos= {todos} delete={onDelete}/>
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
