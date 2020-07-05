import React, { Component } from "react";
import "./CreateItem.css";

export class CreateItem extends Component {

  state = {
    text: ''
  }
  onLabelChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state.text);
    this.setState({
        text: '',
      });
  };

  render() {
    const { text } = this.state;

    return (
      <form className="CreateItem_container" onSubmit={this.onSubmit}>
        <div className="CreateItem_caption">
          <input placeholder="Add" onChange={this.onLabelChange} value={text} />
        </div>
        <button className="CreateItem_btn btn btn-elegant">
          <i className="fas fa-plus"></i>
        </button>
      </form>
    );
  }
}
