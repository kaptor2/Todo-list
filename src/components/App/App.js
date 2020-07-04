import React from "react";
import { AppHeader } from "../AppHeader/AppHeader";
import { SearchPanel } from "../SearchPanel/SearchPanel";
import { TodoList } from "../TodoList/TodoList";

export const App = () => {
  const todoDate = [
    { id: 1, label: "item 1", important: false },
    { id: 2,label: "item 2", important: true },
    { id: 3,label: "item 3", important: false },
    { id: 4,label: "item 4", important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todoDate = { todoDate }/>
    </div>
  );
};
