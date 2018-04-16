import './todo-page.css';
import React, {Component} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {createTodo, removeTodo} from '../actions';
import {getTodos} from '../selectors';
import {TodoForm} from './todo-form';
import {TodoList} from './todo-list';


class TodoPageBase extends Component {
    static propTypes = {
        createTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired,
        todos: PropTypes.instanceOf(List).isRequired,
    };

    render() {
        return (
            <div id="todos">
                <TodoForm handleSubmit={this.props.createTodo}/>

                <div className="todo-list">
                    <TodoList
                        removeTodo={this.props.removeTodo}
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
};


export const TodoPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPageBase);