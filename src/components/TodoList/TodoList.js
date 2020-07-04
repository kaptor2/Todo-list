import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import "./TodoList.css";

export const TodoList = ({ todoDate }) => {
  const elements = todoDate.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
  <ul className = "TodoList_container list-group" >
    {elements} 
  </ul>);
};
