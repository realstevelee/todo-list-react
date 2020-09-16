import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import TodoItem from './Components/TodoItem'
import "@fortawesome/fontawesome-free/css/all.min.css";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItems = [...this.state.items, newItem] // previous value + new value

    this.setState({
      items: updatedItems,

    })
  }

  clearList = () => {
    console.log('Clear List')
  }

  handleDelete = (id) => {
    console.log(`handle edit ${id}`)
  }

  handleEdit = (id) => {
    console.log(`handle edit ${id}`)
  }


  render() {
    console.log(this.state)
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo List</h3>
            <TodoInput item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem} />
            <TodoList items={this.state.item}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
