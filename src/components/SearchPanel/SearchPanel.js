import React, { Component } from "react";
import "./SearchPanel.css";
import { SearchButtons } from "../SearcheButtons/SearchButtons.js";

export class SearchPanel extends Component {

  onSearchChange = (e) => {
    this.props.onSearch(e.target.value);
  }

  render() {
    return (
      <div className="Search-panel">
        <form className="Search-panel__search">
          <input placeholder="search" 
          onChange={ this.onSearchChange }/>
        </form>
  
        <div className="Search-panel__btn">
          <SearchButtons 
            filter={this.props.filter} 
            onFilter = {this.props.onFilter}/>
        </div>
      </div>
    );
  }
}