import React from 'react';
import PropTypes from 'prop-types';
import {List} from 'immutable';
import {TodoItem} from './todo-item';

export const TodoList = ({todos, removeTodo}) => (
    <ul className="list-group list-group-flush">
        {todos.map(todo => (
            <li key={todo.id} className="list-group-item"><TodoItem item={todo} removeTodo={removeTodo}/></li>
        ))}
    </ul>
);

TodoList.propTypes = {
    removeTodo: PropTypes.func.isRequired,
    todos: PropTypes.instanceOf(List).isRequired,
};