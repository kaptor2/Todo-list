import React from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todoDate }) => {
  
  const elements = todoDate.map((item) => {
    return (
      <li>
        <TodoListItem { ...item } />
      </li>
    );
  });

  return <ul>{ elements }</ul>;
};
