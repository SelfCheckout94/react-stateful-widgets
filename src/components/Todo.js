import React from "react";

export default function Todo({ todo, toggleTodo, checkable }) {
  function handleTodoClick() {
    toggleTodo(todo.id);
  }

  return (
    <div>
      <label>
        {checkable && (
          <input
            type="checkbox"
            checked={todo.complete}
            onChange={handleTodoClick}
          />
        )}
        {todo.name}
      </label>
    </div>
  );
}
