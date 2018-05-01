import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'immutable';

import { TodoPageBase } from './todo-page';

describe('todo-page', () => {
    it('should render component', () => {
        const nop = () => {};

        const wrapper = shallow(<TodoPageBase changeTodoState={nop} createTodo={nop} removeTodo={nop} todos={new List([])}/>);

        expect(wrapper).toMatchSnapshot();
    });
});