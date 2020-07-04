import React from "react";

export const TodoListItem = ({ label, important }) => {
  const style = {
    color: important ? "Blue" : "black",
  };

  return <span style={ style }>{ label }</span>;
};
