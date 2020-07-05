import React, { Component } from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { TodoList } from "../TodoList/TodoList";
import "./App.css";

export class App extends Component {
  state = {
    todoData: [
      { id: 2, label: "Drink Coffee", important: false },
      { id: 1, label: "Make Awesome App", important: false },
      { id: 3, label: "Have a lunch", important: false },
    ],
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {

      const index = todoData.findIndex((el) => el.id === id);
      let result = [...todoData];
      result.splice(index, 1);

      return {
        todoData: result,
      };

    });
  };

  render() {
    const { todoData } = this.state;

    return (
      <div className="main-conteiner">
        <div className="main-form">
          <AppHeader />
          <div className="main-form__content">
            <SearchPanel />
            <TodoList todoData={todoData} onDeleted={this.onDeleted} />
          </div>
        </div>
      </div>
    );
  }
}
