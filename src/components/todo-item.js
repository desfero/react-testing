import React from 'react';

export const TodoItem = ({item, removeTodo}) => (
    <React.Fragment>
        <span>{item.title}</span>
        <button onClick={() => removeTodo(item.id)} className="float-right btn btn-outline-danger">Remove</button>
    </React.Fragment>
);
