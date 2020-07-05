import React, { Component } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { TodoList } from "../TodoList/TodoList";
import { CreateItem } from "../CreateItem/CreateItem";
import "./App.css";

export class App extends Component {

  maxId = 0; 

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Have a lunch")
    ]
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const index = this.getIndex(todoData, id);
      let result = [...todoData];

      result.splice(index, 1);
      return {todoData: result,};
    });
  };

  createTodoItem(label) {
    return{ id: ++this.maxId, label, important: false, done: false }
  }

  onCreate = () => {
    this.setState(({ todoData }) => {
      let result = [...todoData];
      result.push(  this.createTodoItem("New custom item") );

      return {todoData: result};
    });
  };

  getIndex(Data, id) {
    return Data.findIndex((el) => el.id === id);
  }

  toggleProperty( arr, id, propName ) {
      const index = this.getIndex(arr, id);
      let result = [...arr];

      switch(propName) {
        case 'important': 
          result[index].important = !result[index].important;
          break;
        case 'done': 
          result[index].done = !result[index].done;
          break;
        default: break;
      }

      return result;
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return {todoData: this.toggleProperty(todoData, id, "important") }
    });
  }

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return {todoData: this.toggleProperty(todoData, id, "done") }
    });
  }

  render() {
    const { todoData } = this.state;

    return (
      <div className="main-conteiner">
        <div className="main-form">
          <AppHeader todoData={todoData} />
          <div className="main-form__content">
            <SearchPanel />
            <TodoList 
              todoData={todoData} 
              onDeleted={this.onDeleted} 
              onToggleImportant={this.onToggleImportant}
              onToggleDone={this.onToggleDone}
              />
            <CreateItem onCreate={this.onCreate}/>
          </div>
        </div>
      </div>
    );
  }
}
