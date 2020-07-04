import React from "react";
import "./SearchPanel.css";
import { SearchButtons } from "../SearcheButtons/SearchButtons.js";

export const SearchPanel = () => {
  return (
    <div className="Search-panel">
      <div className="Search-panel__search">
        <input placeholder="search" />
      </div>

      <div className="Search-panel__btn">
        <SearchButtons />
      </div>
    </div>
  );
};
