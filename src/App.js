import React from 'react';
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoItem from './Components/TodoItem'
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
