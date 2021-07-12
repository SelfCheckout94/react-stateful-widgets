import React, { useState } from "react";

export default function Todos() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const addToList = () => {
    return list.push(todo);
  };
  console.log();

  return (
    <div className="container">
      <h2>Todos</h2>
      <div>
        <input id="input" type="text" />
        <button onClick={null}>Add Todo</button>
      </div>
      <div id="output">{list}</div>
    </div>
  );
}
