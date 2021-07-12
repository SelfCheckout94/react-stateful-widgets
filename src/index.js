import Counter from "./components/Counter";
import Input from "./components/Input";
import Moods from "./components/Moods";
import Programmers from "./components/Programmers";
import React from "react";
import Spinner from "./components/Spinner";
import Squares from "./components/Squares";
import Todos from "./components/Todos";
import { render } from "react-dom";

render(
  <>
    <Counter />
    <Moods />
    <Spinner />
    <Input />
    <Squares />
    <Programmers />
    <Todos />
  </>,
  document.querySelector("#root")
);
