import React, { Component } from "react";
import "./TodoListItem.css";

export class TodoListItem extends Component {
  state = {
    done: false,
    important: this.props.important,
  };

  onLabelClick = () => {
    this.setState( ({done}) => {
      return {
        done: !done,
      };
    });
  };
  
  onSuccessButtonClick = () => {
    this.setState(( {important} ) => {
      return {
        important: !important,
      };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    let spanClassNames = `TodoListItem-container__span 
      ${done && " done"} 
      ${important && " important"}`;

    return (
      <div className="TodoListItem-container">
        <span className={spanClassNames} onClick={this.onLabelClick}>
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
            onClick={this.onSuccessButtonClick}
          >
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}
