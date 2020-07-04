import React from "react";
import "./SearchButtons.css";

export const SearchButtons = () => {
  return (
    <>
      <button className="SearchButton btn btn-elegant">All</button>
      <button className="SearchButton btn btn-light">
        Active
      </button>
      <button className="SearchButton btn btn-light">
        Done
      </button>
    </>
  );
};
