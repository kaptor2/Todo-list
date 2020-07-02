import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  return (
    <ul>
      <li>
        <TodoListItem text="item 1" />
      </li>
      <li>
        <TodoListItem text="item 2" important={true} />
      </li>
      <li>
        <TodoListItem text="item 3" />
      </li>
    </ul>
  );
};
