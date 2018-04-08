import React from "react";
import { render } from "react-dom";
import { TodoList } from "./TodoList";

const items = [{ id: 1, title: "Complete my homework", completed: false }];

const App = () => <TodoList items={items} />;

render(<App />, document.getElementById("root"));
