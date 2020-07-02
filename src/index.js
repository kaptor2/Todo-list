import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

const TodoList = () => {
  return (
    <ul>
      <li>Learn react</li>
      <li>Build Awsome App</li>
    </ul>
  );
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const AppHeader = () => {
  return <h1>Hello world</h1>;
};

ReactDOM.render(App(), document.getElementById("root"));
