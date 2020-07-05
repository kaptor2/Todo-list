import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import "./TodoList.css";

export const TodoList = ({ todoData, onDeleted }) => {
  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps} 
          onDeleted={ () => onDeleted(id)} />
      </li>
    );
  });

  return <ul className="TodoList_container list-group">{elements}</ul>;
};
