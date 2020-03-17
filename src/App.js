import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import CreateTodo from "./CreateTodo"
import EditTodo from "./EditTodo"
import TodoList from "./TodoList"

import './App.css';

function App() {
  return (
    <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className= "navbar-brand" href="https://codingthesmartway.com" target="_blank">
          
        </a>
        <Link to="/" className="navbar-brand">Mernstack Todo app</Link>
        <div className="topnav">
        <div className="topnav-right">
    
    <a className="active" href="/">Todos</a>
    
    <a href="/create">  CreateTodo</a>
    
  </div>
   
  </div>
        <div className="collapse nav-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">Todos</Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">Create Todo</Link>
            </li>
          </ul>
        </div>
    
      </nav>
    <Route path="/" exact component={TodoList} />
    <Route path="/edit/:id" component={EditTodo} />
    <Route path="/create" component={CreateTodo} />
    </div>
    </Router>
  );
}

export default App;
