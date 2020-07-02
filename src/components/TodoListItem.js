import React from "react";

export const TodoListItem = ({ text, important }) => {
  const style = {
    color: important ? 'Blue' : 'black'
  };

  return <span style={style}>{text}</span>;
};
