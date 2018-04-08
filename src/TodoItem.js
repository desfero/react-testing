import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const { item, onCompleteChange } = this.props;
    return (
      <div>
        <span className="item-mark">{item.complete ? "✓" : "•"}</span>
        <span className="item-title">{item.title}</span>
        <a onClick={() => onCompleteChange(item, !item.complete)}>
          Mark as {item.complete ? "Pending" : "Complete"}
        </a>
      </div>
    );
  }
}
