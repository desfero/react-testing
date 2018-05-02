import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../actions';

import './todo-form.css';

export class TodoFormBase extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {title: ''};

    filterOptions = ['ALL', 'COMPLETED', 'UNCOMPLETED'];

    handleChange = event => {
        this.setState({title: event.target.value});
    };

    handleKeyUp = event => {
        if (event.keyCode === 27) this.clearInput();
    };

    handleSubmit = event => {
        event.preventDefault();
        const title = this.state.title.trim();

        if (title.length) {
            this.props.handleSubmit(title);
        }

        this.clearInput();
    };

    clearInput() {
        this.setState({title: ''});
    }

    render() {
        return (
            <Fragment>
                <form onSubmit={this.handleSubmit} noValidate>
                    <input
                      autoComplete="off"
                      autoFocus
                      className="form-control"
                      maxLength="64"
                      onChange={this.handleChange}
                      onKeyUp={this.handleKeyUp}
                      placeholder="What needs to be done?"
                      type="text"
                      value={this.state.title}
                    />
                </form>
                <div className="filter">
                    <span>Filter: </span>
                    <select className="custom-select" value={this.filter} onChange={e => this.props.changeFilter(e.target.value)}>
                        {this.filterOptions.map(filter => <option value={filter} key={filter}>{filter}</option>)}
                    </select>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        filter: state.filter
    }
}

const mapDispatchToProps = {
    changeFilter
};

export const TodoForm = connect(mapStateToProps, mapDispatchToProps)(TodoFormBase);
