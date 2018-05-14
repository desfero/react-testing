import React from 'react';
import { shallow } from 'enzyme';

import { TodoItem } from './todo-item';

describe('TodoItem', () => {

    const todo = {id: 1, title: 'Something', completed: false};

    it('should render layout', () => {
        const wrapper = shallow(<TodoItem item={todo}/>);

        expect(wrapper).toMatchSnapshot();
    });

    it('should invoke removeTodo after click on button', () => {
        const removeTodo = jest.fn();

        const wrapper = shallow(<TodoItem item={todo} removeTodo={removeTodo}/>);

        wrapper.find('button.todo-item__remove').simulate('click');

        expect(removeTodo).toHaveBeenCalledWith(1);
    });

    it('should invoke changeTodoState after click on checkbox', () => {
        const changeTodoState = jest.fn();

        const wrapper = shallow(<TodoItem item={todo} changeTodoState={changeTodoState}/>);

        wrapper.find('input.todo-item__checkbox').simulate('change');

        expect(changeTodoState).toHaveBeenCalledWith(1);
    });
});