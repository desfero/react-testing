import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';

import { TodoList } from './todo-list';

describe('todo-list', () => {
    const todos = [
        {id: 1, title: 'todo 1', completed: false},
        {id: 2, title: 'todo 2', completed: true},
        {id: 3, title: 'todo 3', completed: false}
    ];

    it('should render component', () => {
        const removeTodo = () => {};
        const wrapper = shallow(<TodoList removeTodo={removeTodo} todos={new List(todos)}/>);

        expect(wrapper).toMatchSnapshot();
    });
});