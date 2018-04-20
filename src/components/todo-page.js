import './todo-page.css';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import { changeTodoState, createTodo, removeTodo } from '../actions';
import {getTodos} from '../selectors';
import {TodoForm} from './todo-form';
import {TodoList} from './todo-list';


class TodoPageBase extends Component {
    static propTypes = {
        createTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired,
        changeTodoState: PropTypes.func.isRequired,
    };

    render() {
        return (
            <div id="todos">
                <TodoForm handleSubmit={this.props.createTodo}/>

                <div className="todo-list">
                    <TodoList
                        removeTodo={this.props.removeTodo}
                        changeTodoState={this.props.changeTodoState}
                        todos={this.props.todos}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = createSelector(
    getTodos,
    todos => ({todos})
);

const mapDispatchToProps = {
    removeTodo,
    createTodo,
    changeTodoState
};


export const TodoPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPageBase);