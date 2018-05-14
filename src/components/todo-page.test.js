import React from 'react';
import {mount, shallow} from 'enzyme';
import { List } from 'immutable';
import configureStore from 'redux-mock-store';

import {TodoPage, TodoPageBase} from './todo-page';
import {Provider} from "react-redux";

jest.mock('../selectors', () => ({
    getTodos(state) {
        return state.todos.list;
    }
}));

jest.mock('../actions', () => ({
    changeTodoState() {
        return {type: 'MOCK_CHANGE_STATE'}
    },
    createTodo() {
        return {type: 'MOCK_CREATE_TODO'}
    },
    removeTodo() {
        return {type: 'MOCK_REMOVE_TODO'}
    }
}));

describe('todo-page', () => {
    const state = {
        todos: {
            filter: 'ALL',
            list: new List([
                {id: 1, title: 'todo 1', completed: false},
                {id: 2, title: 'todo 2', completed: true},
                {id: 3, title: 'todo 3', completed: false}
            ])
        }
    };

    it('should render component', () => {
        const nop = () => {};

        const wrapper = shallow(<TodoPageBase changeTodoState={nop} createTodo={nop} removeTodo={nop} todos={new List([])}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should map state to props', () => {
        const store = configureStore()(state);

        const wrapper = mount(<Provider store={store}><TodoPage/></Provider>);
        const base = wrapper.find(TodoPageBase);
        expect(base.prop('todos').toJS()).toEqual(state.todos.list.toJS());
    });

    it('should dispatch all actions', () => {
        const store = configureStore()(state);

        const wrapper = mount(<Provider store={store}><TodoPage/></Provider>);
        const base = wrapper.find(TodoPageBase);

        base.prop('createTodo')();
        base.prop('removeTodo')();
        base.prop('changeTodoState')();

        expect(store.getActions()).toEqual([
            {type: 'MOCK_CREATE_TODO'},
            {type: 'MOCK_REMOVE_TODO'},
            {type: 'MOCK_CHANGE_STATE'}
        ])
    })
});