import React from "react";
import "./TodoListItem.css";

export const TodoListItem = ({ label, important }) => {
  const scapeStyle = {
    color: important ? "#E94D3E" : "black",
  };

  return (
    <div className="TodoListItem-container">
      <span style={scapeStyle} className="TodoListItem-container__span">{label}</span>
      <div className="TodoListItem-container__btns">
        <button
          type="button"
          class="TodoListItem-btn btn btn-outline-danger waves-effect"
        >
          <i class="far fa-trash-alt"></i>
        </button>
        <button
          type="button"
          class="TodoListItem-btn btn btn-outline-success waves-effect"
        >
          <i class="fas fa-exclamation"></i>
        </button>
      </div>
    </div>
  );
};
