import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import  style  from "./TodoList.module.css";

export const TodoList = ({ todoDate }) => {
  const elements = todoDate.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className={ `list-group-item ${style.listGroupItem}` }>
        <TodoListItem {...itemProps} />
      </li>
    );
  });

  return (
  <ul className = { `list-group ${ style.todoList }` } >
    {elements} 
  </ul>);
};
