import React from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { TodoList } from "../TodoList/TodoList";
import "./App.css";

export const App = () => {
  const todoDate = [
    { id: 1, label: "Drink Coffee", important: false },
    { id: 2, label: "Make Awesome App", important: true },
    { id: 3, label: "Have a lunch", important: false },
  ];

  return (
    <div className = "main-conteiner">
      <div className="main-form" >
        <AppHeader />
        <div className="main-form__content">
          <SearchPanel />
          <TodoList todoDate={todoDate} />
        </div>
      </div>
    </div>
  );
};
