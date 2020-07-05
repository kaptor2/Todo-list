import React, { Component } from "react";
import "./CreateItem.css";

export class CreateItem extends Component {

  render() {
    const { onCreate } = this.props;
    return (
      <div className="CreateItem_container">
        <div className="CreateItem_caption">
          <input placeholder="Add" />
        </div>
        <button 
            onClick = {onCreate}
            className="CreateItem_btn btn btn-elegant">
          <i className="fas fa-plus"></i>
        </button>
      </div>
    );
  }
}
