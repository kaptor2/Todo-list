import React, { Component } from "react";
import "./TodoListItem.css";

export class TodoListItem extends Component {

  render() {

    const { 
      label, 
      onDeleted, 
      onToggleImportant, 
      onToggleDone,
      done,
      important
    } = this.props;


    let spanClassNames = `TodoListItem-container__span 
      ${done && " done"} 
      ${important && " important"}`;

    return (
      <div className="TodoListItem-container">
        <span className={spanClassNames} onClick={ onToggleDone }>
          {label}
        </span>
        <div className="TodoListItem-container__btns">
          <button
            type="button"
            className="TodoListItem-btn btn btn-danger waves-effect"
            onClick={onDeleted}
          >
            <i className="far fa-trash-alt"></i>
          </button>
          <button
            type="button"
            className="TodoListItem-btn btn btn-success waves-effect"
            onClick={ onToggleImportant }
          >
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}