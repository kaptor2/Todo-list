import React from "react";
import { AppHeader } from "./components/AppHeader";
import { SearchPanel } from "./components/SearchPanel";
import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};
