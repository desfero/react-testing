import React from 'react';
import configureStore from 'redux-mock-store';

import {mount, render, shallow} from 'enzyme';
import {TodoForm, TodoFormBase} from './todo-form';

jest.mock('../actions', () => ({
    changeFilter(payload) {
        return {
            type: 'MOCK_CHANGE_FILTER',
            payload
        }
    }
}));

describe('todo-form', () => {
    const state = {
        filter: 'ALL',
        list: [
            {id: 1, title: 'todo 1', completed: false},
            {id: 2, title: 'todo 2', completed: true},
            {id: 3, title: 'todo 3', completed: false}
        ]
    };
    it('should correctly render component', async () => {
        const handleSubmit = () => {
        };
        const store = configureStore()(state);
        const wrapper = render(<TodoForm handleSubmit={handleSubmit} store={store}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should handle input change', () => {
        const handleSubmit = () => {
        };
        const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);

        const input = wrapper.find('input');
        const title = 'new todo';
        input.value = title;
        input.simulate('change', {target: {value: title}});

        expect(wrapper.state()).toEqual({title});
    });

    it('should clear the input', () => {
        const handleSubmit = () => {
        };
        const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);
        const title = 'new todo';
        wrapper.setState({title});

        expect(wrapper.state('title')).toEqual(title);
        wrapper.find('input').simulate('keyup', {keyCode: 27});
        expect(wrapper.state('title')).toEqual('');
    });

    it('should not clear the input', () => {
        const handleSubmit = () => {
        };
        const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);
        const title = 'new todo';
        wrapper.setState({title});

        expect(wrapper.state('title')).toEqual(title);
        wrapper.find('input').simulate('keyup', {keyCode: 0});
        expect(wrapper.state('title')).toEqual(title);
    });

    it('should submit the form', () => {
        const handleSubmit = jest.fn();
        const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);

        const title = 'new todo';
        wrapper.setState({title});
        const form = wrapper.find('form');

        form.simulate('submit', {preventDefault: jest.fn()});

        expect(wrapper.state('title')).toEqual('');
        expect(handleSubmit).toHaveBeenCalledWith(title);
    });

    it('should not submit the form', () => {
        const handleSubmit = jest.fn();
        const wrapper = shallow(<TodoFormBase handleSubmit={handleSubmit}/>);

        const title = '';
        wrapper.setState({title});
        const form = wrapper.find('form');

        form.simulate('submit', {preventDefault: jest.fn()});
        expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('should create action CHANGE_FILTER', () => {
        const handleSubmit = () => {
        };
        const store = configureStore()(state);
        const wrapper = mount(<TodoForm handleSubmit={handleSubmit} store={store}/>);

        const select = wrapper.find('select');
        const filterValue = 'COMPLETED';
        select.simulate('change', {target: {value: filterValue}});
        expect(store.getActions()).toEqual([{
            type: 'MOCK_CHANGE_FILTER',
            payload: filterValue
        }])
    });
});