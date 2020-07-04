import React, { Component } from "react";
import "./TodoListItem.css";

export class TodoListItem extends Component {
  state = {
    done: false,
    important: this.props.important
  };

  onLabelClick = () => {
    this.setState({
      done: !this.state.done,
    });
  };

  onSuccessButtonClick = () => {
    this.setState({
      important: !this.state.important,
    });
  }

  render() {
    const { label } = this.props;
    const { done, important } = this.state;
    let spanClassNames = `TodoListItem-container__span 
      ${done && " done"} 
      ${important && " important"}`;


    return (
      <div className="TodoListItem-container">
        <span
          className={spanClassNames}
          onClick={this.onLabelClick}
        >
          {label}
        </span>
        <div className="TodoListItem-container__btns">
          <button
            type="button"
            class="TodoListItem-btn btn btn-danger waves-effect"
          >
            <i class="far fa-trash-alt"></i>
          </button>
          <button
            type="button"
            class="TodoListItem-btn btn btn-success waves-effect"
            onClick={this.onSuccessButtonClick}
          >
            <i class="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}
