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
      this.createTodoItem("Have a lunch"),
    ],
    filter: "all", // all, active, done
  };

  onDeleted = (id) => {
    this.setState(({ todoData }) => {
      const index = this.getIndex(todoData, id);
      let result = [...todoData];

      result.splice(index, 1);
      return { todoData: result };
    });
  };

  createTodoItem(label) {
    return {
      id: ++this.maxId,
      label,
      important: false,
      done: false,
      visible: true,
    };
  }

  onCreate = (text) => {
    this.setState(({ todoData }) => {
      let result = [...todoData];
      result.push(this.createTodoItem(text));

      return { todoData: result };
    });
  };

  getIndex(Data, id) {
    return Data.findIndex((el) => el.id === id);
  }

  toggleProperty(arr, id, propName) {
    const index = this.getIndex(arr, id);
    let result = [...arr];

    switch (propName) {
      case "important":
        result[index].important = !result[index].important;
        break;
      case "done":
        result[index].done = !result[index].done;
        break;
      default:
        break;
    }

    return result;
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };

  onSearch = (str) => {
    this.setState(({ todoData }) => {
      let result = [...todoData];

      result.forEach((el) => {
        const label = el.label.toLowerCase(),
          subStr = str.toLowerCase();
        el.visible = !!(label.indexOf(subStr) + 1);

        return el;
      });

      return {
        todoData: result,
      };
    });
  };

  Search(items) {
    return items.filter((el) => {
      return el.visible;
    });
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;
      case "active":
        return items.filter((el) => !el.done);
      case "done":
        return items.filter((el) => el.done);
      default:
        return items;
    }
  }

  onFilter = (filter) => {
    this.setState({ filter });
  };

  render() {
    const { todoData, filter } = this.state;

    const visibleItem = this.filter(this.Search(todoData), filter);

    return (
      <div className="main-conteiner">
        <div className="main-form">
          <AppHeader todoData={todoData} />
          <div className="main-form__content">
            <SearchPanel
              onSearch={this.onSearch}
              filter={filter}
              onFilter={this.onFilter}
            />
            <TodoList
              todoData={visibleItem}
              onDeleted={this.onDeleted}
              onToggleImportant={this.onToggleImportant}
              onToggleDone={this.onToggleDone}
            />
            <CreateItem onCreate={this.onCreate} />
          </div>
        </div>
      </div>
    );
  }
}
