import React from 'react';

import './todo-item.css';

export let TodoItem = ({item, removeTodo, changeTodoState}) => (
  <div className="todo-item">
    <input type="checkbox" className="todo-item__checkbox" checked={item.completed} onChange={() => changeTodoState(item.id)}/>
    <span>{item.title}</span>
    <button onClick={() => removeTodo(item.id)} className="float-right btn btn-outline-danger todo-item__remove">Remove</button>
  </div>
);
