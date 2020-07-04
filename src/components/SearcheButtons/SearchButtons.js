import React, { Component } from "react";
import "./SearchButtons.css";

export class SearchButtons extends Component {
  render() {
    return (
      <>
        <button className="SearchButton btn btn-elegant">All</button>
        <button className="SearchButton btn btn-light">Active</button>
        <button className="SearchButton btn btn-light">Done</button>
      </>
    );
  }
}
