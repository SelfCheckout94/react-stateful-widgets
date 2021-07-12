import React, { useEffect, useRef, useState } from "react";

import CompleteTodos from "./CompleteTodos";
import Todo from "./Todo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAL_STORAGE_KEY = "todoApp.todos";
export default function MasterTodos() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  const [completeTodos, setComplete] = useState([]);

  //   useEffect(() => {
  //     const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //     if (storedTodos) {
  //       setTodos(storedTodos);
  //     }
  //   });

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  //   useEffect(() => {
  //     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  //   }, [todos]);

  function handleAddTodo() {
    const name = todoNameRef.current.value;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: uuidv4(), name, complete: false }];
    });
    todoNameRef.currentvalue = null;
  }

  function handleCompleteTodos() {
    const completeTodos = todos.filter((todo) => todo.complete);
    const incompleteTodos = todos.filter((todo) => !todo.complete);
    setComplete((prevTodos) => [...prevTodos, ...completeTodos]);
    setTodos(incompleteTodos);
  }

  return (
    <div className="container">
      <h2>Todos</h2>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleCompleteTodos}>Complete Todos</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
      <CompleteTodos>
        {completeTodos.map((todo) => (
          <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo}></Todo>
        ))}
      </CompleteTodos>
    </div>
  );
}
