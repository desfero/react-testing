import React, { Component } from "react";
import { TodoItem } from "./TodoItem";

export class TodoList extends Component {
  render() {
    const { items, onChange } = this.props;
    return (
      <div className="todo-list">
        {items.map(item => (
          <TodoItem key={item.id} item={item} onCompleteChange={onChange} />
        ))}
      </div>
    );
  }
}
