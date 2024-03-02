import React, { useState } from "react";

function TodoItem(props) {
  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(true);
  }

  return (
    <li
      style={{ "text-decoration": click ? "line-through" : "none" }}
      onClick={handleClick}
    >
      {props.text}
    </li>
  );
}
export default TodoItem;
