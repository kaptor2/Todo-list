import React, { Component } from "react";
import "./SearchButtons.css";

export class SearchButtons extends Component {

  buttons = [
    {name: 'all', type: 'All'},
    {name: 'active', type: 'Active'},
    {name: 'done', type: 'Done'}
  ]

  render() {

    const { filter, onFilter } = this.props;
    
    const button = this.buttons.map( ({ name, type }) => {
      const isActive = filter === name ? "btn-elegant" : "btn-light";
      return <button 
        key={name} 
        className={`SearchButton btn ${isActive}`}
        onClick={() => onFilter(name)}>
        { type }
      </button>
    });

    return (
      <>
        {button}
      </>
    );
  }
}
