import React from "react";
import { TodoListItem } from "../TodoListItem/TodoListItem";
import "./TodoList.css";

export const TodoList = (
  { 
    todoData, 
    onDeleted, 
    onToggleImportant, 
    onToggleDone 
  }) => {

  const elements = todoData.map((item) => {
    const { id, ...itemProps } = item;
    

    return (
      <li key={id} className="list-group-item">
        <TodoListItem 
          {...itemProps} 
          onDeleted = { () => onDeleted(id) } 
          onToggleImportant = { () => onToggleImportant(id) } 
          onToggleDone = { () => onToggleDone(id) } 
          />
      </li>
    );

  });

  return <ul className="TodoList_container list-group">{elements}</ul>;
};
