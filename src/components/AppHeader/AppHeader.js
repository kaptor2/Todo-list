import React, { Component } from "react";
import "./AppHeader.css";


export class AppHeader extends Component {

  getDone() {
    let done = 0;
    let noDone = 0;
    
    for (let el of this.props.todoData) {
      el.done ? done += 1 : noDone += 1;
    }

    return [done, noDone];
  }

  render() {

    let count = this.getDone();

    return (
      <div className="AppHeader__container AppHeader__container--border">
        <h1>My Todo List</h1>
        <span>{`${count[1]} more to do, ${count[0]} done`}</span>
      </div>
    );
  }
}