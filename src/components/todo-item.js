import React from 'react';

export const TodoItem = ({item, removeTodo, completeTodo}) => (
  <React.Fragment>
    <input type="checkbox" checked={item.done} onClick={() => completeTodo(item.id, !item.done)} />
    <span>{item.title}</span>
    <button onClick={() => removeTodo(item.id)} className="float-right btn btn-outline-danger">Remove</button>
  </React.Fragment>
);
