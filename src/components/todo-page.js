import './todo-page.css';
import React, {Component} from 'react';
import {List} from 'immutable';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createSelector} from 'reselect';

import {createTodo, removeTodo, completeTodo} from '../actions';
import {getTodos} from '../selectors';
import {TodoForm} from './todo-form';
import {TodoList} from './todo-list';


class TodoPageBase extends Component {
  state = { completedFilter: undefined };

  handleFilterChange(value) {
    this.setState({completedFilter: value});
  }

  filterTodos() {
    if (this.state.completedFilter === undefined) {
      return this.props.todos;
    } else {
      return this.props.todos.filter(task => task.done === this.state.completedFilter);
    }
  }

    static propTypes = {
        createTodo: PropTypes.func.isRequired,
        removeTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
        todos: PropTypes.instanceOf(List).isRequired,
    };

    render() {
        return (
            <div id="todos">
                <TodoForm handleSubmit={this.props.createTodo}/>

                <button onClick={() => this.handleFilterChange(true)} className="btn btn-outline-success">Done</button>
                <button onClick={() => this.handleFilterChange(false)} className="btn btn-outline-danger">Todo</button>
                <button onClick={() => this.handleFilterChange(undefined)} className="btn btn-outline-info">All</button>

                <div className="todo-list">
                    <TodoList
                        removeTodo={this.props.removeTodo}
                        completeTodo={this.props.completeTodo}
                        todos={this.filterTodos()}
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
    completeTodo,
};


export const TodoPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoPageBase);
