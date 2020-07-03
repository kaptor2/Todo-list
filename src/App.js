import React from "react";
import { AppHeader } from "./components/AppHeader";
import { SearchPanel } from "./components/SearchPanel";
import { TodoList } from "./components/TodoList";

export const App = () => {
  const todoDate = [
    { label: "item 1", important: false },
    { label: "item 2", important: true },
    { label: "item 3", important: false },
    { label: "item 4", important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todoDate = {todoDate}/>
    </div>
  );
};
