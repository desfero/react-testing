import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class TodoForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired
    };

    state = {title: ''};

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
        );
    }
}
