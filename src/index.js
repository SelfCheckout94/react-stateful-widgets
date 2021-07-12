import Counter from "./components/Counter";
import Input from "./components/Input";
import MasterTodos from "./components/MasterTodos";
import Moods from "./components/Moods";
import Programmers from "./components/Programmers";
import React from "react";
import Spinner from "./components/Spinner";
import Squares from "./components/Squares";
import { render } from "react-dom";

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
    <MasterTodos />
  </>,
  document.querySelector("#root")
);
